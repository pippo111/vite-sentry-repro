import { Size, Subscriptions } from "common-types";

export const LIMITS = {
  [Subscriptions.PRO]: 5,
  [Subscriptions.EXPERT]: 25,
  [Subscriptions.TEAM]: 25,
};

export const logoMaxAllowedSize: Size = {
  width: 140,
  height: 48,
};
