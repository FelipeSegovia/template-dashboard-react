import type { ComponentProps } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import LoginPage from './LoginPage'

type StoryProps = ComponentProps<typeof LoginPage>

const meta: Meta<typeof LoginPage> = {
  title: 'Pages/LoginPage',
  component: LoginPage,
  argTypes: {
    // Add your argTypes here
  },
} satisfies Meta<StoryProps>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    // Add your default args here
  },
}