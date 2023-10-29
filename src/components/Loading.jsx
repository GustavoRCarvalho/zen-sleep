import { RiZzzFill } from "react-icons/ri"
import image from "../assets/images/1330761.png"
import styled from "@emotion/styled"

export const Loading = ({ isLoading = false }) => {
  return (
    <Background isLoading={isLoading}>
      <IconZ />
      <SpanTitle>Zen Sleep</SpanTitle>
    </Background>
  )
}

const Background = styled.div`
  position: absolute;
  top: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-image: url(${image});
  background-repeat: no-repeat;
  background-position: 10% 10%;
  background-size: auto 100%;

  width: 100vw;
  height: 100vh;

  opacity: ${(props) => (props.isLoading ? 1 : 0)};

  transition: 1s;
`

const IconZ = styled(RiZzzFill)`
  width: 5em;
  height: 5em;
`

const SpanTitle = styled.span`
  font-size: 2em;
`
