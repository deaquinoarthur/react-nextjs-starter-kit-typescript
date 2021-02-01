import { Story, Meta } from '@storybook/react/types-6-0'
import Intro from '.'

export default {
  title: 'Intro',
  component: Intro
} as Meta

type IntroProps = {
  title: string
  description: string
}

export const Basic: Story<IntroProps> = (args) => <Intro {...args} />

Basic.args = {
  title: 'React and NextJS Starter Kit',
  description: 'Here is where you can start to build something amazing!'
}
