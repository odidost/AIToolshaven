import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";

export default function CollectionPage() {
  // Collections layer is intentionally disabled / removed
  notFound();
}
