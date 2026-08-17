import { google } from 'googleapis';

export interface GscConfig {
  siteUrl: string;
  clientEmail: string;
  privateKey: string;
}

/**
 * Validates and retrieves Google Search Console configuration from environment variables.
 * Throws a safe error without leaking credential values if variables are missing.
 */
export function getGscConfig(): GscConfig {
  const siteUrl = process.env.GSC_SITE_URL;
  const clientEmail = process.env.GSC_CLIENT_EMAIL;
  const privateKey = process.env.GSC_PRIVATE_KEY;

  const missing: string[] = [];
  if (!siteUrl) missing.push('GSC_SITE_URL');
  if (!clientEmail) missing.push('GSC_CLIENT_EMAIL');
  if (!privateKey) missing.push('GSC_PRIVATE_KEY');

  if (missing.length > 0) {
    throw new Error(`Missing required Google Search Console environment variables: ${missing.join(', ')}`);
  }

  return {
    siteUrl: siteUrl!,
    clientEmail: clientEmail!,
    privateKey: privateKey!.replace(/\\n/g, '\n'),
  };
}

/**
 * Initializes and returns an authenticated Google Search Console client.
 * Uses service account JWT authentication with webmasters.readonly scope.
 */
export function getGscClient() {
  const config = getGscConfig();

  const auth = new google.auth.JWT({
    email: config.clientEmail,
    key: config.privateKey,
    scopes: ['https://www.googleapis.com/auth/webmasters.readonly'],
  });

  const searchconsole = google.searchconsole({
    version: 'v1',
    auth,
  });

  return {
    searchconsole,
    siteUrl: config.siteUrl,
  };
}
