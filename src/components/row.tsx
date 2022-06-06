import React from "react";

export interface RowProps {
  className?: string;
}

const Row = ({ className, children }: React.PropsWithChildren<RowProps>) => {
  return <div className={`flex flex-row ${className}`}>{children}</div>;
};

export default Row;
