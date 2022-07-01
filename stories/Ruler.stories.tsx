import React from 'react';
import { Meta, Story } from '@storybook/react';
import Ruler from '../src/Ruler';
import { Props } from '../src/_types';

// 这是组件的标题
const meta: Meta = {
  title: 'Ruler example',
  component: Ruler,
  argTypes: {
    height: {
      control: {
        type: 'number',
      },
      table: { defaultValue: { summary: 30 } },
    },
    width: {
      control: {
        type: 'number',
      },
      table: { defaultValue: { summary: 500 } },
    },
    backgroundColor: {
      control: {
        type: 'color',
      },
      table: { defaultValue: { summary: '#000' } },
    },

    min: {
      control: {
        type: 'number',
      },
      table: { defaultValue: { summary: 0 } },
    },
    max: {
      control: {
        type: 'number',
      },
      table: { defaultValue: { summary: 500 } },
    },
    zoom: {
      control: {
        type: 'number',
      },
      table: { defaultValue: { summary: 1 } },
    },
    horizontal: {
      control: {
        type: 'boolean',
      },
      table: { defaultValue: { summary: true } },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

const Default: Story<Props> = args => {
  return (
    <div style={{ background: '#dc8282', padding: '20px' }}>
      <Ruler {...args} />
    </div>
  );
};
Default.args = {
  height: 46,
  width: 300,
  backgroundColor: '#000',
};

const Vertical: Story<Props> = args => {
  return (
    <div style={{ background: '#dc8282', padding: '20px' }}>
      <Ruler {...args} />
    </div>
  );
};
Vertical.args = {
  height: 220,
  width: 26,
  min: 0,
  max: 200,
  horizontal: false,
};
export default meta;
export { Default, Vertical };
