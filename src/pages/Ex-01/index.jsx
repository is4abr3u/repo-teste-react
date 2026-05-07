import { Link } from 'react-router-dom'
import './style.css'
import { useState, useSyncExternalStore } from 'react'

function Ex01() {

    const [produto, setProduto] = useState("")
    const [valor, setValor] = useState("")
    const [resultado, setResultado] = useState("")

    function conta() {
        event.preventDefault()
        setResultado()
    }
    return (
        <>
            <h1> bem vindo ao exercicio 1</h1>
            <Link to='/'>
                <button>Voltar para Home</button>
            </Link>

            <form onSubmit={conta}>

                <label>Nome do produto:</label>
                <input
                    type='text'
                    value={produto}
                    onChange={(event) => setProduto(event.target.value)}
                />

                <label>Valor do produto:</label>
                <input
                type='text'
                value={valor}
                onChange={(event) => setValor(event.target.value)}
                />

            </>
            )
}

            export default Ex01