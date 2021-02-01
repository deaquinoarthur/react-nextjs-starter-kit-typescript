import { render, screen } from '@testing-library/react'

import Intro from '.'

describe('<Intro />', () => {
  it('should render the heading', function () {
    render(
      <Intro
        title="React and NextJS Starter Kit"
        description="Here is where you can start to build something amazing!"
      />
    )

    const heading = screen.getByRole('heading', /React and NextJS Starter Kit/i)

    expect(heading).toBeInTheDocument()
  })

  it('should render the heading color correctly', function () {
    render(
      <Intro
        title="React and NextJS Starter Kit"
        description="Here is where you can start to build something amazing!"
      />
    )

    const heading = screen.getByRole('heading', /React and NextJS starter Kit/i)

    expect(heading).toHaveStyle({ color: '#002984' })
  })

  it('should render the description color correctly', function () {
    render(
      <Intro
        title="React and NextJS Starter Kit"
        description="Here is where you can start to build something amazing!"
      />
    )

    const description = screen.getByText(
      'Here is where you can start to build something amazing!'
    )

    expect(description).toHaveStyle({ color: '#455a64' })
  })
})
