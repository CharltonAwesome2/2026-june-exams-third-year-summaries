// index.js

import { itsModule } from "./its-information-systems-3/index.js";
import { ethicsModule } from "./professional-practice-3/index.js";
import { accountingModule } from "./accounting-for-marketers/index.js";

// Registry of all third-year modules
// Add new modules here as they are created
export const modules = [
  itsModule,
  ethicsModule,
  accountingModule,
  // Example placeholder for future modules:
  // {
  //   id: "web-dev",
  //   name: "Web Development 3",
  //   description: "Advanced React and Node.js",
  //   icon: "🌐",
  //   color: "#34d399",
  //   welcome: { ... },
  //   chapters: [...]
  // }
];