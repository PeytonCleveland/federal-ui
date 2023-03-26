import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from './Button';

export default {
  title: 'Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = args => <Button {...args} />;

export const Filled = Template.bind({});
Filled.args = {
  children: 'Filled Button',
};

export const Outlined = Template.bind({});
Outlined.args = {
  kind: 'outlined',
  children: 'Outlined Button',
};

export const Text = Template.bind({});
Text.args = {
  kind: 'text',
  children: 'Text Button',
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  children: 'Disabled Button',
};

export const Loading = Template.bind({});
Loading.args = {
  loading: true,
  children: 'Loading Button',
};
