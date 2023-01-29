import GithubActions from "./components/GithubActions";
import ReactProjectStructure from "./components/ReactProjectStructure";
import TableOfContents from "./components/ToC";
import UnitTest from "./components/UnitTest";

export default function App() {
  return (
    <div className="mx-64 mt-36">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-white-primary">
          Frontend Developer
          <br />
          Study Case
        </h1>
        <h4 className="pt-4 text-paragrahp-color">by Irsyad Al Ghifary</h4>
      </div>
      <div className="flex gap-12 pt-20 pb-44">
        <TableOfContents />
        <div className="w-[68%]">
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
