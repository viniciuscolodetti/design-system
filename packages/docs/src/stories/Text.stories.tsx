import type { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from '@colodetti-ui/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui eaque dolores, aspernatur eius illo cumque dolorum odio et laboriosam repellendus, explicabo maxime ipsam, dolore nulla voluptate ut! Molestiae, quis quas.',
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong',
  },
}
