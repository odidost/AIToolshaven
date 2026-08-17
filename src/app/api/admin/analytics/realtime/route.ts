import { NextResponse } from 'next/server';
import { getGa4Realtime } from '@/lib/services/ga4-service';
import { requireAuthAndRole } from '@/lib/auth/rbac';

export const dynamic = 'force-dynamic';

export async function GET() {
  const { isAuthorized } = await requireAuthAndRole('writer');
  if (!isAuthorized) {
    return NextResponse.json(
      { error: 'Unauthorized. Admin access required.', errorCode: 'UNAUTHORIZED' },
      { status: 401 }
    );
  }

  const result = await getGa4Realtime();
  if (!result.success) {
    return NextResponse.json(result, { status: result.errorCode === 'GA4_NOT_CONFIGURED' ? 503 : 500 });
  }

  return NextResponse.json(result);
}
