import { NextResponse } from 'next/server';

const SHEET_RANGE = 'Form Submissions!A:M';

function sanitize(value, max = 1000) {
  return String(value || '').replace(/[\u0000-\u001f\u007f]/g, ' ').trim().slice(0, max);
}

function isLikelyUrl(value) {
  try {
    const url = new URL(value);
    return ['http:', 'https:'].includes(url.protocol) && Boolean(url.hostname.includes('.'));
  } catch {
    return false;
  }
}

function isLikelyEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

async function getAccessToken() {
  const clientId = process.env.GOOGLE_CLIENT_ID;
  const clientSecret = process.env.GOOGLE_CLIENT_SECRET;
  const refreshToken = process.env.GOOGLE_REFRESH_TOKEN;

  if (!clientId || !clientSecret || !refreshToken) {
    throw new Error('Google OAuth environment variables are not configured');
  }

  const response = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      client_id: clientId,
      client_secret: clientSecret,
      refresh_token: refreshToken,
      grant_type: 'refresh_token',
    }),
  });

  const data = await response.json();
  if (!response.ok || !data.access_token) {
    throw new Error(`Google token refresh failed: ${response.status}`);
  }
  return data.access_token;
}

async function appendToSheet(row) {
  const spreadsheetId = process.env.GOOGLE_SHEET_ID;
  if (!spreadsheetId) {
    throw new Error('GOOGLE_SHEET_ID is not configured');
  }

  const accessToken = await getAccessToken();
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${encodeURIComponent(spreadsheetId)}/values/${encodeURIComponent(SHEET_RANGE)}:append?valueInputOption=USER_ENTERED&insertDataOption=INSERT_ROWS`;
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ values: [row] }),
  });

  if (!response.ok) {
    throw new Error(`Google Sheets append failed: ${response.status}`);
  }
}

export async function POST(request) {
  try {
    const body = await request.json().catch(() => ({}));

    if (sanitize(body.company_url, 200)) {
      return NextResponse.json({ ok: true, message: 'Thanks — your discovery request has been received.' }, { headers: { 'Cache-Control': 'no-store' } });
    }

    const name = sanitize(body.name, 120);
    const email = sanitize(body.email, 180).toLowerCase();
    const business = sanitize(body.business, 180);
    const website = sanitize(body.website, 240);
    const country = sanitize(body.country, 120);
    const goal = sanitize(body.goal, 180);
    const message = sanitize(body.message, 1500);
    const pageUrl = sanitize(body.pageUrl, 300);

    const missing = [];
    if (!name) missing.push('name');
    if (!business) missing.push('business');
    if (!website) missing.push('website');
    if (!email) missing.push('email');
    if (!goal) missing.push('goal');

    if (missing.length) {
      return NextResponse.json(
        { ok: false, message: `Missing required field(s): ${missing.join(', ')}` },
        { status: 400, headers: { 'Cache-Control': 'no-store' } }
      );
    }
    if (!isLikelyEmail(email)) {
      return NextResponse.json(
        { ok: false, message: 'Please enter a valid email address.' },
        { status: 400, headers: { 'Cache-Control': 'no-store' } }
      );
    }
    if (!isLikelyUrl(website)) {
      return NextResponse.json(
        { ok: false, message: 'Please enter a full website URL, including https:// or http://.' },
        { status: 400, headers: { 'Cache-Control': 'no-store' } }
      );
    }

    const ipHint = sanitize((request.headers.get('x-forwarded-for') || '').split(',')[0], 80);
    const userAgent = sanitize(request.headers.get('user-agent'), 300);
    const submittedAt = new Date().toISOString();

    const row = [
      submittedAt,
      'New',
      'jbxxnn.com landing page',
      name,
      email,
      business,
      website,
      country,
      goal,
      message,
      pageUrl,
      userAgent,
      ipHint,
    ];

    await appendToSheet(row);
    return NextResponse.json(
      {
        ok: true,
        message: 'Thanks — your discovery request has been received. I’ll review the website and reply with practical next steps.',
      },
      { headers: { 'Cache-Control': 'no-store' } }
    );
  } catch (error) {
    console.error('audit-submit error:', error?.message || error);
    return NextResponse.json(
      {
        ok: false,
        message: 'Something went wrong while sending your request. Please email jbxxnn6@gmail.com directly.',
      },
      { status: 500, headers: { 'Cache-Control': 'no-store' } }
    );
  }
}
