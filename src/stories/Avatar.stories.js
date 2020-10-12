import React from "react";

import Avatar from "../components/Avatar";

export default {
  title: "Example/Avatar",
  component: Avatar,
};

const Template = (args) => <Avatar {...args} />;

export const DefaultAvatar = Template.bind({});
DefaultAvatar.args = {
  width: 40,
  height: 40,
  src: "https://api.adorable.io/avatars/285/abott@adorable.png",
};
