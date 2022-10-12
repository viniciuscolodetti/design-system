import type { StoryObj, Meta } from '@storybook/react'
import { Avatar, AvatarProps } from '@colodetti-ui/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/viniciuscolodetti.png',
    alt: 'Vinicius Colodetti',
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}