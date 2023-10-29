import styled from "@emotion/styled"
import { Grid } from "@mui/material"
import { useState } from "react"
import { AiOutlinePauseCircle, AiOutlinePlayCircle } from "react-icons/ai"

export const Card = ({ title, time, image }) => {
  const [isPlayed, setIsPlayed] = useState()

  return (
    <Item item>
      <ImageContainer>
        <Image src={image} />
      </ImageContainer>
      <InfosContainer>
        <Infos>
          <span>{title}</span>
          <span>{time}min.</span>
        </Infos>
        {!isPlayed && <IconPlay onClick={() => setIsPlayed(true)} />}
        {isPlayed && <IconPause onClick={() => setIsPlayed(false)} />}
      </InfosContainer>
    </Item>
  )
}

const Item = styled(Grid)`
  position: relative;

  border-radius: 0.5em;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  width: 12em;
  height: 12em;

  overflow: hidden;
`

const InfosContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 90%;
`

const Infos = styled.div`
  display: flex;
  flex-direction: column;
`

const IconPlay = styled(AiOutlinePlayCircle)`
  height: 2em;
  width: 2em;

  cursor: pointer;
`
const IconPause = styled(AiOutlinePauseCircle)`
  height: 2em;
  width: 2em;

  cursor: pointer;
`

const ImageContainer = styled.figure`
  position: relative;
  top: 0;
  margin: 0%;

  height: 100%;
  width: 100%;

  overflow: hidden;
`

const Image = styled.img`
  position: absolute;
  width: 300%;
  left: 0%;
  top: -30%;
`
