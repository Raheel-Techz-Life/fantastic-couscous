import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  let b: any;
  try {
    b = await request.json();
  } catch {
    b = {};
  }

  // Honeypot: bots fill the hidden website field
  if (b.website) return NextResponse.json({ ok: true });

  const c = (v: any, n = 200) => String(v || '').trim().slice(0, n);
  const d = {
    at: new Date().toISOString(),
    name: c(b.name || b.contactName, 100),
    company: c(b.company || b.companyName || b.organization, 120),
    phone: c(b.phone, 20),
    email: c(b.email, 100),
    type: c(b.type || b.role || 'Employer', 60),
    city: c(b.city || 'Hubballi-Dharwad', 80),
    volume: c(b.volume || '1-10', 30),
    trades: c(b.trades || b.message, 250),
  };

  // Basic validation: name, company/email, phone (10-15 chars)
  if (!d.name || (!d.company && !d.email) || !/^[+\d\s-]{10,15}$/.test(d.phone)) {
    return NextResponse.json({ ok: false, error: 'Invalid input' }, { status: 400 });
  }

  const url = process.env.SHEET_WEBHOOK_URL;
  if (!url) {
    // If webhook isn't configured yet, accept and return email fallback info
    return NextResponse.json(
      { ok: true, fallback: true, warning: 'SHEET_WEBHOOK_URL not configured' },
      { status: 200 }
    );
  }

  try {
    const r = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain' },
      body: JSON.stringify(d),
    });
    return NextResponse.json({ ok: r.ok }, { status: r.ok ? 200 : 502 });
  } catch {
    return NextResponse.json({ ok: false }, { status: 502 });
  }
}
