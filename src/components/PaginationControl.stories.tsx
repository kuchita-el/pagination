import { Meta, StoryObj } from "@storybook/react";
import { PaginationControl } from './PaginationControl';

const meta: Meta<typeof PaginationControl> = {
    component: PaginationControl
}

export default meta;
type Story = StoryObj<typeof PaginationControl>;

export const Primary: Story = {
    args: {}
}

export const DisabledBack: Story = {
    args: {
        disabledBack: true
    }
}

export const DisabledNext: Story = {
    args: {
        disabledNext: true
    }
}
