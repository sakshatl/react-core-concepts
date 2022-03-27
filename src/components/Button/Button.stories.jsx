import React from 'react';
import Button from './Button';

// default export
export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    type: {
      description: 'Select type of a button',
    },
  }
}

// named export 
// export const Primary = () => <Button type="primary">Click Me</Button>

// args mechanism
const Template = (args) => {
  return (
    <Button {...args} />
  )
}

export const Primary = Template.bind({});

Primary.args = {
  type: "primary",
  children: 'Click Me'
}