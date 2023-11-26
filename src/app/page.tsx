import { headers } from "next/headers";
import { HomePage } from "@/components/pages";
import { isMobileDevice } from "@/utils";

export default function Home() {
  const userAgent = headers().get("user-agent");
  const isMobile = isMobileDevice(userAgent || "");

  return <HomePage isMobile={isMobile} />;
}
