import React from "react";

interface ChildProps {
  color: string;
  onClick: () => void;
  children?: React.ReactNode;
}

export function Child({ color, onClick }: ChildProps) {
  return (
    <div>
      {color}
      <button onClick={onClick}>Click me</button>
    </div>
  );
}

export const ChildAsFC: React.FC<ChildProps> = ({
  color,
  onClick,
  children,
}) => {
  return (
    <div>
      {color}
      <button onClick={onClick}>Click me</button>
      {children}
    </div>
  );
};

export const ChildT: React.FC<{ color: string }> = (props) => {
  return <div>{props.color}</div>;
};
