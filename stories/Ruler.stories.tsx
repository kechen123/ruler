import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Ruler, Props } from '../src/Ruler';

// 这是组件的标题
const meta: Meta = {
  title: 'Ruler example',
  component: Ruler,
  argTypes: {
    height: {
      control: {
        type: 'number',
      },
    },
    width: {
      control: {
        type: 'number',
      },
    },
    backgroundColor: {
      control: {
        type: 'color',
      },
    },
    lineColor: {
      control: {
        type: 'color',
      },
    },
    fontColor: {
      control: {
        type: 'color',
      },
    },
    min: {
      control: {
        type: 'number',
      },
    },
    max: {
      control: {
        type: 'number',
      },
    },
    zoom: {
      control: {
        type: 'number',
      },
    },
    horizontal: {
      control: {
        type: 'boolean',
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

const Default: Story<Props> = args => <Ruler {...args} />;
Default.args = {
  height: 26,
  width: 2000,
  backgroundColor: '#000',
  lineColor: '#FFF',
  fontColor: '#FFF',
  min: 0,
  max: 2000,
  zoom: 1,
  horizontal: true,
};

const Vertical: Story<Props> = args => {
  return <Ruler {...args} />;
};
Vertical.args = {
  height: 220,
  width: 26,
  backgroundColor: '#000',
  lineColor: '#FFF',
  fontColor: '#FFF',
  min: 0,
  max: 220,
  zoom: 1,
  horizontal: false,
};
export default meta;
export { Default, Vertical };
