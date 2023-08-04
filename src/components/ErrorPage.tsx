import { Link } from "react-router-dom"

export default function ErrorPage(){
    return <>
    <h2>Hmm... Something went wrong.</h2>
    <p>It looks like this page doesn't have what you're needing.</p>
    <Link to='/'>Click here to return to home.</Link>
    </>
}