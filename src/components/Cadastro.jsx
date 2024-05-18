import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import axios from 'axios';
import styles from '../components/Cadastro.module.css'

const Cadastro = () => {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
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
        } catch (error) {
            console.error('Erro ao buscar o CEP:', error);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault()

        localStorage.setItem('user', JSON.stringify(formData))
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
                                    value={formData.name}
                                    onChange={handleChange}
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
                                    value={formData.sexo}
                                    onChange={handleChange}
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
                                    value={formData.cpf}
                                    onChange={handleChange}
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
                                    value={formData.nascimento}
                                    onChange={handleChange}
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
                                    value={formData.email}
                                    onChange={handleChange}
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
                                    value={formData.password}
                                    onChange={handleChange}
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
                        <div className={styles.label}>
                            <label >Logradouro </label>
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
                    </div>
                    <div className={styles.containerEmailLabel}>
                        <div className={styles.label}>
                            <label >Bairro </label>
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
                    </div>
                    <div className={styles.containerEmailLabel}>
                        <div className={styles.label}>
                            <label >UF </label>
                            <div className={styles.input}>
                                <input
                                    name='uf'
                                    value={formData.uf}
                                    onChange={handleChange}
                                    type="text" 
                                    required/>
                            </div>
                        </div>
                        <div className={styles.label}>
                            <label >Complemento </label>
                            <div className={styles.input}>
                                <input
                                    name='complemento'
                                    value={formData.complemento}
                                    onChange={handleChange}
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







