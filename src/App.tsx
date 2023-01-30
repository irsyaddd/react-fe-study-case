import { Images } from "./assets";
import GithubActions from "./components/GithubActions";
import ReactProjectStructure from "./components/ReactProjectStructure";
import TableOfContents from "./components/ToC";
import UnitTest from "./components/UnitTest";

export default function App() {
  return (
    <div className="xl:mx-44 mt-36">
      <div className="flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white-primary">
          Frontend Developer
          <br />
          Study Case
        </h1>
        <h4 className="pt-4 text-paragrahp-color">by Irsyad Al Ghifary</h4>
        <div className="flex items-center bg-indigo-500 px-4 py-2 mt-4 rounded-md lg:hidden">
          <a
            href="https://github.com/irsyaddd/react-fe-study-case"
            target="_blank"
            rel="noopener noreferrer"
            className="flex hover:cursor-pointer text-white-primary text-sm"
          >
            Github Repository
          </a>
          <img src={Images.linkArrow} alt="" />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center md:flex-row gap-12 pt-14 lg:pt-20 pb-16 lg:pb-44">
        <TableOfContents />
        <div className="w-full p-6 lg:p-0 xl:w-[68%] lg:w-[60%]">
          <ReactProjectStructure />
          <div className="h-px w-full bg-[#404b5c] my-8" />
          <UnitTest />
          <div className="h-px w-full bg-[#404b5c] my-8" />
          <GithubActions />
        </div>
      </div>
    </div>
  );
}
