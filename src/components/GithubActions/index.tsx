import { Images } from "../../assets";
import { CI_CD } from "../../data";
import HeaderAndDescription from "../HeaderAndDescription";
import Section from "../Section";

export default function GithubActions() {
  return (
    <section id="ci-cd" style={{ scrollMargin: 160 }}>
      <HeaderAndDescription
        title={CI_CD.TITLE}
        description={CI_CD.DESCRIPTION}
      />
      <div className="py-4">
        <Section title="Create a New Project and Repository.">
          The reason why im creating my answer in a form of webpage is to also
          show my implementation related to the tasks given to me and with this
          project i will also use it to demonstrate my CI/CD Pipeline using
          Github Actions
        </Section>
        <div className="bg-element mt-6">
          <img
            src={Images.repoImage}
            alt="testimage"
            className="rounded-md shadow-lg"
          />
        </div>
      </div>
      <div className="pb-4">
        <Section title="Click on Github Actions at Repository.">
          This is where you see all of your workflow (if you made one). In this
          project i already made a workflow <br />
          <code className="bg-element px-2 py-px inline">
            Deploy to Github Pages
          </code>
          . You can made a new workflow by clicking{" "}
          <code className="bg-element px-2 py-px inline"> New workflow</code>{" "}
          button
          <div className="bg-element my-6">
            <img
              src={Images.actionsImage}
              alt="testimage"
              className="rounded-md shadow-lg"
            />
          </div>
          This is the workflow im making spesific for this project. It will
          triggeed on every push at{" "}
          <code className="bg-element px-2 py-px inline">master</code> branch.
          The first action is copying the repository's code, the second one is a
          setup for 3 different node js version, and then the next is install,
          build, and test it. The last action is to deploy it to Github Pages.
          Luckily there is already a workflow template on Github Marketplace so
          i can copy a block of code i need to deploy my code to my Github Pages
        </Section>
        <div className="bg-element mt-6">
          <img
            src={Images.workflowsImage}
            alt="testimage"
            className="rounded-md shadow-lg my-4"
          />
        </div>
      </div>
      <div className="pb-4">
        <Section title="Make changes to the code to trigger the CI/CD Pipeline.">
          The reason why im creating my answer in a form of webpage is to also
          show my implementation related to the tasks given to me and with this
          project i will also use it to demonstrate my CI/CD Pipeline using
          Github Actions.
        </Section>
        <div className="bg-element mt-6"></div>
      </div>
      <div className="pb-4">
        <Section title="See Live logs at Repository to see the CI/CD Running">
          The reason why im creating my answer in a form of webpage is to also
          show my implementation related to the tasks given to me and with this
          project i will also use it to demonstrate my CI/CD Pipeline using
          Github Actions
        </Section>
        <div className="bg-element mt-6">
          <img
            src={Images.workflowsImage}
            alt="testimage"
            className="rounded-md shadow-lg"
          />
        </div>
      </div>
      <p className="text-sm font-bold">Source:</p>
      <ul className="inline-block mt-3">
        {CI_CD.SOURCE.map((item) => (
          <li key={item.id}>
            <a
              href={item.URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm italic flex hover:text-[#adbac7] text-[#6f6f6f]"
            >
              {item.label}{" "}
              <span>
                <img src={Images.linkArrow} alt="arrow" />
              </span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
