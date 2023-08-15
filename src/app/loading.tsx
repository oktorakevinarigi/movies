import { SidebarSkeleton } from "@/components/layouts";
import { CardBannerSkeleton, CardTopRateSkeleton, CardSkeleton } from "@/components/features";

function Loading() {
  return (
    <div>
      <div className="flex w-full">
        <SidebarSkeleton />

        <div className="w-full">
          <div className="animate-pulse">
            <div className="h-10 bg-slate-200 py-8" />
          </div>

          <div className="my-8 flex">
            <div className="sm:ml-10">
              <CardBannerSkeleton />
            </div>
          </div>
          <div className="mb-10 flex flex-col gap-[18px] px-5 sm:px-10">
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
    </div>
  );
}

export default Loading;
