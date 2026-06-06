// project-setup.js

export const projectSetup = {
  id: "project-setup-guide",
  title: "How to Open a Downloaded Project",
  subtitle: "Extract zip files and import into IntelliJ",
  badge: "Reference Guide",

  contextAndPrerequisites: [
    "You have downloaded a project zip file from the course",
    "IntelliJ IDEA is installed"
  ],

  objectives: [
    "Extract a zip file",
    "Open the extracted project in IntelliJ"
  ],

  content: "Downloaded projects come as zip files. Before opening them in IntelliJ, you must extract the contents.",

  additionalKeyPoints: [
    "Windows 10: Right-click → 'Extract All'",
    "Windows 11: Right-click → 'Show more options' → 'Extract All'",
    "After extraction, delete the zip file if you want — the extracted folder is what you need",
    "To open in IntelliJ: Drag the extracted folder into the IntelliJ window, or use File → Open"
  ],

  images: [
    {
      stepNumber: 1,
      title: "Locate the zip file",
      description: "Find the downloaded zip file in your Downloads folder.",
      imageSrc: "/images/extract-step1.png"
    },
    {
      stepNumber: 2,
      title: "Extract the zip file",
      description: "Right-click and select 'Extract All'.",
      imageSrc: "/images/extract-step2.png"
    },
    {
      stepNumber: 2.1,
      title: "Windows 11 only",
      description: "Click 'Show more options' if 'Extract All' isn't visible.",
      imageSrc: "/images/extract-step2b.png"
    },
    {
      stepNumber: 3,
      title: "Choose destination",
      description: "Select where to save the extracted folder, then click 'Extract'.",
      imageSrc: "/images/extract-step3.png"
    },
    {
      stepNumber: 4,
      title: "Open the extracted folder",
      description: "Navigate to the folder you extracted.",
      imageSrc: "/images/extract-step4.png"
    }
    // ,
    // {
    //   stepNumber: 5,
    //   title: "Open in IntelliJ",
    //   description: "Drag the folder into IntelliJ, or use File → Open.",
    //   imageSrc: "/images/extract-step5.png"
    // }
  ]
};