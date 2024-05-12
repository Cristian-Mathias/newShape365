
import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import styles from '../components/Login.module.css'

function Login() {
    const navigate = useNavigate()
    const [input, setInput] = useState({
        email: '',
        password: '',
    })

    const handleLogin = (e) => {
        e.preventDefault()

        const loggeduser = JSON.parse(localStorage.getItem('user'));

        if (input.email === loggeduser.email && input.password === loggeduser.password) {
            localStorage.setItem('loggedin', true)
            navigate('/')
            alert('Login realizado com sucesso!');
        } else {
            alert('Email ou senha inválidos!');
        }
    };


    return (
        <>
            <main className={styles.Main}>
                <div className={styles.logo}>
                    <img src="src\assets\Logo.png" alt="Logomarca" />
                </div>
                <div className={styles.container}>
                    <div className={styles.imagem}>
                        <img src="src\assets\imagem-login-G.jpg" alt="Imagem de um atleta treinando com corda naval" />
                    </div>
                    <form
                        onSubmit={handleLogin}
                        className={styles.containerForm}>
                        <div className={styles.paragrafos}>
                            <p className={styles.text1}>Efetue o seu login</p>
                            <p className={styles.text2}>Construindo uma Nova Forma de vida com a New Shape 365! </p>
                        </div>
                        <div className={styles.containerEmailLabel}>
                            <div className={styles.label}>
                                <label >E-mail </label>
                            </div>
                            <div className={styles.input}>
                                <input
                                    name='email'
                                    value={input.email}
                                    onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })}
                                    type="Email"
                                    required
                                    pattern="^\S+@\S+$"
                                />
                            </div>
                        </div>

                        <div className={styles.containerEmailLabel}>
                            <div className={styles.label}>
                                <label >Senha </label>
                            </div>
                            <div className={styles.input}>
                                <input
                                    name='password'
                                    value={input.password}
                                    onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })}
                                    type="password"
                                    
                                />
                            </div>
                        </div>
                        <div className={styles.buttons}>
                            <button
                                type='submit'
                                className={styles.buttonEnviar}>
                                Entrar
                            </button>
                        </div>
                        <div className={styles.buttons}>
                            <Link to="/cadastro" className={styles.buttonLink}>Cadastre-se</Link>
                        </div>
                    </form>
                </div>
            </main>
        </>
    )
}
export default Login 
