import { IconStep } from "../icons/IconStep";

export interface TabsProps {
  /**
   * The tabs to be rendered.
   */
  tabs: string[];
  /**
   * The active tab.
   */
  activeTabIndex: number;
}

export interface TabProps {
  /**
   * The title of the tab.
   */
  title: string;
  /**
   * The content of the tab.
   */
  content?: React.ReactNode;
  /**
   * The index of the tab.
   */
  index: number;
  /**
   * The active tab index.
   */
  activeTabIndex: number;
}
export const Tab = (props: TabProps) => {
  return (
    <div className="flex flex-row items-center justify-between z-10">
      <div className="flex flex-col items-center justify-center gap-2">
        <div className="flex items-center">
          {props.index < props.activeTabIndex ? (
            <IconStep variant="done" index={props.index} />
          ) : props.index === props.activeTabIndex ? (
            <IconStep variant="current" index={props.index} />
          ) : (
            <IconStep variant="todo" index={props.index} />
          )}
        </div>
        <p className="relative text-text-secondary text-left  font-varela">
          {props.title}
        </p>
      </div>
    </div>
  );
};

export const Connector = (props: {
  variant: "current" | "todo" | "done";
  width: number;
}) => {
  return (
    <div className="relative top-0 mb-8 -ml-3 -mr-3">
      <svg
        width={props.width}
        height="7"
        viewBox={`0 0 ${props.width} 7`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d={`M${props.width} 6.5L-5.24535e-07 6.49998L0 0.5L${props.width} 0.500022L${props.width} 6.5Z`}
          fill={props.variant === "done" ? "#009F55" : "#D1AD99"}
        />
      </svg>
    </div>
  );
};
export const Tabs = ({ tabs, activeTabIndex }: TabsProps) => {
  const finalTabIndex = tabs.length - 1;
  const tabsWithConnectors = tabs
    .map((tab: string, index) => {
      if (index === finalTabIndex) {
        return [tab];
      }
      return [tab, "connector"];
    })
    .flat();
  return (
    <div className="flex flex-row items-center justify-between">
      {tabsWithConnectors.map((tab, index) =>
        tab === "connector" ? (
          <Connector
            key={index}
            variant={
              index < activeTabIndex
                ? "done"
                : index === activeTabIndex
                  ? "current"
                  : "todo"
            }
            width={100}
          />
        ) : (
          <Tab
            key={index}
            title={tab}
            index={index / 2 + 1}
            activeTabIndex={activeTabIndex}
          />
        ),
      )}
    </div>
  );
};
