import React from "react";

import SideBarHeader from "../components/Sidebar/SideBarHeader";

export default {
  title: "Example/SideBarHeader",
  component: SideBarHeader,
};

const Template = (args) => <SideBarHeader {...args} />;

export const DefaultSideBarHeader = Template.bind({});
DefaultSideBarHeader.args = {
  title: "Advertising",
  children: <div className="edit"></div>,
};
export const SecondarySideBarHeader = Template.bind({});
SecondarySideBarHeader.args = {
  title: "Your shortcuts",
  children: <div className="edit">Edit</div>,
};
