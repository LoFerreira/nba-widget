import React from "react";

export interface ColumnProps {
  className?: string;
}

const Column = ({
  className,
  children,
}: React.PropsWithChildren<ColumnProps>) => {
  return <div className={`flex flex-col ${className}`}>{children}</div>;
};

export default Column;
