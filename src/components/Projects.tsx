import { Grid } from "@mui/material";
import MediaCard from "./MediaCard";

export default function Projects() {
  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4}>
          <MediaCard
            id={0}
            name="JacobHewitson.com"
            description="My Portfolio Website."
            githubLink="https://github.com/hewitson-j/website-v3"
            image={[
              "/images/jacobhewitsonwebsite.jpg",
              "Jacob Hewitson Website",
            ]}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <MediaCard
            id={1}
            name="Mine Grinder Website"
            description="Official Website of the Mine Grinder book series."
            githubLink="https://github.com/hewitson-j/minegrinderbook"
            image={["/images/minegrinder.jpg", "Mine Grinder Image"]}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <MediaCard
            id={2}
            name="Leaps and Bounds Pre-K Website"
            description="A website built in React for Leaps and Bounds Pre-K in Colorado Springs."
            githubLink="https://github.com/hewitson-j/leaps-and-bounds"
            image={["/images/leapsandbounds.jpg", "Leaps and Bounds Image"]}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <MediaCard
            id={3}
            name="JacobHewitson.com"
            description="My Portfolio Website."
            githubLink="https://github.com/hewitson-j/website-v3"
          />
        </Grid>
      </Grid>
    </>
  );
}
