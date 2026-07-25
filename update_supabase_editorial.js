const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

async function test() {
  const { data, error } = await supabase.from('tools').select('id, editorial').eq('slug', 'design-com').single();
  if (error) {
    console.log("Error fetching:", error);
    return;
  }

  if (data && data.editorial) {
    const newOverview = `<p>Design.com is a leading AI design platform built for entrepreneurs, startups, and small businesses that need professional branding without the cost or complexity of hiring a designer. Its AI logo generator draws from a library of over 400,000 exclusive, professionally curated designs to produce thousands of customized logo concepts in seconds based on your business name and description.</p>
<p>Beyond logo creation, Design.com functions as an all-in-one brand system. Your logo — including its colors and typography — is automatically integrated across all other branded templates, covering social media posts, business cards, letterheads, websites, and even printed merchandise, making it one of the most integrated branding tools available in 2026.</p>`;

    const newEditorial = {
      ...data.editorial,
      overview: newOverview
    };

    const { error: updateError } = await supabase.from('tools').update({ editorial: newEditorial }).eq('id', data.id);
    if (updateError) {
      console.log("Update Error:", updateError);
    } else {
      console.log("Successfully updated Supabase editorial for design-com!");
    }
  } else {
    console.log("No editorial found");
  }
}
test();
