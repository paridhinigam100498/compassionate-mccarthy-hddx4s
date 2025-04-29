import React, { useState } from "react";
import Profile from "./Profile";
import Interest from "./Interest";
import Setting from "./Setting";

export function Tab() {
  const [activeTab, setActiveTab] = useState(0);
  const [data, setData] = useState({
    name: "paridhi",
    age: "21",
    email: "suman@gmail.com",
  });
  const tabs = [
    {
      name: "Profile",
      component: Profile,
    },
    {
      name: "Interest",
      component: Interest,
    },
    {
      name: "Setting",
      component: Setting,
    },
  ];
  const ActiveTabComponent = tabs[activeTab].component;
  return (
    <>
      <div>
        <div className="heading">
          {tabs.map((t, index) => (
            <div
              key={index}
              className="tab-head"
              onClick={() => setActiveTab(index)}
            >
              {t.name}
            </div>
          ))}
        </div>
      </div>
      <div className="tab-body">
        <ActiveTabComponent dat={data} />
      </div>
    </>
  );
}
