import { notFound } from "next/navigation";

export const revalidate = 86400;

export default function CollectionPage() {
  // Collections layer is intentionally disabled / removed
  notFound();
}
