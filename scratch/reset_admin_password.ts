import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';
import * as path from 'path';

// Load environmental variables relative to current working directory
dotenv.config({ path: path.join(process.cwd(), '.env.local') });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseServiceKey) {
  console.error("Missing SUPABASE credentials in .env.local");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseServiceKey);

async function resetPassword() {
  const email = process.argv[2] || 'admin@example.com';
  const newPassword = process.argv[3] || 'NewAdminPassword123!';

  console.log(`Attempting to reset password for user: ${email}...`);

  // 1. Fetch user by email via admin Auth API
  const { data: { users }, error: listError } = await supabase.auth.admin.listUsers();
  if (listError) {
    console.error('Error fetching users:', listError.message);
    process.exit(1);
  }

  const targetUser = users.find((u: any) => u.email?.toLowerCase() === email.toLowerCase());

  if (!targetUser) {
    console.error(`User with email "${email}" not found.`);
    console.log('Available users are:');
    users.forEach((u: any) => console.log(`- ${u.email} (ID: ${u.id})`));
    process.exit(1);
  }

  // 2. Update user's password using the admin client
  const { error: updateError } = await supabase.auth.admin.updateUserById(
    targetUser.id,
    { password: newPassword }
  );

  if (updateError) {
    console.error('Error updating password:', updateError.message);
    process.exit(1);
  }

  console.log(`Successfully updated password for ${email} to: ${newPassword}`);
}

resetPassword().catch(err => {
  console.error('Error executing script:', err);
});
