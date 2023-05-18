import { ReactNode } from "react";

export function LabeledElement(props: { children: ReactNode; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <label className="mb-1 underline-offset-1">{props.label}</label>
      <div className="flex h-full items-center"> {props.children}</div>
    </div>
  );
}
