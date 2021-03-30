import React from 'react'
import ReactDOM from 'react-dom'
import MainButton, { ButtonSize } from './components/atoms/Button'
import { ArrowDirection } from './components/atoms/Icon/Arrow'

const Root = () => {
  return (
    <MainButton size={ButtonSize.XL} arrow={ArrowDirection.LEFT}>
      Rootasdas
    </MainButton>
  )
}

export default ReactDOM.render(<Root />, document.querySelector('#root'))
