import React from 'react'
import {Link} from "react-router-dom"
import styled from 'styled-components'

const ContainerNav=styled.div`
  
background-color:#81cfcf;
padding:25px;
font-size:21px;

`
const Nav = () => {
  return (
    <ContainerNav>
     
      <Link to="/">Home</Link>
      <Link to="/create">+</Link>

    </ContainerNav>
  )
}

export default Nav