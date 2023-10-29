import { useEffect, useState } from "react"
import { Loading } from "./components/Loading"
import { Home } from "./components/Home/Home"
import styled from "@emotion/styled"

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [isShowingLoading, setIsShowingLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, [1000])
    setTimeout(() => {
      setIsShowingLoading(false)
    }, [2000])
  })

  return (
    <>
      <Content>
        <Home />
      </Content>
      {isShowingLoading && <Loading isLoading={isLoading} />}
    </>
  )
}

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  padding-inline: 2.5%;
`

export default App
