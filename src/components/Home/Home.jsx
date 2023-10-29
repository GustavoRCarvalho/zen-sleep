import { Grid } from "@mui/material"
import { StoriesCardsList } from "../../data/StoriesCardsList"
import { Card } from "./Card"

export const Home = () => {
  return (
    <Grid container gap={"1em"} justifyContent={"center"}>
      {StoriesCardsList.map(({ title, time, image }) => (
        <Card key={title} title={title} time={time} image={image} />
      ))}
    </Grid>
  )
}
