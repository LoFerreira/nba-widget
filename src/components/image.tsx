import React from "react";

type ImageProps = {
  alt: string;
  src?: string;
  width?: number;
  height?: number;
};
const Image = ({ alt, src, width, height }: ImageProps) => {
  return <img alt={alt} width={width} height={height} src={src} />;
};

export default Image;
