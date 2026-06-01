// professional-practice-3/index.js

import { ethicsWelcome } from "./welcome.js";
import { part1 } from "./part1-introduction.js";
import { part2 } from "./part2-ethical-philosophy.js";
import { part3 } from "./part3-business-ethics.js";
import { part4 } from "./part4-information-technology.js";
import { part5 } from "./part5-professionalism.js";

export const ethicsModule = {
  id: "professional-practice-3",
  name: "Professional Practice 3",
  description: "Ethics in Information Technology - Professional Practice",
  icon: "⚖️",
  color: "#10b981",
  welcome: ethicsWelcome,
  chapters: [part1, part2, part3, part4, part5]
};