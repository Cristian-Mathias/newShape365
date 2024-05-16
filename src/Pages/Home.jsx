 import React,{useState,useEffect} from 'react';
import { useNavigate, Link } from 'react-router-dom'
import styles from '../Pages/Home.module.css'

const Home = () => {

    const navigate = useNavigate()
    const userName = JSON.parse(localStorage.getItem('user'))

    const handleLogout = () => {
        localStorage.removeItem('loggedin')
        navigate('/login')
    }
    const [usuarios, setUsuarios] = useState([]);

    async function  getUsuarios(){
        const  response  =  await  fetch("http://localhost:5000/usuarios")
        const  data = await response.json()
        if(data){
            setUsuarios(data)
        }
    }

    useEffect(() => {
        getUsuarios()
    }, []);

    const quantidadeLocais = usuarios.reduce((acc) => {
        return acc + 1;
    }, 0);

    return (
        <>

            <header className={styles.headerContainer}>
                <div className={styles.headerTitle}>
                    <Link to='/locais' className={styles.headerLink}>Locais</Link>
                    <Link to='/cadastrolocal' className={styles.headerLink}>Cadastre-se</Link>
                </div>
                <div className={styles.headerSaudacao}>
                    <p>BEM VINDO, {userName && userName.name.toUpperCase()}!</p>
                </div>
                <div className={styles.headerbutton}>
                    <button
                        onClick={handleLogout}
                        type="button">
                        Sair
                    </button>
                </div>
            </header>
            <main className={styles.mainContainer}>
                <div className={styles.containCards}>
                    <section className={styles.card}>
                        <div className={styles.cardUser}>
                            <p>Usuários Ativos</p>
                        </div>
                        <div className={styles.cardUserQtd} >
                        <p>{usuarios.length}</p>
                        </div>
                    </section>
                    <section className={styles.card}>
                        <div className={styles.cardUser}>
                            <p>Locais Cadastrados</p>
                        </div>
                        <div className={styles.cardUserQtd} >
                        <p>{quantidadeLocais}</p>
                        </div>
                    </section>
                </div>
                <div className={styles.containLista}>
                    <section>
                        <div className={styles.tituloTabela}>
                            <h2>DASHBOARD</h2>
                            <h3>Locais</h3>
                            <p>Localidades Cadastradas</p>
                        </div>
                        <div className={styles.containerTabela}>
                            <table>
                                <thead>
                                    <tr>
                                        <div className={styles.trTh}>
                                            <th>Local</th>
                                        </div>
                                        <div className={styles.trTh}>
                                            <th>Usuário</th>
                                        </div>
                                    </tr>
                                </thead>
                                <tbody>
                                    {usuarios.map((usuario) => (
                                        <tr key={usuario.id}>
                                            <td className={styles.trTd}>{usuario.nome_local}</td>
                                            <td className={styles.trTd}>{usuario.nome}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </section>
                </div>
            </main>
        </>
    )
}
export default Home 

