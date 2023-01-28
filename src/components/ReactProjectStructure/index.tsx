import { Images } from "../../assets";
import { REACT_PROJECT_STRUCTURE } from "../../data";
import HeaderAndDescription from "../HeaderAndDescription";
import Section from "../Section";

export default function ReactProjectStructure() {
  return (
    <section
      id="react-project-structure"
      className="w-3/4"
      style={{ scrollMargin: 160 }}
    >
      <HeaderAndDescription
        title={REACT_PROJECT_STRUCTURE.TITLE}
        description={REACT_PROJECT_STRUCTURE.DESCRIPTION}
      />
      <div className="bg-yellow-100 h-20 my-4 rounded-lg" />
      <Section title="Assets Folder">
        This folder contains all assets of a react project such as image, icon,
        fonts, etc. We can also store a global style CSS folder in here but
        since im using Tailwind CSS in here i dont use it that way.
      </Section>
      <Section title="Components Folder">
        We can store our components like navbar, footer, header, cards, button,
        or this fixed table of contents at the left side inside the components
        folder. It make us easier to find and change or fix the components if
        theres any changes or bug happened. Each component folder should consist
        of a test file to do unit test.
      </Section>
      <Section title="Data Folder">
        I Like to separate the content with the component itself so it become
        more modular. Therefore i can change the content only in this folder. By
        separating data with the component we can write a better and cleaner
        code that easy to write and read. Theres also another folder describe in
        another article. Those are:
      </Section>
      <ul style={{ listStyleType: "disc" }} className="pl-5 my-4">
        {REACT_PROJECT_STRUCTURE.FOLDER_LIST.map((item) => (
          <div>
            <li key={item.id} className="font-bold text-white-primary">
              {item.TITLE}
            </li>
            <p>{item.DESCRIPTION}</p>
          </div>
        ))}
      </ul>
      <p className="text-sm font-bold">Source:</p>
      <ul className="inline-block mt-3">
        {REACT_PROJECT_STRUCTURE.SOURCE.map((item) => (
          <li key={item.id}>
            <a
              href={item.URL}
              className="text-sm italic flex hover:text-[#adbac7] text-[#6f6f6f]"
            >
              {item.label}{" "}
              <span>
                <img src={Images.linkArrow} alt="arrow-image" />
              </span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
