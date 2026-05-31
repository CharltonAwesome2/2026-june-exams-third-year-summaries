import { itsWelcome } from "./welcome.js";
import { chapter1 } from "./chapter1.js";
import { chapter2 } from "./chapter2.js";
import { chapter3 } from "./chapter3.js";
import { chapter4 } from "./chapter4.js";
import { chapter5 } from "./chapter5.js";
import { chapter6 } from "./chapter6.js";

export const itsModule = {
  id: "its-information-systems-3",
  name: "ITS Information Systems 3",
  description: "Database Systems: Design, Implementation, and Management (10th Edition)",
  icon: "🗄️",
  color: "#60a5fa",
  welcome: itsWelcome,
  chapters: [chapter1, chapter2, chapter3, chapter4, chapter5, chapter6]
};