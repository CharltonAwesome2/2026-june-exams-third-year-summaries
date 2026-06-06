// opening-project.js

export const openingProject = {
  id: "opening-project-guide",
  title: "Opening a Project in IntelliJ",
  subtitle: "After extraction, here's how to open it",
  badge: "Setup Guide",

  contextAndPrerequisites: [
    "IntelliJ IDEA is installed and activated",
    "You have extracted the project zip file"
  ],

  objectives: [
    "Open an existing project from the welcome screen",
    "Navigate to the extracted folder",
    "Trust the project folder to enable full features"
  ],

  content: "After extracting a project zip file, you need to open it in IntelliJ. Here's how.",

  additionalKeyPoints: [
    "Always open the FOLDER that contains src/ and pom.xml (or build.gradle)",
    "Don't open individual files — open the whole project folder",
    "Click 'Trust Project' to enable all IntelliJ features",
    "If you click 'Preview in Safe Mode', you won't be able to run the code"
  ],

  images: [
    {
      stepNumber: 1,
      title: "Welcome Screen",
      description: "Click 'Open' to open an existing project.",
      imageSrc: "/images/open-step1.png"
    },
    {
      stepNumber: 2,
      title: "Select the Project Folder",
      description: "Navigate to the folder you extracted earlier. Select it and click 'Select Folder'.",
      imageSrc: "/images/open-step2.png"
    },
    {
      stepNumber: 3,
      title: "Trust the Project",
      description: "Select 'Trust all projects in the folder' and click 'Trust Project'.",
      imageSrc: "/images/open-step3.png"
    },
    {
      stepNumber: 4,
      title: "Project Loaded",
      description: "Your project should now be open with the full project structure visible.",
      imageSrc: "/images/open-step4.png"
    }
  ]
};