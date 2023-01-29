export const REACT_PROJECT_STRUCTURE = {
  TITLE: "React Project Structure Fundamental",
  DESCRIPTION:
    "As it written in many article i found in internet, theres no such the best project structure to implement in a React Project. So we only need to understand what each folder in react project meant to do and structure the project the way we want it. There will be a couple of premade folders when create our react app.",
  FOLDER_LIST: [
    {
      id: "1",
      TITLE: "Layout Folder",
      DESCRIPTION:
        "We can store a file that acts like a container in here. it can be used to the whole project so that the layout is consistent.",
    },
    {
      id: "2",
      TITLE: "Pages Folder",
      DESCRIPTION:
        "Containing all of pages in a react project app. Pages is where various components called and grouped",
    },
    {
      id: "3",
      TITLE: "Routes Folder",
      DESCRIPTION:
        "As the name says, consists of all routes of the application.",
    },
    {
      id: "4",
      TITLE: "Service Folder",
      DESCRIPTION:
        "If we use redux or any state management in react, we create this folder to store the actions, reducer, and the middleware like Redux saga",
    },
  ],
  SOURCE: [
    {
      id: "1",
      label: "Xenonstack: React.js Project Structure",
      URL: "https://www.xenonstack.com/insights/reactjs-project-structure",
    },
    {
      id: "2",
      label: "Alexis Mangin: Organize your React Application",
      URL: "https://alexmngn.medium.com/how-to-better-organize-your-react-applications-2fd3ea1920f1",
    },
    {
      id: "3",
      label: "Geeksforgeeks: Modularize code in React Js",
      URL: "https://www.geeksforgeeks.org/how-to-modularize-code-in-reactjs/",
    },
  ],
};

export const UNIT_TEST = {
  TITLE: "Unit Test with Jest & React Testing Library",
  DESCRIPTION:
    "Unit testing is a method that test individual React Component to check if the component is working as expected. The core benefits of unit testing are:",
  UT_BENEFITS: [
    {
      id: "1",
      TITLE: "Improves the quality of the code.",
      DESCRIPTION:
        "It helps developers to identify the smallest defects that can be present in the units before they go for the integration testing.",
    },
    {
      id: "2",
      TITLE: "Easy to maintain changes.",
      DESCRIPTION:
        "Easier to refactor or Updating component when you test each component of the app individually.",
    },
    {
      id: "3",
      TITLE: "Smooth Debubgging.",
      DESCRIPTION:
        "If a certain test fails, then only the latest changes that have been made to the code need to be debugged.",
    },
    {
      id: "4",
      TITLE: "Reduction in cost.",
      DESCRIPTION:
        "When bugs are detected at an early stage, through unit testing, they can be fixed at almost no cost as compared to a later stage, let's say during production, which can be really expensive.",
    },
  ],
  UT_GENERAL_STRUCTURE: [
    {
      id: "1",
      STRUCTURE: "A test is usually written in a test block.",
    },
    {
      id: "2",
      STRUCTURE:
        "Inside the test block, the first thing we do is to render the component that we want to test.",
    },
    {
      id: "3",
      STRUCTURE: `Select the elements with data-testid.`,
    },
    {
      id: "4",
      STRUCTURE: `Interact with those elements`,
    },
    {
      id: "5",
      STRUCTURE: `Write expected result`,
    },
  ],
  SOURCE: [
    {
      id: "1",
      label: "BrowserStack: Unit Testing using Jest",
      URL: "https://www.browserstack.com/guide/unit-testing-of-react-apps-using-jest",
    },
  ],
};

export const CI_CD = {
  TITLE: "CI/CD Pipeline using Github Actions.",
  DESCRIPTION:
    "This react app project is simply a github pages containing my answer to the study case. In the repository there is actually a setting to setup a github pages. But it also can be done manualy. In this case i will try to make an implement of CI/CD Pipeline using Github Actions to build and test every push and deploy it automatically to Github Pages.",
  SOURCE: [
    {
      id: "1",
      label: "Dev.to: Setting up a CI/CD Workflow",
      URL: "https://www.browserstack.com/guide/unit-testing-of-react-apps-using-jest",
    },
    {
      id: "2",
      label: "Github Blog: Build CI/CD Pipeline Github Actions",
      URL: "https://github.blog/2022-02-02-build-ci-cd-pipeline-github-actions-four-steps/",
    },
  ],
};

export const TASK_LIST = [
  {
    id: "1",
    question: "React Project Structure Fundamental",
    scrollTo: "react-project-structure",
  },
  {
    id: "2",
    question: "Unit testing with Jest & React Testing Library.",
    scrollTo: "unit-test",
  },
  {
    id: "3",
    question: "CI/CD on Github using Github action.",
    scrollTo: "ci-cd",
  },
];
