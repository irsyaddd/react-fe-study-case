import React from "react";

interface ButtonProps {
  buttonText: string;
  onClick: () => void;
  testId: string;
}

export default function Button(props: ButtonProps) {
  return (
    <button
      data-testid={props.testId}
      onClick={props.onClick}
      className="bg-indigo-500 hover:bg-indigo-400 active:bg-indigo-600 ease-in-out duration-150 active:duration-[0ms] px-6 py-4 rounded-md text-white-primary font-bold text-sm"
    >
      {props.buttonText}
    </button>
  );
}
