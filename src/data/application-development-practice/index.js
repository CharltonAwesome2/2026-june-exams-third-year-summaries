// index.js

import { dddWelcome } from "./welcome.js";
import { dddFlowLayers } from "./chapter1-ddd-flow.js";
import { dddDomainObjects } from "./chapter2-domain-objects.js";
import { dddApplicationLayer } from "./chapter3-application-layer.js";
import { dddInfrastructureSpring } from "./chapter4-infrastructure-spring.js";
import { dddTesting } from "./chapter5-testing.js";
import { projectSetup } from "./project-setup.js";
import { intellijActivation } from "./intellij-activation.js";
import { openingProject } from "./opening-project.js";



export const appDevModule = {
  id: "application-development-practice",
  name: "Application Development Practice",
  description: "Domain-Driven Design — Architecture, Patterns, and Testing",
  icon: "💻",
  color: "#f97316",
  welcome: dddWelcome,
  chapters: [
    projectSetup,
    intellijActivation,
    openingProject,
    dddFlowLayers,
    dddDomainObjects,
    dddApplicationLayer,
    dddInfrastructureSpring,
    dddTesting
  ]
};