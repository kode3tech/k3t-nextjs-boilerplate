import { render, screen } from '@testing-library/react'

import Main from '.'

describe('<Main />', () => {
  it('should render the heading', () => {
    // renderiza o component
    render(<Main />)

    // busca o elemento e verifica a existência dele
    expect(
      screen.getByRole('heading', { name: /kode3 tech/i })
    ).toBeInTheDocument()
  })

  it('should render the logo', () => {
    // renderiza o component
    render(<Main />)

    // busca o elemento pela role e depois checa o src
    const logo = screen.getByRole('img', { name: /kode3 tech/i })
    expect(logo).toHaveAttribute('src', expect.stringContaining('logo.svg'))
  })

  it('should render the description', () => {
    // renderiza o component
    render(<Main />)

    // busca o elemento e verifica a existência dele
    expect(
      screen.getByText(
        'Transformamos ideias em soluções eficientes e inovadoras.'
      )
    ).toBeInTheDocument()
  })
})
