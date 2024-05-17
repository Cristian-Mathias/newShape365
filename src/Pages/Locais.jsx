

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, Link, useParams } from 'react-router-dom';
import Modal from '../components/Modal';
import styles from '../Pages/Locais.module.css';

function Locais() {
    const navigate = useNavigate();

    const [openModal, setOpenModal] = useState(false);
    const [editingUser, setEditingUser] = useState(null);
    const [nome, setNome] = useState('');
    const [praticaEsportiva, setPraticaEsportiva] = useState('');
    const [nomeLocal, setNomeLocal] = useState('');
    const [cep, setCep] = useState('');
    const [logradouro, setLogradouro] = useState('');
    const [bairro, setBairro] = useState('');
    const [cidade, setCidade] = useState('');
    const [uf, setUf] = useState('');
    const [complemento, setComplemento] = useState('');

    const userName = JSON.parse(localStorage.getItem('user'));

    const handleLogout = () => {
        localStorage.removeItem('loggedin');
        navigate('/login');
    }

    const [usuarios, setUsuarios] = useState([]);

    async function getUsuarios() {
        try {
            const response = await axios.get("http://localhost:5000/usuarios");
            setUsuarios(response.data);
        } catch (error) {
            console.error('Erro ao buscar usuários:', error.message);
        }
    }

    useEffect(() => {
        getUsuarios();
    }, []);

    async function deletarUsuarios(id) {
        try {
            await axios.delete(`http://localhost:5000/usuarios/${id}`);
            alert('Cadastro deletado com sucesso');
            getUsuarios();
        } catch (error) {
            console.error('Erro ao deletar cadastro:', error.message);
        }
    }

    const { id } = useParams();
    useEffect(() => {
        if (id) {
            axios.get(`http://localhost:5000/usuarios/${id}`)
                .then(res => {
                    const userData = res.data;
                    setEditingUser(userData);
                    setNome(userData.nome);
                    setPraticaEsportiva(userData.pratica_esportiva);
                    setNomeLocal(userData.nome_local);
                    setCep(userData.cep);
                    setLogradouro(userData.logradouro);
                    setBairro(userData.bairro);
                    setCidade(userData.cidade);
                    setUf(userData.uf);
                    setComplemento(userData.complemento);
                })
                .catch(err => console.log(err));
        }
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:5000/usuarios/${editingUser.id}`, {
                nome,
                pratica_esportiva: praticaEsportiva,
                nome_local: nomeLocal,
                cep: cep,
                logradouro: logradouro,
                bairro: bairro,
                cidade: cidade,
                uf: uf,
                complemento: complemento
            });
            alert('Cadastro editado com sucesso');
            setOpenModal(false);
            getUsuarios();
            setNome('');
            setPraticaEsportiva('');
            setNomeLocal('');
            setCep('');
            setLogradouro('');
            setBairro('');
            setCidade('');
            setUf('');
            setComplemento('');
        } catch (error) {
            console.error('Erro ao editar cadastro:', error.message);
        }
    }

    return (
        <>
            <header className={styles.headerContainer}>
                <div className={styles.headerTitle}>
                    <Link to='/' className={styles.headerLink}>Dashboard</Link>
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
            <main>
                <div className={styles.containerSection}>
                    <section>
                        <div className={styles.tituloTabela}>
                            <h2>LOCAIS</h2>
                        </div>
                        <div className={styles.containerTabela}>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Usuário</th>
                                        <th>Local</th>
                                        <th>Prática Esportiva</th>
                                        <th className={styles.thOpcoes}>Opções</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {usuarios.map((usuario) => (
                                        <tr key={usuario.id}>
                                            <td className={styles.trTd}>{usuario.nome}</td>
                                            <td className={styles.trTd}>{usuario.nome_local}</td>
                                            <td className={styles.trTd}>{usuario.pratica_esportiva}</td>
                                            <td className={styles.trTdOpcoes}>
                                                <div className={styles.buttons}>
                                                    <button className={styles.btn} onClick={() => {
                                                        setEditingUser(usuario);
                                                        setOpenModal(true);
                                                    }}>editar</button>
                                                    <button className={styles.btnExcluir} onClick={() => deletarUsuarios(usuario.id)}>excluir</button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </section>
                </div>
            </main>
            <Modal isOpen={openModal} setModalOpen={() => setOpenModal(!openModal)}>
                <form onSubmit={handleSubmit} className={styles.containerForm}>
                    <p className={styles.title}>Atualizar local de exercícios</p>
                    <div className={styles.containerEmailLabel}>
                        <div className={styles.label}>
                            <label >Nome</label>
                            <div className={styles.input}>
                                <input
                                    name='nome'
                                    value={nome}
                                    onChange={(e) => setNome(e.target.value)}
                                    required
                                />
                            </div>
                        </div>
                        <div className={styles.label}>
                            <label >Prática esportiva</label>
                            <div className={styles.input}>
                                <input
                                    name='pratica_esportiva'
                                    value={praticaEsportiva}
                                    onChange={(e) => setPraticaEsportiva(e.target.value)}
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
                                    value={nomeLocal}
                                    onChange={(e) => setNomeLocal(e.target.value)}
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
                                    value={cep}
                                    onChange={(e) => setCep(e.target.value)}
                                    type="text"
                                    maxLength={9}
                                    required
                                    pattern="\d{5}-?\d{3}"
                                    placeholder="00000-000"
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
                                    value={logradouro}
                                    onChange={(e) => setLogradouro(e.target.value)}
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
                                    value={bairro}
                                    onChange={(e) => setBairro(e.target.value)}
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
                                    value={cidade}
                                    onChange={(e) => setCidade(e.target.value)}
                                    type="text"
                                    required />
                            </div>
                        </div>
                        <div className={styles.label}>
                            <label >UF </label>
                            <div className={styles.input}>
                                <input
                                    name='uf'
                                    value={uf}
                                    onChange={(e) => setUf(e.target.value)}
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
                                    value={complemento}
                                    onChange={(e) => setComplemento(e.target.value)}
                                    type="text"
                                    required />
                            </div>
                        </div>
                    </div>
                    <div className={styles.buttonModal}>
                        <button type='submit' className={styles.buttonEditar}>Editar</button>
                    </div>
                </form>
            </Modal>
        </>
    );
}

export default Locais;
