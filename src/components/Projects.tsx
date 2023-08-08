import { Button, Container, Grid } from "@mui/material";
import MediaCard from "./MediaCard";

export default function Projects(){
    return <>
    
    <Grid container spacing={3}>
        <Grid item xs={4}><MediaCard id={1}/></Grid>
        <Grid item xs={4}><MediaCard id={2}/></Grid>
        <Grid item xs={4}><MediaCard id={3}/></Grid>
        <Grid item xs={4}><MediaCard id={4}/></Grid>
    </Grid>
    <br/>
    <Container>
      <Button variant='contained' size='large'>Project Description</Button>
    </Container>
    
  </>
}