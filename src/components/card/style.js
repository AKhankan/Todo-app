import styled from "styled-components"
import {AiOutlineAppstoreAdd} from "react-icons/ai";

export const CardWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: auto;
  margin-top: 30px;
  padding-top: 30px;
  width: 400px;
  min-height: 87vh;  
  background-color: white;
  border-radius: 10px;
  color: black;
`

export const CardTitle = styled.h1`
  background-color: white;
  color: #4e6190;
`

export const SubmitButton = styled(AiOutlineAppstoreAdd)`
  
  color: #4e6190;
  width: 50px;
  height: 40px;
  margin-left: 20px;
  border-radius: 10px;
  border: none;

  &:hover{
    cursor: pointer;
    color: blue;
  }
`


export const InputWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;

`




export const CardInput = styled.input`
width: 200px;
background-color: #4e6190;
color: white;
border-radius: 5px;
outline: none;
border: white;
padding: 10px;
font-family: Verdana, Geneva, Tahoma, sans-serif;

&::placeholder {
  color: white;
}
`


export const ListContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;  
  gap: 20px;
  margin: 86px;
  margin-left: 98px;
  
  
`


