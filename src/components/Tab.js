import React from "react";
import Profile from "./Profile";
import Interest from "./Interest";
import Setting from "./Setting";

export function Tab() {
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
  return (
    <div>
      <div className="heading">
        {tabs.map((t) => (
          <div className="tab-head">{t.name}</div>
        ))}
      </div>
    </div>
  );
}
