import { buttons } from "./components/buttons";
import { cards } from "./components/cards";

export type ExploreItem = {
  slug: string;
  title: string;
  description: string;
  type: "component" | "section" | "page";
  count: number;
};

export const exploreItems: ExploreItem[] = [
  {
    slug: "buttons",
    title: "Buttons",
    description:
      "Modern button styles and variations that you can copy directly into your project.",
    type: "component",
    count: buttons.length,
  },
  {
    slug: "cards",
    title: "Cards",
    description:
      "Beautiful card layouts for profiles, products, pricing, content and more.",
    type: "component",
    count: cards.length,
  },
];
