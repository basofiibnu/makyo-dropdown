import type { Meta, StoryObj } from '@storybook/react';

import { Dropdown } from '.';
import { optionsList } from '@/app/constants';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/Dropdown',
  component: Dropdown,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  //   argTypes: {
  //     backgroundColor: { control: 'color' },
  //   },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  //   args: { onClick: fn() },
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

// // More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    options: optionsList,
    label: 'Label',
  },
};
export const Multiple: Story = {
  args: {
    options: optionsList,
    label: 'Label',
    multiple: true,
  },
};
export const WithoutLabel: Story = {
  args: {
    options: optionsList,
  },
};
export const WithoutSearch: Story = {
  args: {
    label: 'Label',
    options: optionsList,
    searchable: false,
  },
};
export const WithPortal: Story = {
  args: {
    label: 'Label',
    options: optionsList,
    usePortal: true,
  },
};
export const NoFilterOptions: Story = {
  args: {
    label: 'Label',
    options: optionsList,
    useFilter: false,
  },
};
export const Vertical: Story = {
  args: {
    label: 'Label',
    options: optionsList,
    layout: 'vertical',
  },
};
export const Outlined: Story = {
  args: {
    label: 'Label',
    options: optionsList,
    outlined: true,
  },
};
