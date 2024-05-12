import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import styles from '../components/Cadastro.module.css'

const Cadastro = () => {
    const navigate = useNavigate()
    const [input, setInput] = useState({
        name: '',
        sexo: '',
        cpf: '',
        nascimento: '',
        email: '',
        password: '',
        cep: '',
        logradouro: '',
        bairro: '',
        cidade: '',
        uf: '',
        complemento: '',
    })
    const handleSubmit = (e) => {
        e.preventDefault()

        localStorage.setItem('user', JSON.stringify(input))
        navigate('/login')

        alert('Cadastro realizado com sucesso!')
    }

    return (
        <main className={styles.Main}>
            <div className={styles.containerMain}>
                <form
                    onSubmit={handleSubmit}
                    className={styles.containerForm}>
                    <div className={styles.containerParagrafos}>
                        <div className={styles.paragrafos}>
                            <p>Cadastre-se</p>
                        </div>
                        <div className={styles.logo}>
                            <img src="src\assets\icon.png" alt="Logomarca" />
                        </div>
                    </div>
                    <div className={styles.containerEmailLabel}>
                        <div className={styles.label}>
                            <label >Nome </label>
                            <div className={styles.input}>
                                <input
                                    name='name'
                                    value={input.name}
                                    onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })}
                                    type="text"
                                    minLength={4}
                                    required
                                />
                            </div>
                        </div>
                        <div className={styles.label}>
                            <label >Sexo </label>
                            <div className={styles.input}>
                                <input
                                    name='sexo'
                                    value={input.sexo}
                                    onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })}
                                    type="text"
                                    required
                                />
                            </div>
                        </div>
                    </div>
                    <div className={styles.containerEmailLabel}>
                        <div className={styles.label}>
                            <label >CPF </label>
                            <div className={styles.input}>
                                <input
                                    name='cpf'
                                    value={input.cpf}
                                    onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })}
                                    type="text"
                                    maxLengthLength={14}
                                    pattern="\d{3}\.\d{3}\.\d{3}-\d{2}"
                                    placeholder="000.000.000-00"
                                    required
                                />
                            </div>
                        </div>
                        <div className={styles.label}>
                            <label >Data de Nascimento </label>
                            <div className={styles.input}>
                                <input
                                    name='nascimento'
                                    value={input.nascimento}
                                    onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })}
                                    type="text"
                                    required
                                    pattern="\d{2}/\d{2}/\d{4}"
                                    placeholder="dd/mm/aaaa"
                                />
                            </div>
                        </div>
                    </div>
                    <div className={styles.containerEmailLabel}>
                        <div className={styles.label}>
                            <label >Email </label>
                            <div className={styles.input}>
                                <input
                                    name='email'
                                    value={input.email}
                                    onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })}
                                    type="email"
                                    required
                                    pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
                                />
                            </div>
                        </div>
                        <div className={styles.label}>
                            <label >Senha </label>
                            <div className={styles.input}>
                                <input
                                    name='password'
                                    value={input.password}
                                    onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })}
                                    type="password"
                                    required
                                />
                            </div>
                        </div>
                    </div>
                    <div className={styles.containerEmailLabel}>
                        <div className={styles.label}>
                            <label >CEP </label>
                            <div className={styles.input}>
                                <input
                                    name='cep'
                                    value={input.cep}
                                    onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })}
                                    type="text"
                                    maxLength={9}
                                    required
                                    pattern="\d{5}-?\d{3}"
                                    placeholder="00000-000"
                                />
                            </div>
                        </div>
                        <div className={styles.label}>
                            <label >Logradouro </label>
                            <div className={styles.input}>
                                <input
                                    name='logradouro'
                                    value={input.logradouro}
                                    onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })}
                                    type="text"
                                    required
                                />
                            </div>
                        </div>
                    </div>
                    <div className={styles.containerEmailLabel}>
                        <div className={styles.label}>
                            <label >Bairro </label>
                            <div className={styles.input}>
                                <input
                                    name='bairro'
                                    value={input.bairro}
                                    onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })}
                                    type="text"
                                    required
                                />
                            </div>
                        </div>
                        <div className={styles.label}>
                            <label >Cidade </label>
                            <div className={styles.input}>
                                <input
                                    name='cidade'
                                    value={input.cidade}
                                    onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })}
                                    type="text"
                                    required />
                            </div>
                        </div>
                    </div>
                    <div className={styles.containerEmailLabel}>
                        <div className={styles.label}>
                            <label >UF </label>
                            <div className={styles.input}>
                                <input
                                    name='uf'
                                    value={input.uf}
                                    onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })}
                                    type="text" 
                                    required/>
                            </div>
                        </div>
                        <div className={styles.label}>
                            <label >Complemento </label>
                            <div className={styles.input}>
                                <input
                                    name='complemento'
                                    value={input.complemento}
                                    onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })}
                                    type="text" 
                                    required/>
                            </div>
                        </div>
                    </div >
                    <div className={styles.buttons}>
                        <button
                            type='submit'
                            className={styles.buttonEnviar}
                        >Cadastrar</button>
                    </div>
                    <div className={styles.linkLogin}>
                        <p>
                            <Link to={'/login'}>
                                Já Possi conta? - Faça seu login!
                            </Link>
                        </p>
                    </div>
                </form>
            </div>

        </main>
    );
}
export default Cadastro







