import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function parseEditorialItem(item: unknown): unknown {
    if (typeof item === 'string' && item.trim().startsWith('{')) {
        try {
            return JSON.parse(item);
        } catch (_e) {}
    }
    return item;
}

export function getEditorialTitle(item: unknown): string {
    const parsed = parseEditorialItem(item);
    if (typeof parsed === 'object' && parsed !== null && 'title' in parsed) {
        return (parsed as Record<string, unknown>).title as string || '';
    }
    return typeof parsed === 'string' ? parsed : '';
}

export function getEditorialDescription(item: unknown): string {
    const parsed = parseEditorialItem(item);
    if (typeof parsed === 'object' && parsed !== null && 'description' in parsed) {
        return (parsed as Record<string, unknown>).description as string || '';
    }
    return '';
}
