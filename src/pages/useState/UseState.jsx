import { Container, Box, Btn } from "./style"
import { useState } from "react"

const UseState = () => {

const initialCount = 0
const [count, setCount] = useState(initialCount)

const Increment = () =>{
  setCount(prevCount => prevCount + 1)
}
const Decrement = () =>{
  setCount(prevCount => prevCount - 1)
}

const Reset = () => {
  setCount(initialCount)
}

  return(
    <Container>
      <Box>
      <h1>Counter</h1>
      <h2>{count}</h2>
       <Btn onClick={Increment}>Increment</Btn>
       <Btn onClick={Decrement}>Decrement</Btn>
       <Btn onClick={Reset}>Reset</Btn>
      </Box>
    </Container>
  )
}

export default UseState;