import { Typography } from "@mui/material"
import { Link } from "react-router-dom"

export default function ErrorPage(){
    return <>
    <Typography gutterBottom variant='h5' component='div'>Hmm... something went wrong.</Typography>
    <Typography gutterBottom variant='body1' component='div'>This page doesn't have what you're looking for.</Typography>
    <Typography gutterBottom variant='body1' component='div'><Link to='/'>Click here to return to home.</Link></Typography>
    </>
}