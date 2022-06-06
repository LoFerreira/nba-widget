import React from "react";

type ImageProps = {
  className?: string;
  src?: string;
  width?: number;
  height?: number;
};
const Image = ({ className, src, width, height }: ImageProps) => {
  if (!src) {
    return (
      <div className={`${className} bg-gray-200`} style={{ width, height }} />
    );
  }

  return (
    <image className={className} href={src} width={width} height={height} />
  );
};

export default Image;
