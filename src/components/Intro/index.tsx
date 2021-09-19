import * as Style from './styles'

type IntroProps = {
  title: string
  description: string
}

function Intro({ title, description }: IntroProps) {
  return (
    <Style.Intro>
      <Style.Container>
        <h1>{title}</h1>

        <p>{description}</p>

        <img
          src="/img/hero-illustration.svg"
          alt="A man in front of a computer programming"
        />
      </Style.Container>
    </Style.Intro>
  )
}

export default Intro
