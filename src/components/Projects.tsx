import { Grid } from "@mui/material";
import MediaCard from "./MediaCard";
import projects from "../projects";

export default function Projects() {
  return (
    <>
      <Grid container spacing={3}>
        {/* <Grid item xs={12} sm={6} md={4}> */}
        {projects.map((project) => {
          return (
            <Grid item key={project.id} xs={12} sm={6} md={4}>
              <MediaCard
                detailsUrl={`/project/${project.id}`}
                id={project.id}
                name={project.name}
                description={project.description}
                githubLink={project.githubLink}
                image={project.image}
              />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
}
