import type { Metadata } from "next";
import { Photo } from "@/components/Photo";
import { PageHeader, container } from "@/components/site";
import { getLeadership } from "@/lib/content";

export const metadata: Metadata = {
  title: "Leadership",
  description: "The scouts who serve as Troop 65's officers this year.",
};

export default async function LeadershipPage() {
  const page = await getLeadership();
  return (
    <>
      <PageHeader eyebrow="Leadership" title={page.heading} intro={page.intro} />
      <div className={`${container} pb-24`}>
        <ul className="grid grid-cols-2 gap-x-5 gap-y-10 sm:grid-cols-3 lg:grid-cols-4">
          {(page.officers ?? []).map((o, i) => (
            <li key={i}>
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[14px] bg-purple">
                {o.photo?.src ? (
                  <Photo photo={o.photo} sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw" position={o.photo.hotspot ? undefined : "50% 30%"} />
                ) : (
                  <div className="felt flex h-full items-center justify-center" aria-hidden="true">
                    <span className="font-board text-[64px] font-bold tracking-[0.12em] text-gold">65</span>
                  </div>
                )}
              </div>
              <p className="mt-3 text-[13px] font-extrabold uppercase tracking-[0.1em] text-purple">{o.position}</p>
              <p className="text-[19px] font-bold leading-tight">{o.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
