import { NextRequest, NextResponse } from 'next/server';
import { getGa4TrafficSources } from '@/lib/services/ga4-service';
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

  const result = await getGa4TrafficSources(days, limit);
  if (!result.success) {
    return NextResponse.json(result, { status: result.errorCode === 'GA4_NOT_CONFIGURED' ? 503 : 500 });
  }

  return NextResponse.json(result);
}
