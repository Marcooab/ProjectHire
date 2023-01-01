import styled from "styled-components"

export const Container = styled.div`
  height: 90vh;
  display: flex; 
  justify-content: center; 
  align-items: center;
  background-color: #D2E8E3;
  color: white;
`

export const Box = styled.div`
  display: flex; 
  flex-direction: column;
  height: 300px; 
  border: 1px solid black;
  width: 300px; 
  justify-content: center;
  align-items: center;
  gap: 20px;
  background-color: #262626;
  border-radius: 5px;
`

export const Btn = styled.button`
  padding: 10px; 
  border-radius: 5px; 
  font-weight: bold; 
  border: none;
  background-color: #000;
  color: #F2F2F2;
  cursor: pointer;

  &:hover{
   opacity: 0.8;
   border: 1px solid red; 
  }
`