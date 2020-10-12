import React from "react";

import WidgetAds from "../components/Widgets/WidgetAds";

export default {
  title: "Example/Widget",
  component: WidgetAds,
};

const Template = (args) => <WidgetAds {...args} />;

export const DefaultWidgetAds = Template.bind({});
DefaultWidgetAds.args = {
  src: "https://loremflickr.com/240/240",
  title: "Cocacola",
  website: "cococola.com",
};
