import { NextRequest, NextResponse } from 'next/server';
import {
  getGa4PageTraffic,
  getGa4ToolPages,
  getGa4CategoryPages,
  getGa4TopLandingPages,
} from '@/lib/services/ga4-service';
import { requireAuthAndRole } from '@/lib/auth/rbac';

export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
  const { isAuthorized } = await requireAuthAndRole('writer');
  if (!isAuthorized) {
    return NextResponse.json(
      { error: 'Unauthorized. Admin access required.', errorCode: 'UNAUTHORIZED' },
      { status: 401 }
    );
  }

  const searchParams = request.nextUrl.searchParams;
  const days = parseInt(searchParams.get('days') || '28', 10);
  const limit = parseInt(searchParams.get('limit') || '100', 10);
  const type = searchParams.get('type') || 'all';
  const prefix = searchParams.get('prefix') || '';

  let result;
  if (type === 'tools' || prefix === '/tool/') {
    result = await getGa4ToolPages(days, limit);
  } else if (type === 'categories' || prefix === '/category/') {
    result = await getGa4CategoryPages(days, limit);
  } else if (type === 'landing') {
    result = await getGa4TopLandingPages(days, limit);
  } else {
    result = await getGa4PageTraffic({ days, limit, pathPrefix: prefix });
  }

  if (!result.success) {
    return NextResponse.json(result, { status: result.errorCode === 'GA4_NOT_CONFIGURED' ? 503 : 500 });
  }

  return NextResponse.json(result);
}
