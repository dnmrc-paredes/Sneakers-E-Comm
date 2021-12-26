import React from 'react'
import { render } from '@testing-library/react'
import renderer from 'react-test-renderer'
import { ButtonGroup } from './ButtonGroup'
import { ThemeTestProvider } from '../../../styles/theme/ThemeTestProvider'

describe('ButtonGroup component', () => {
  const count = 0
  const setCount = jest.fn()

  it('Render the ButtonGroup', () => {
    const { getByTestId } = render(
      <ThemeTestProvider>
        <ButtonGroup count={count} setCount={setCount} />
      </ThemeTestProvider>
    )
    expect(getByTestId('count')).toBeInTheDocument()
  })

  it('Match the snapshot', () => {
    const tree = renderer.create(
      <ThemeTestProvider>
        <ButtonGroup count={count} setCount={setCount} />
      </ThemeTestProvider>
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
