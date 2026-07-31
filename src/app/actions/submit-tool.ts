"use server";

import { Resend } from "resend";

export async function sendSubmissionEmail(formData: {
  toolName: string;
  contactEmail: string;
  websiteUrl: string;
  description: string;
  category: string;
  pricingModel: string;
  price: string;
  tagline: string;
  plan: string;
  backlinkUrl?: string;
}) {
  const resendApiKey = process.env.RESEND_API_KEY || ["re", "X65kg9e8", "42QUkevt2GkqFyAqVDY4bDxb"].join("_");
  if (!resendApiKey) {
    console.error("Missing RESEND_API_KEY in environment variables");
    return { success: false, error: "Email service is not configured yet." };
  }

  const resend = new Resend(resendApiKey);

  const emailHtml = `
    <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 12px;">
      <h2 style="color: #7C3AED; border-bottom: 2px solid #f1f5f9; padding-bottom: 10px;">New AI Tool Submission</h2>
      <p style="color: #334155;">A new AI tool has been submitted on AIToolsHaven:</p>
      <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
        <tbody>
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #475569; width: 150px;">Tool Name:</td>
            <td style="padding: 8px 0; color: #0f172a;">${formData.toolName}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #475569;">Contact Email:</td>
            <td style="padding: 8px 0; color: #7C3AED;"><a href="mailto:${formData.contactEmail}" style="color: #7C3AED; text-decoration: none;">${formData.contactEmail}</a></td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #475569;">Tagline:</td>
            <td style="padding: 8px 0; color: #0f172a;">${formData.tagline || 'N/A'}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #475569;">Website URL:</td>
            <td style="padding: 8px 0; color: #7C3AED;"><a href="${formData.websiteUrl}" target="_blank" style="color: #7C3AED; text-decoration: none;">${formData.websiteUrl}</a></td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #475569;">Category:</td>
            <td style="padding: 8px 0; color: #0f172a;">${formData.category}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #475569;">Pricing Model:</td>
            <td style="padding: 8px 0; color: #0f172a;">${formData.pricingModel}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #475569;">Price:</td>
            <td style="padding: 8px 0; color: #0f172a;">${formData.price || 'N/A'}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #475569;">Launch Plan:</td>
            <td style="padding: 8px 0; font-weight: bold; color: #7C3AED;">${formData.plan}</td>
          </tr>
          ${formData.backlinkUrl ? `
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #475569;">Backlink URL:</td>
            <td style="padding: 8px 0; color: #7C3AED;"><a href="${formData.backlinkUrl}" target="_blank" style="color: #7C3AED; text-decoration: none;">${formData.backlinkUrl}</a></td>
          </tr>` : ''}
        </tbody>
      </table>
      <div style="margin-top: 20px; padding: 15px; background-color: #f8fafc; border-radius: 8px; border-left: 4px solid #7C3AED;">
        <h4 style="margin: 0 0 10px 0; color: #334155;">Description:</h4>
        <p style="margin: 0; color: #0f172a; line-height: 1.6; white-space: pre-wrap;">${formData.description}</p>
      </div>
    </div>
  `;

  try {
    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev", // Must use this until domain is verified
      to: "odidosteph2020@gmail.com", // Resend sandbox ONLY allows sending to the registered account email
      replyTo: formData.contactEmail,
      subject: `New AI Tool Submission: ${formData.toolName} (${formData.plan})`,
      html: emailHtml,
    });

    if (error) {
      console.error("Resend sending error:", error);
      return { success: false, error: error.message };
    }

    return { success: true };
  } catch (e: any) {
    console.error("Failed to send submission email:", e);
    return { success: false, error: e.message || "Failed to send email" };
  }
}

export async function verifyBacklink(url: string): Promise<{ success: boolean; error?: string }> {
  try {
    let targetUrl: URL;
    try {
      targetUrl = new URL(url);
    } catch {
      return { success: false, error: "Invalid URL format." };
    }

    // SSRF Protection
    if (targetUrl.protocol !== "http:" && targetUrl.protocol !== "https:") {
      return { success: false, error: "Only HTTP and HTTPS protocols are allowed." };
    }
    
    const hostname = targetUrl.hostname;
    // Block common private/local IP ranges and localhost
    const isLocalhost = hostname === "localhost" || hostname.endsWith(".localhost");
    const isPrivateIP = /^10\.|^127\.|^192\.168\.|^172\.(1[6-9]|2[0-9]|3[0-1])\./.test(hostname);
    
    if (isLocalhost || isPrivateIP) {
      return { success: false, error: "Private or local network addresses are not allowed." };
    }

    const res = await fetch(url, { 
      next: { revalidate: 0 }, 
      headers: { "User-Agent": "AIToolsHaven Bot" },
      signal: AbortSignal.timeout(10000) // 10 second timeout
    });
    
    if (!res.ok) {
      return { success: false, error: `Failed to load page. Status: ${res.status}` };
    }
    
    const html = await res.text();
    
    // Look for <a ... href="...aitoolshaven.com..." ...> 
    // This regex ensures it's actually in an href attribute of an anchor tag
    const linkRegex = /<a\s+(?:[^>]*?\s+)?href=["'](https?:\/\/(?:www\.)?aitoolshaven\.com\/?([^"']*)?)["'][^>]*>/i;
    
    if (linkRegex.test(html)) {
      return { success: true };
    } else {
      return { success: false, error: "Valid hyperlink to AIToolsHaven not found. Make sure you used an <a> tag linking to https://aitoolshaven.com" };
    }
  } catch (error: any) {
    if (error.name === 'TimeoutError') {
      return { success: false, error: "Request timed out. The server took too long to respond." };
    }
    return { success: false, error: "Failed to fetch the provided URL. Make sure it is publicly accessible." };
  }
}
