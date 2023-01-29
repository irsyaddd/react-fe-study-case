interface HeaderAndDescriptionProps {
  title: string;
  description: string;
}

export default function HeaderAndDescription(props: HeaderAndDescriptionProps) {
  return (
    <>
      <h3 className="text-3xl font-bold text-white-primary mb-2">
        {props.title}
      </h3>
      <p>{props.description}</p>
    </>
  );
}
