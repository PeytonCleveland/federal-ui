import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import Spinner from './Spinner';

export default {
  title: 'Spinner',
  component: Spinner,
} as ComponentMeta<typeof Spinner>;

const Template: ComponentStory<typeof Spinner> = args => <Spinner {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 'md',
  color: 'primary',
};

export const Sizes = Template.bind({});
Sizes.decorators = [
  () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Spinner size="sm" />
      <Spinner size="md" />
      <Spinner size="lg" />
      <Spinner size="xl" />
    </div>
  ),
];

export const Colors = Template.bind({});
Colors.decorators = [
  () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Spinner color="primary" />
      <div
        style={{
          backgroundColor: '#0A121E',
          padding: '1rem',
          width: 'fit-content',
        }}
      >
        <Spinner color="secondary" />
      </div>
    </div>
  ),
];
