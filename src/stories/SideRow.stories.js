import React from "react";

import SideRow from "../components/Sidebar/SideRow";

export default {
  title: "Example/SideRow",
  component: SideRow,
};

const Template = (args) => <SideRow {...args} />;

export const DefaultSideRow = Template.bind({});
DefaultSideRow.args = {
  src: "https://loremflickr.com/240/240",
  title: "Covid Information Center",
  type: "round",
};
export const SecondarySideRow = Template.bind({});
SecondarySideRow.args = {
  src: "https://loremflickr.com/240/240",
  title: "Your groups",
  type: "square",
};
