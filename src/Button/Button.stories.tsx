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

Disabled.decorators = [
  () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Button disabled>Disabled Button</Button>
      <Button kind="outlined" disabled>
        Disabled Button
      </Button>
      <Button kind="text" disabled>
        Disabled Button
      </Button>
    </div>
  ),
];

export const Loading = Template.bind({});

Loading.decorators = [
  () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Button loading>Loading Button</Button>
      <Button kind="outlined" loading>
        Loading Button
      </Button>
      <Button kind="text" loading>
        Loading Button
      </Button>
    </div>
  ),
];

export const fullWidth = Template.bind({});

fullWidth.decorators = [
  () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Button fullWidth>Filled Button</Button>
      <Button kind="outlined" fullWidth>
        Outlined Button
      </Button>
      <Button kind="text" fullWidth>
        Text Button
      </Button>
    </div>
  ),
];
