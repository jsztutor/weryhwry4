import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {  useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { getCategories } from '../state/actions/categoryActions'
import { createProducts } from '../state/actions/productActions'


const ContainerMain = styled.div`
width:80%;
margin:10px auto;
text-align:center;
background-color:#c0c0c6;
padding:20px;
-webkit-box-shadow: 5px 5px 15px 5px #000000; 
box-shadow: 5px 5px 15px 5px #000000

`

const Form = styled.form`
width:50%;
margin:10px auto;

`
const Input = styled.input`

  width:90%;
  margin:5px;
  height:30px;
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

const Create = () => {

  const navigate = useNavigate()
  
  const[name,setName]=useState('')
  const[size,setSize]=useState('')
  const[image,setImage]=useState('')
  const[category,setCategory]=useState('1-Male')

  const { categories } = useSelector(state => state.categories)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getCategories())
  }, [dispatch])

  const handleAdd=(e)=>{
    let obj={name,size,image,category:Number(category.split('-')[0])}
    console.log('obj',obj)
     e.preventDefault()
     dispatch(createProducts(obj))
     navigate("/")
  }
  return (
    <ContainerMain>
      <h3>Create</h3>
      <Form>

        <Input placeholder='name' value={name} onChange={(e)=>setName(e.target.value)}/>
        <Input placeholder='size'value={size} onChange={(e)=>setSize(e.target.value)}/>
        <Input placeholder='image' value ={image} onChange={(e)=>setImage(e.target.value)}/>
        <select  onChange={(e)=>setCategory(e.target.value)}>
          {categories?.map(item => {
            return <option key={item.id}>
              {item.id}-{item.name}
            </option>
          })}
        </select>
        <Button onClick={handleAdd}>Create</Button>
      </Form>

    </ContainerMain>
  )
}

export default Create