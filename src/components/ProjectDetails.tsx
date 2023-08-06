import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

export const project = {
    id: 0,
    name: "Chat App",
    images: [],
    description: "This application is a messaging application similar to WhatsApp or Facebook Messenger. It sends and receives messages.",
    problem: 'problem',
    packages: [{
        'name': "name",
        'image': 'image'
    }],
    liveLink: 'https://lds.org',
    githubLink: 'https://github.com'
};

interface Package{
    name: string
    image: string
}

interface ProjectDetailsProps  {
    id: number
    name: string
    description: string
    problem: string
    liveLink: string
    githubLink: string
    images: string[]
    packages: Package[]
}

export default function ProjectDetails(project: ProjectDetailsProps){
    return <> 
    <Typography gutterBottom variant='h5' component='div'>{project.name}</Typography>
    <Typography>{project.description}</Typography>
    <Typography>{project.problem}</Typography>
    <Typography gutterBottom>The Github repository is available at <a href={project.githubLink}>here</a>.</Typography>
    <Typography gutterBottom>The project is live <a href={project.liveLink}>here</a>.</Typography>
    {/* <Typography>{props.packages}</Typography> */}
    <Typography variant='body2' component='div'><Link to='/'>Back</Link></Typography>
    
    </>

}