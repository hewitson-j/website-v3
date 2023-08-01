import { Grid } from "@mui/material";
import MediaCard from "./MediaCard";

export default function Projects(){
    return <>
    <Grid container spacing={3}>
        <Grid item xs={4}><MediaCard/></Grid>
        <Grid item xs={4}><MediaCard/></Grid>
        <Grid item xs={4}><MediaCard/></Grid>
        <Grid item xs={4}><MediaCard/></Grid>
    </Grid>
  </>
}