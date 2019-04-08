import React from 'react'
import styled from 'styled-components'

const SpanStyled = styled.span`
  display: block
  color: ${({darker}) => darker ? '#444' : '#777'}

`



export default () => {
  return (
    <>  
      <SpanStyled>Kontakt: arkadiusz.pawlak.web@gmail.com</SpanStyled>
      <SpanStyled>Stworzone przez: Arkadiusz Pawlak i Waldemar Pawlak</SpanStyled>
      <SpanStyled darker>Urządzenia na SUPLI &copy; 2019</SpanStyled>

    </>
  )
}