import * as React from "react";

interface Props {
  name: string;
  children?: React.ReactNode;
}

export function NavPanel(props: Props) {
  const { name, children } = props;

  return (
    <div>
      {/* <h2>{name}</h2> */}
      {children}
    </div>
  );
}
