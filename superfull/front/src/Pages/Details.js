import React from 'react'
import { useDispatch } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { deleteProduct } from '../state/actions/productActions'

const ContainerMain = styled.div`
width:80%;
margin:10px auto;
text-align:center;
background-color:#c0c0c6;
padding:20px;
-webkit-box-shadow: 5px 5px 15px 5px #000000; 
box-shadow: 5px 5px 15px 5px #000000

`
const Button = styled.button`
   background-color:dodgerblue;
   border:1px solid black;
   padding:10px;
   border-radius:10px;
   color:black;
   font-weight:bolder;
   margin-top:10px;
`




const Details = () => {
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const location = useLocation();
    const obj=location.state
    console.log(obj)
    const handleDelete=(id)=>{
        dispatch(deleteProduct(id))
        navigate('/')
     }
    const handleUpdate=(id)=>{
      
        navigate('/update',{state:obj})
     }
  return (
    <ContainerMain>
  <h1> {obj?.name}</h1>
   <p>{obj?.size}</p>
   <p>{obj?.image}</p>
   <Button onClick={()=>handleDelete(obj.id)} >Delete</Button>
   <Button onClick={()=>handleUpdate(obj.id)} >Update</Button>
    </ContainerMain>
  )
}

export default Details