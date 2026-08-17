import { NextResponse } from 'next/server';
import { getGscClient } from '@/lib/gsc/client';

export const dynamic = 'force-dynamic';

/**
 * Server-only test endpoint for Google Search Console API.
 * Queries Search Analytics for query performance data without exposing secrets.
 */
export async function GET() {
  try {
    const { searchconsole, siteUrl } = getGscClient();

    const response = await searchconsole.searchanalytics.query({
      siteUrl,
      requestBody: {
        startDate: '2026-08-01',
        endDate: '2026-08-15',
        dimensions: ['query'],
        rowLimit: 10,
      },
    });

    const rows = response.data.rows || [];

    return NextResponse.json({
      success: true,
      siteUrl,
      rows,
    });
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'An error occurred while communicating with Google Search Console API';
    
    return NextResponse.json(
      {
        success: false,
        error: errorMessage,
      },
      { status: 500 }
    );
  }
}
