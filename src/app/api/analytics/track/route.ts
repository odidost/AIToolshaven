import { NextResponse } from 'next/server';

interface TelemetryEventPayload {
  eventName: 'page_view' | 'affiliate_click' | 'search_query' | 'zero_result_search' | '404_error' | 'bookmark' | 'comparison' | 'newsletter_signup';
  url?: string;
  title?: string;
  referrer?: string;
  query?: string;
  toolSlug?: string;
  userStatus?: string;
  email?: string;
}

// Global telemetry buffer for real-time tracking
const telemetryBuffer: Array<TelemetryEventPayload & { timestamp: string; ipMasked: string }> = [];

export async function POST(request: Request) {
  try {
    const body: TelemetryEventPayload = await request.json();
    const headers = request.headers;
    const userAgent = headers.get('user-agent') || 'Unknown';
    const forwardedFor = headers.get('x-forwarded-for') || '127.0.0.1';

    const ipParts = forwardedFor.split(',')[0].trim().split('.');
    const ipMasked = ipParts.length === 4 ? `${ipParts[0]}.${ipParts[1]}.xxx.xxx` : '192.168.xxx.xxx';

    const logEntry = {
      ...body,
      timestamp: new Date().toISOString(),
      ipMasked,
      userAgent: userAgent.substring(0, 100),
    };

    telemetryBuffer.unshift(logEntry);
    if (telemetryBuffer.length > 500) {
      telemetryBuffer.pop();
    }

    return NextResponse.json({ success: true, logged: logEntry });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 400 });
  }
}

export async function GET() {
  const newsletterSignups = telemetryBuffer.filter(e => e.eventName === 'newsletter_signup').length;
  const affiliateClicks = telemetryBuffer.filter(e => e.eventName === 'affiliate_click').length;
  const pageViews = telemetryBuffer.filter(e => e.eventName === 'page_view').length;

  return NextResponse.json({
    totalEvents: telemetryBuffer.length,
    newsletterSignupsCount: newsletterSignups,
    affiliateClicksCount: affiliateClicks,
    pageViewsCount: pageViews,
    recentEvents: telemetryBuffer.slice(0, 50),
  });
}

function getTelemetryCounts() {
  const newsletterSignups = telemetryBuffer.filter(e => e.eventName === 'newsletter_signup').length;
  const affiliateClicks = telemetryBuffer.filter(e => e.eventName === 'affiliate_click').length;
  const pageViews = telemetryBuffer.filter(e => e.eventName === 'page_view').length;

  return {
    newsletterSignups,
    affiliateClicks,
    pageViews,
    totalEvents: telemetryBuffer.length,
  };
}
