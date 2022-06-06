import React from "react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

type TabsData = {
  label: string;
  content: React.ReactNode;
};

type TabsProps = {
  data: TabsData[];
  tabIndex: number;
  onIndexChange: (value: number) => void;
  bgColor?: "primary" | "secondary";
  fontWeight?: "regular" | "semi-bold";
};

export default function Tabs({
  data,
  tabIndex,
  onIndexChange,
  bgColor = "primary",
  fontWeight = "regular",
}: React.PropsWithChildren<TabsProps>) {
  return (
    <div
      className={`${
        bgColor === "primary" ? "bg-blueocean rounded-b-md" : "bg-black"
      }`}
    >
      <div className="hidden sm:block">
        <div>
          <nav className=" flex" aria-label="Tabs">
            {data.map((tab, index) => {
              const selected = tabIndex === index;
              return (
                <div
                  key={tab.label}
                  onClick={() => onIndexChange(index)}
                  style={{ fontSize: 11 }}
                  className={classNames(
                    selected
                      ? "border-b-2 border-white text-white"
                      : "border-dark text-gray-300",
                    fontWeight === "regular" ? "font-normal" : "font-semibold",
                    "whitespace-nowrap py-3 px-7  uppercase flex-1 flex-grow text-center hover:bg-white50 hover:cursor-pointer"
                  )}
                  aria-current={selected ? "page" : undefined}
                >
                  {tab.label}
                </div>
              );
            })}
          </nav>
        </div>
      </div>
      <div className="bg-black rounded-b-md">{data[tabIndex]?.content}</div>
    </div>
  );
}
