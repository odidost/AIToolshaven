/**
 * Structured server-side error observability.
 */
export function logToolSectionError(toolSlug: string, section: string, error: any) {
  const errMessage = error instanceof Error ? error.message : String(error);
  const errName = error instanceof Error ? error.name : 'UnknownError';
  const timestamp = new Date().toISOString();

  console.error(JSON.stringify({
    event: 'TOOL_PAGE_OPTIONAL_SECTION_ERROR',
    timestamp,
    toolSlug,
    section,
    errorName: errName,
    errorMessage: errMessage
  }));
}
