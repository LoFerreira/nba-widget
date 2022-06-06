import React from "react";

export interface DividerProps {}

const Divider: React.FC<DividerProps> = ({}) => {
  return <div className="border-b w-full border-b-gray-500 my-4" />;
};

export default Divider;
