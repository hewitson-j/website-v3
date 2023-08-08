import { Grid } from "@mui/material";
import MediaCard from "./MediaCard";

export default function Projects() {
  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4}>
          <MediaCard id={1} />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <MediaCard id={2} />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <MediaCard id={3} />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <MediaCard id={4} />
        </Grid>
      </Grid>
    </>
  );
}
