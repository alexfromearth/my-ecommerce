// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentMeta, ComponentStory } from '@storybook/react';

import Select from './index';

export default {
  title: 'Select',
  component: Select,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
  decorators: [
    Story => (
      <div style={{ margin: '3em', width: '300px' }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = args => <Select {...args} />;

export const SelectStory = Template.bind({});
SelectStory.args = {
  options: [
    { label: 'Frankfurt', value: 'Frankfurt' },
    { label: 'Munich', value: 'Munich' },
    { label: 'Berlin', value: 'Berlin' },
  ],
  placeholder: 'Choose city...',
};
