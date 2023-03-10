import { Images } from "../../assets";
import { UNIT_TEST } from "../../data";
import ButtonWithCounter from "../ButtonWithCounter";
import HeaderAndDescription from "../HeaderAndDescription";
import Section from "../Section";

export default function UnitTest() {
  return (
    <section id="unit-test" style={{ scrollMargin: 160 }}>
      <HeaderAndDescription
        title={UNIT_TEST.TITLE}
        description={UNIT_TEST.DESCRIPTION}
      />
      <ul className="py-4">
        {UNIT_TEST.UT_BENEFITS.map((item) => (
          <Section title={item.TITLE} key={item.id}>
            {item.DESCRIPTION}
          </Section>
        ))}
      </ul>
      <p className="py-4">
        Unit testing in react can be used with{" "}
        <span className="font-bold text-white-primary">Jest</span> and{" "}
        <span className="font-bold text-white-primary">
          React Testing Libray.
        </span>{" "}
        Jest is a JavaScript testing framework that allows developers to run
        tests on JavaScript and TypeScript code and can be easily integrated
        with React JS.
      </p>
      <p>
        In this testing scenario, I created a simple counter to increase and
        decrease a counter as you can see down below.
      </p>
      <ButtonWithCounter />
      <p>
        The important thing in unit test to write{" "}
        <code className="bg-element px-2 py-px inline">data-testid</code> in
        order to select element for unit testing. After that, we write a test
        file for component the component we want to test. The general structure
        of a test block is:
      </p>
      <ul style={{ listStyleType: "disc" }} className="pl-5 my-4">
        {UNIT_TEST.UT_GENERAL_STRUCTURE.map((item) => (
          <li key={item.id}>{item.STRUCTURE}</li>
        ))}
      </ul>
      <div className="bg-element flex-col p-4">
        <img
          src={Images.testImage1}
          alt="testimage"
          className="rounded-md shadow-lg w-[32rem] lg:w-[38rem]"
        />
        <img
          src={Images.testImage2}
          alt="testimage"
          className="rounded-md shadow-lg w-[32rem] lg:w-[38rem]"
        />
      </div>
      <p>
        To let Jest know the test file, its important to use extension{" "}
        <code className="bg-element px-2 py-px inline">.test.tsx</code>
      </p>
      <div className="mt-4">
        <p>What the test does is as described down below</p>
        <ul style={{ listStyleType: "disc" }} className="pl-5 my-4">
          <li>
            The test block can be written either using{" "}
            <code className="bg-element px-2 py-px inline"> test()</code> or{" "}
            <code className="bg-element px-2 py-px inline">it()</code>. These
            functions takes two parameters, The test name and the callback
            functions which describes actual test
          </li>
          <li>
            Using the render() method from the react testing library in the
            above test to render the Counter component in a virtual DOM.
          </li>
          <li>
            The screen property from the react testing library helps select the
            elements needed to test by the test ids
          </li>
          <li>
            To interact with the button, using the fireEvent property from the
            react testing library in the test.
          </li>
          <li>
            And finally, it is asserted that the counter element will contain a
            value of 10.
          </li>
        </ul>
      </div>
      <p>
        Then run{" "}
        <code className="bg-element px-2 py-px inline">npm run test</code> to
        run the test file
      </p>
      <div className="mt-4">
        <p>Test Result:</p>
        <div className="bg-element p-6">
          <img
            src={Images.passTestImage}
            alt="pass"
            className="rounded-md shadow-lg w-[32rem]"
          />
        </div>
      </div>
      <p className="text-sm font-bold">Source:</p>
      <ul className="inline-block mt-3">
        {UNIT_TEST.SOURCE.map((item) => (
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
