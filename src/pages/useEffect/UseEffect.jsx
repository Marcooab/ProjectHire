import { Container, Box, Btn } from "./style"
import { useEffect, useState } from "react"


const UseEffect = () => {
  const [count2, setCount2] = useState(0)

  useEffect(() => {
    console.log("Effect run click")
  },[count2])


  return(
    <Container>
      <Box>
        <h1>UseEffect</h1>
        <h2>{count2}</h2>
        <Btn onClick={() => setCount2(prevCount => prevCount + 1)}>Increment</Btn>
      </Box>
    </Container>
  )
}

export default UseEffect; 