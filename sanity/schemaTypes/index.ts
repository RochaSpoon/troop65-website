import * as objects from "./objects";
import * as documents from "./documents";

export const schemaTypes = [...Object.values(objects), ...Object.values(documents)];

/** Documents that exist exactly once. Their IDs match their type names. */
export const singletonTypes = new Set([
  "settings",
  "homePage",
  "aboutPage",
  "whatWeDoPage",
  "ourSpacePage",
  "leadershipPage",
  "joinPage",
  "troopPage",
]);
