import { useCallback, useEffect, useState } from "react";
import { Images } from "../../assets";
import { TASK_LIST } from "../../data";

export default function TableOfContents() {
  const [isHovering, setIsHovering] = useState(false);
  const [active, setActive] = useState("react-project-structure");
  const handleScroll = useCallback((elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) element.scrollIntoView({ block: "start", behavior: "smooth" });
  }, []);

  return (
    <div className="w-1/4 sticky-toc">
      <h4 className="font-bold">Contents</h4>
      <nav>
        <ul className="space-y-3">
          {TASK_LIST.map((item) => (
            <li
              key={item.id}
              onClick={() => {
                setActive(item.id);
                handleScroll(item.scrollTo);
              }}
              className={` ${
                item.id === active ? "text-[#adbac7]" : "text-[#6f6f6f]"
              } hover:cursor-pointer mt-4 hover:text-[#adbac7] text-sm`}
            >
              {item.question}
            </li>
          ))}
          <li
            onMouseOver={() => setIsHovering(true)}
            onMouseOut={() => setIsHovering(false)}
          >
            <a
              href="https://github.com/irsyaddd/react-fe-study-case"
              target="_blank"
              rel="noopener noreferrer"
              className="flex hover:cursor-pointer mt-4 text-[#6f6f6f] hover:text-[#adbac7] text-sm"
            >
              Github Repository
              <span>
                {isHovering ? (
                  <img src={Images.linkArrow} alt="" />
                ) : (
                  <img src={Images.linkArrowDefault} alt="" />
                )}
              </span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
