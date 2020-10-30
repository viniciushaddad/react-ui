import React, { FC } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const ContainerContent = styled.div`
  width: 100%;
  max-width: 80em;
`
const ContainerBox = styled.div`
  display: flex;
  justify-content: center;
`

const Container: React.FC = ({ children }) => (
  <ContainerBox>
    <ContainerContent>{children}</ContainerContent>
  </ContainerBox>
)

Container.propTypes = {
  children: PropTypes.node,
}

export { Container }
