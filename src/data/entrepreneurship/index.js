// index.js

import { entrepreneurshipWelcome } from "./welcome.js";
import { pitchingAndPrototyping } from "./pitching-and-prototyping.js";
import { entrepreneurshipFoundations } from "./entrepreneurship-foundations.js";
import { ideaValidation } from "./idea-validation.js";
import { understandingBusiness } from "./understanding-business.js";
import { raisingCapital } from "./raising-capital.js";
import { financeEssentials } from "./finance-essentials.js";
// import { blockchainBasics } from "./blockchain-basics.js";

export const entrepreneurshipModule = {
  id: "entrepreneurship",
  name: "Entrepreneurship",
  description: "Pitching, validation, finance, and blockchain — complete entrepreneurial curriculum",
  icon: "🚀",
  color: "#34d399",
  welcome: entrepreneurshipWelcome,
  chapters: [
    pitchingAndPrototyping,
    entrepreneurshipFoundations,
    ideaValidation,
    understandingBusiness,
    raisingCapital,
    financeEssentials,
    // blockchainBasics
  ]
};