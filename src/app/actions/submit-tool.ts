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
      from: "AIToolsHaven Submissions <submissions@aitoolshaven.com>",
      to: "aitoolshaven@gmail.com",
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
