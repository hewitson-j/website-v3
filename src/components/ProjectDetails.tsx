import { Typography } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import projects from "../projects";

export const project = {
  id: 0,
  name: "Chat App",
  images: [],
  description:
    "This application is a messaging application similar to WhatsApp or Facebook Messenger. It sends and receives messages.",
  problem: "problem",
  packages: [
    {
      name: "name",
      image: "image",
    },
  ],
  liveLink: "https://lds.org",
  githubLink: "https://github.com",
};

interface Package {
  name: string;
  image: string;
}

interface ProjectDetailsProps {
  name: string;
  description: string;
  problem: string;
  liveLink: string;
  githubLink: string;
  images: string[];
  packages: Package[];
}

function getProject(id: string) {
  return projects.find((project) => {
    return project.id === id;
  });
}

export default function ProjectDetails(props: ProjectDetailsProps) {
  const { id } = useParams();

  const project = getProject(id!);

  return (
    <>
      <Typography gutterBottom variant="h5" component="div">
        {project?.name}
      </Typography>
      <Typography>{project?.description}</Typography>
      <Typography>{project?.problem}</Typography>
      <Typography gutterBottom>
        The Github repository is available at{" "}
        <a href={project?.githubLink}>here</a>.
      </Typography>
      <Typography gutterBottom>
        The project is live <a href={project?.liveLink}>here</a>.
      </Typography>
      {/* <Typography>{props.packages}</Typography> */}

      <Typography variant="body2" component="div">
        <Link to="/">Back</Link>
      </Typography>
    </>
  );
}

{
  /* TODO: Figure out how to go back one in the React router history stack */
}
