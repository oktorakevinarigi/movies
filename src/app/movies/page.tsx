import { headers } from "next/headers";
import { isMobileDevice } from "@/utils";
import { MoviesPage } from "@/components/pages";

export default async function Movies() {
  const userAgent = headers().get("user-agent");
  const isMobile = isMobileDevice(userAgent || "");

  return <MoviesPage isMobile={isMobile} />;
}
