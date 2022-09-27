import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../state/actions/productActions'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

const ContainerMain=styled.div`
width:80%;
margin:10px auto;

display:flex;
flex-wrap:wrap;
`

const ContainerHome=styled.div`
width:31%;  
background-color:#81cfcf;
padding:5px;
border:1px solid black;
margin:5px;
border-radius:10px;
text-align:center;
-webkit-box-shadow: 5px 5px 15px 5px #000000; 
box-shadow: 5px 5px 15px 5px #000000


`
const Button = styled.button`
   background-color:transparent;
   border:1px solid black;
   padding:10px;
   border-radius:10px;
   color:green;
   font-weight:bolder;
`
const Home = () => {
    const {products} =useSelector(state=>state.products)
    const dispatch = useDispatch()
    const navigate=useNavigate()
    console.log(products)
    useEffect(()=>{
   
      dispatch(getProducts())

    },[dispatch])

    
  return (
    <ContainerMain>

     {products.length>0?products.map(item=>{
       const {name,size,category,image,id} =item
       return <ContainerHome key={item.id} >
           <p>{item.name}</p>
           <p>{item.size}</p>
           <p>{item.category}</p>
          
           <Button onClick={()=>navigate('/details',{state:{name,size,category,image,id}})} >Details</Button>
       </ContainerHome>
     }):""}

    </ContainerMain>


  


  )
}

export default Home