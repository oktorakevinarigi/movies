import { headers } from "next/headers";

import { isMobileDevice } from "@/utils";
import { MovieDetailPage } from "@/components/pages";

export default async function Detail({ params }: { params: { id: string } }) {
  const userAgent = headers().get("user-agent");
  const isMobile = isMobileDevice(userAgent || "");

  return <MovieDetailPage isMobile={isMobile} id={params.id} />;
}
