import styled from "styled-components";
import { AiOutlineCheck } from "react-icons/ai";
import {AiTwotoneEdit} from "react-icons/ai";
import {AiOutlineDelete} from "react-icons/ai";


export const DeleteButton = styled(AiOutlineDelete)`
 
  color: #4e6190;
  width: 30px ;
  height: 40px;
  margin-left: 5px;
  border-radius: 10px;
  

  &:hover{
    cursor: pointer;
    color: red;
  }
`

export const ListWrapper = styled.ul`
  .todo-list {
    
    list-style-type: none;
    padding: 0;
    margin: 10px 0;
    display: flex;
    
    }
`

export const Input = styled.input`
flex: 1;
text-decoration: ${props => props.isCompleted ? "line-through" : "auto"};
padding: 5px;
font-family: Verdana, Geneva, Tahoma, sans-serif;
background-color: transparent;
color: #4e6190;
border-radius: 10px;
border: 1px solid #4e6190;
`
export const EditButton = styled(AiTwotoneEdit)`
  color: #4e6190;
  width: 30px;
  height: 40px;
  margin-left: 5px;
  border-radius: 10px;
  border: none;

  &:hover{
    cursor: pointer;
    color: aqua;
  }
`

export const CompletedIcon = styled(AiOutlineCheck)`
  margin-left: 10px;
  border: 1px solid black;
  color: #4e6190;
  width: 30px;
  height: 40px;
  border-radius: 10px;
  border: none;
  
  &:hover{
    cursor: pointer;
    color: green;
  }
`