// intellij-activation.js

export const intellijActivation = {
  id: "intellij-activation-guide",
  title: "Activating IntelliJ IDEA",
  subtitle: "CPUT License Server Setup",
  badge: "Setup Guide",

  contextAndPrerequisites: [
    "IntelliJ IDEA is installed",
    "You have an internet connection"
  ],

  objectives: [
    "Configure IntelliJ to use CPUT's license server",
    "Authorize via JetBrains Account",
    "Verify activation is successful"
  ],

  content: "IntelliJ IDEA requires activation before you can use it. CPUT provides a license server. Follow these steps to activate your installation.",

  additionalKeyPoints: [
    "You only need to activate once — IntelliJ remembers",
    "The license server address is: https://cput.fls.jetbrains.com",
    "Use your CPUT email address (students) or staff email",
    "If activation fails, check your internet connection and try again"
  ],

  images: [
    {
      stepNumber: 1,
      title: "Select License Server",
      description: "Select 'License Server' (radio button), then enter the server address: https://cput.fls.jetbrains.com",
      imageSrc: "/images/activation-step1.png"
    },
    {
      stepNumber: 2,
      title: "Authorization Required",
      description: "Click 'Activate' or  'Initiate authorization process' to continue.",
      imageSrc: "/images/activation-step2.png"
    },
    {
      stepNumber: 3,
      title: "Choose Login Method",
      description: "Your browser will open. Click 'Continue with email'.",
      imageSrc: "/images/activation-step3.png"
    },
    {
      stepNumber: 4,
      title: "Sign In",
      description: "Enter your email address and password (use your CPUT credentials).",
      imageSrc: "/images/activation-step4.png"
    },
    {
      stepNumber: 5,
      title: "Authorize License Vault",
      description: "Click 'Accept' to allow License Vault to access your account.",
      imageSrc: "/images/activation-step5.png"
    },
    {
      stepNumber: 6,
      title: "Authorization Successful",
      description: "Close this page, return to IntelliJ, and try activating again.",
      imageSrc: "/images/activation-step6.png"
    },
    {
      stepNumber: 7,
      title: "Activation Complete",
      description: "You should see 'Ultimate Subscription' issued to CPUT. Click 'Close' to continue.",
      imageSrc: "/images/activation-step7.png"
    }
  ]
};