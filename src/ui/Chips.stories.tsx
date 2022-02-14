import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Chips } from './Chips';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'UI/Chips',
  component: Chips,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Chips>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Chips> = () => <Chips />;

export const Primary = Template.bind({});
