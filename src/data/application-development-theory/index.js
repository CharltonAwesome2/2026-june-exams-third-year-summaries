// index.js

import { theoryWelcome } from "./welcome.js";
import { chapter2SoftwareProcesses } from "./chapter2-software-processes.js";
import { chapter3AgileSoftware } from "./chapter3-agile-software.js";
import { chapter4RequirementsEngineering } from "./chapter4-requirements-engineering.js";
import { chapter5SystemModeling } from "./chapter5-system-modeling.js";
import { chapter6ArchitecturalDesign } from "./chapter6-architectural-design.js";
import { chapter8SoftwareTesting } from "./chapter8-software-testing.js";

export const theoryModule = {
  id: "application-development-theory",
  name: "Application Development Theory",
  description: "Software processes, agile, requirements, modeling, architecture, and testing",
  icon: "📐",
  color: "#a855f7",
  welcome: theoryWelcome,
  chapters: [
    chapter2SoftwareProcesses,
    chapter3AgileSoftware,
    chapter4RequirementsEngineering,
    chapter5SystemModeling,
    chapter6ArchitecturalDesign,
    chapter8SoftwareTesting
  ]
};