import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
  src: string;
} 

export default function Figure({ children, src, style }: Props): JSX.Element {

  return (
    <figure style={{ textAlign: "center" }}>
      <img src={src} style={style}/>
      <figcaption style={{ color: "gray", fontSize: "smaller" }}>
        {children}
      </figcaption>
    </figure>
  );
}
