import styled from "styled-components";

export const EditWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  gap:32px ;  
`
export const EditInput = styled.input`
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

export const UpdateButton = styled.button`
  background-color: #4e6190;
  color: white;
  padding: 10px;
  margin-left: 20px;
  border-radius: 10px;
  border: none;
  `