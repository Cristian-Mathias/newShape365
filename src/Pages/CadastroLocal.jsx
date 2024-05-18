

import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import styles from '../Pages/CadastroLocal.module.css';

const CadastroLocal = () => {
    const navigate = useNavigate();
    

    const userName = JSON.parse(localStorage.getItem('user'));

    const handleLogout = () => {
        localStorage.removeItem('loggedin');
        navigate('/login');
    };

    const [formData, setFormData] = useState({
        nome: "",
        pratica_esportiva: "",
        nome_local: "",
        cep: "",
        logradouro: "",
        bairro: "",
        cidade: "",
        uf: "",
        complemento: "",
    });

    

    const handleChange = (e) => {
        const { name, value } = e.target;
    
        let cleanedValue = value;
        if (name === 'cep') {
            cleanedValue = value.replace(/\D/g, ''); 
        }
        setFormData({ ...formData, [name]: cleanedValue });
    };
    
    const handleBlur = (e) => {
        const { name, value } = e.target;
        if (name === 'cep' && value.length === 8) {
            fetchAddress(value);
        }
    };
    
    
    const fetchAddress = async (cep) => {
        try {
            const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
            const data = response.data;
            setFormData({
                ...formData,
                logradouro: data.logradouro,
                bairro: data.bairro,
                cidade: data.localidade,
                uf: data.uf,
            });
            console.log('Dados recebidos da API ViaCEP:', data);
        } catch (error) {
            console.error('Erro ao buscar o CEP:', error);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch("http://localhost:5000/usuarios", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then(response => response.json())
            .then(data => {
                alert('Usuário cadastrado com sucesso:', data);
                navigate('/locais')
                
            })
            .catch(error => {
                console.error('Erro ao cadastrar usuário:', error);
            });
    }; 



    return (
        <>
            <header className={styles.headerContainer}>
                <div className={styles.headerTitle}>
                    <Link to='/' className={styles.headerLink}>Dashboard</Link>
                    <Link to='/Locais' className={styles.headerLink}>Locais</Link>
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
                                <label >Nome</label>
                                <div className={styles.input}>
                                    <input
                                        name='nome'
                                        value={formData.nome}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>
                            <div className={styles.label}>
                                <label >Prática esportiva </label>
                                <div className={styles.input}>
                                    <input

                                        name='pratica_esportiva'
                                        value={formData.pratica_esportiva}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>
                        </div>
                        <div className={styles.containerEmailLabel}>
                            <div className={styles.label}>
                                <label >Nome do local </label>
                                <div className={styles.input}>
                                    <input
                                        name='nome_local'
                                        value={formData.nome_local}
                                        onChange={handleChange}
                                        type="text"
                                        required
                                    />
                                </div>
                            </div>
                            <div className={styles.label}>
                                <label >CEP </label>
                                <div className={styles.input}>
                                    <input
                                        name='cep'
                                        value={formData.cep}
                                        onChange={handleChange}
                                        type="text"
                                        maxLength={8}
                                        required
                                        pattern="\d{5}-?\d{3}"
                                        onBlur={handleBlur}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className={styles.containerEmailLabel}>
                            <div className={styles.label}>
                                <label > Logradouro</label>
                                <div className={styles.input}>
                                    <input
                                        name='logradouro'
                                        value={formData.logradouro}
                                        onChange={handleChange}
                                        type="text"
                                        required
                                    />
                                </div>
                            </div>
                            <div className={styles.label}>
                                <label > Bairro</label>
                                <div className={styles.input}>
                                    <input
                                        name='bairro'
                                        value={formData.bairro}
                                        onChange={handleChange}
                                        type="text"
                                        required
                                    />
                                </div>
                            </div>
                        </div>
                        <div className={styles.containerEmailLabel}>
                            <div className={styles.label}>
                                <label >Cidade </label>
                                <div className={styles.input}>
                                    <input
                                        name='cidade'
                                        value={formData.cidade}
                                        onChange={handleChange}
                                        type="text"
                                        required />
                                </div>
                            </div>
                            <div className={styles.label}>
                                <label >UF </label>
                                <div className={styles.input}>
                                    <input
                                        name='uf'
                                        value={formData.uf}
                                        onChange={handleChange}
                                        type="text"
                                        required />
                                </div>
                            </div>
                        </div >
                        <div className={styles.containerEmailLabel}>
                            <div className={styles.label}>
                                <label >Complemento </label>
                                <div className={styles.input}>
                                    <input
                                        name='complemento'
                                        value={formData.complemento}
                                        onChange={handleChange}
                                        type="text"
                                        required />
                                </div>
                            </div>
                        </div>
                        <div className={styles.buttons}>
                            <button
                                type='submit'
                                className={styles.buttonEnviar}
                                >Cadastrar</button>
                        </div>
                    </form>
                </div>

            </main>
        </>
    )
};

export default CadastroLocal;
