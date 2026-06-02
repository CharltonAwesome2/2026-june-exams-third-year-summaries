// index.js

import { accountingWelcome } from "./welcome.js";
import { chapter1 } from "./chapter1.js";

export const accountingModule = {
  id: "accounting-for-marketers",
  name: "Accounting for Marketers",
  description: "Financial literacy and accounting principles for marketing professionals",
  icon: "📊",
  color: "#fbbf24",
  welcome: accountingWelcome,
  chapters: [chapter1]
};