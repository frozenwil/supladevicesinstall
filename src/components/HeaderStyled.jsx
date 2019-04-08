import React from 'react'
import styled from 'styled-components'
import supla from '../imgs/supla-logo.svg'

const PageTitleStyled = styled.h1`
  color: white;
  text-align: center;

  @media (min-width: 576px) {
    text-align: left
    float: left
  }
`;
const SuplaIcon = styled.span`
  display: none;
  color: white
  cursor: pointer

  @media (min-width: 576px) {
    display: flex
    float: right
    justify-content: center
    align-items: center;

  }
`
const ImgStyled = styled.img`
  height: 25px
  width: 25px
  margin-right: 10px
`
const HeaderStyled = () => {
  return (
    <>
      <PageTitleStyled>Urządzenia na SUPLI</PageTitleStyled>
      <a href="https://forum.supla.org/" target="_blank" rel="noopener noreferrer"><SuplaIcon><ImgStyled src={supla} />Forum Supla</SuplaIcon></a>
    </>
  )
}

export default HeaderStyled
