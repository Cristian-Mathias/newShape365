import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from '../Pages/Home.module.css'

const Home = () => {
    const navigate = useNavigate()
    const userName = JSON.parse(localStorage.getItem('user'))

    const handleLogout = () => {
        localStorage.removeItem('loggedin')
        navigate('/login')
    }

    return (
        <>
            <header className={styles.headerContainer}>
                <div className={styles.headerTitle}>
                    <h2>DASHBOARD</h2>
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
                            <p>5</p>
                        </div>
                    </section>
                    <section className={styles.card}>
                        <div className={styles.cardUser}>
                            <p>Locais Cadastrados</p>
                        </div>
                        <div className={styles.cardUserQtd} >
                            <p>10</p>
                        </div>
                    </section>
                </div>
                <div className={styles.containLista}>
                    <section>
                        <div>
                            <h3>Locais</h3>
                            <p>Localidades Cadastradas</p>
                        </div>

                    </section>
                </div>
            </main>
        </>
    )
}
export default Home