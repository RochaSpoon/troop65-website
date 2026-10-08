import type { StructureResolver } from "sanity/structure";

const page = (S: Parameters<StructureResolver>[0], id: string, title: string) =>
  S.listItem().title(title).id(id).child(S.document().schemaType(id).documentId(id).title(title));

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Troop 65 website")
    .items([
      S.listItem()
        .title("Announcements")
        .schemaType("announcement")
        .child(S.documentTypeList("announcement").title("Announcements").defaultOrdering([{ field: "date", direction: "desc" }])),
      page(S, "leadershipPage", "Officers (Leadership page)"),
      page(S, "troopPage", "Troop page: calendar, links, forms"),
      S.divider(),
      page(S, "homePage", "Home page"),
      page(S, "aboutPage", "About page"),
      page(S, "whatWeDoPage", "What we do page"),
      page(S, "ourSpacePage", "Our space page"),
      page(S, "joinPage", "Join page"),
      S.divider(),
      page(S, "settings", "Site settings"),
    ]);
