interface SpaceProps {
  height?: number;
  width?: number;
}

export default function Space(props: SpaceProps) {
  return <div style={{ width: props.width, height: props.height }} />;
}
