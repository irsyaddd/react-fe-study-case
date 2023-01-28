import React from "react";

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

export default function Section(props: SectionProps) {
  return (
    <div className="my-4">
      <h4 className="font-bold text-white-primary">{props.title}</h4>
      <p>{props.children}</p>
    </div>
  );
}
