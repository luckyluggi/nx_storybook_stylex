import type { Meta, StoryObj } from '@storybook/react';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { MyButton } from './myButton';

const meta: Meta<typeof MyButton> = {
  component: MyButton,
  title: 'MyButton',
};
export default meta;

type Story = StoryObj<typeof MyButton>;

export const Story1: Story = {
  args: {},
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const buttonElement = canvas.getByText("Test 1");
    expect(buttonElement).toBeTruthy();
    expect(buttonElement).toHaveClass('foo-bar');
  },
  render: ()=>(
    <MyButton className={"foo-bar"} onPress={e => console.log("foo")}>
      Test 1
    </MyButton>
  )
};

export const Story2: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText("Test 2")).toBeTruthy();
  },
  render: ()=>(
    <MyButton onPress={e => alert("Hello")}>
      Test 2
    </MyButton>
  )
};

