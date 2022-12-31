import { Container, Box, Btn } from "./style"
import { useState } from "react"

const UseState = () => {

const [count, setCount] = useState(0)

const Increment = () =>{
  setCount(prevCount => (prevCount + 1))
}

const Decrement = () =>{
  setCount(prevCount => (prevCount - 1))
}

  return(
    <Container>
      <Box>
      <h1>Counter</h1>
      <h2>{count}</h2>
       <Btn onClick={Increment}>Increment</Btn>
       <Btn onClick={Decrement}>Decrement</Btn>
      </Box>

    </Container>
  )
}

export default UseState;