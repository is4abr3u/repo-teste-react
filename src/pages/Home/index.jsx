import { Link } from 'react-router-dom'
import './style.css'

function Home(){
    return(
        <>
        <h1> bem vindo ao home page</h1>
        <Link to= "/Ex01">
        <button>Exercicio 01</button>
        </Link>
        </>
    )
}

export default Home