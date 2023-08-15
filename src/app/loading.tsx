import { headers } from "next/headers";
import { SidebarSkeleton } from "@/components/layouts";
import { CardBannerSkeleton, CardTopRateSkeleton, CardSkeleton } from "@/components/features";
import { isMobileDevice } from "@/utils";

function Desktop() {
  return (
    <>
      <div className="flex w-full">
        <SidebarSkeleton />

        <div className="w-full">
          <div className="animate-pulse">
            <div className="h-[104px] bg-slate-200 py-8" />
          </div>

          <div className="my-8 flex">
            <CardBannerSkeleton isMobile={false} />
          </div>
          <div className="mb-10 flex flex-col gap-[18px] px-10">
            <div className="flex gap-4 overflow-x-auto">
              {Array.from(Array(5).keys()).map(key => (
                <CardTopRateSkeleton key={key} />
              ))}
            </div>
            <div className="grid grid-cols-[repeat(auto-fill,minmax(205px,1fr))] gap-10">
              {Array.from(Array(4).keys()).map(key => (
                <CardSkeleton key={key} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function Mobile() {
  return (
    <>
      <div className="flex w-full">
        <div className="w-full">
          <div className="animate-pulse">
            <div className="h-[104px] bg-slate-200 py-8" />
          </div>

          <div className="my-8 flex h-[338px] w-full px-5">
            <div className="flex-1">
              <CardBannerSkeleton isMobile />
            </div>
          </div>
          <div className="mb-10 flex flex-col gap-[18px] px-5">
            <div className="flex gap-4 overflow-x-auto">
              {Array.from(Array(5).keys()).map(key => (
                <CardTopRateSkeleton key={key} />
              ))}
            </div>
            <div className="grid grid-cols-[repeat(auto-fill,minmax(205px,1fr))] gap-10">
              {Array.from(Array(8).keys()).map(key => (
                <CardSkeleton key={key} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default function Loading() {
  const userAgent = headers().get("user-agent");
  const isMobile = isMobileDevice(userAgent || "");

  if (isMobile) {
    return <Mobile />;
  }
  return <Desktop />;
}
