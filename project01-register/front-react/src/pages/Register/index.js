import styles from './Register.module.css';
import { useState } from 'react';
import axios from 'axios';

export default function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [birthday, setBirthday] = useState('');
    const [cep, setCep] = useState('');
    const [address, setAddress] = useState('');
    const [number, setNumber] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');

    function findCep() {
        axios.get(`https://viacep.com.br/ws/${cep}/json`)
        .then((response) => {            
            setAddress(response.data.logradouro);
            setCity(response.data.localidade);
            setState(response.data.uf);
        })
    }        

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post(`http://localhost:3000/users`, {
            email: email,
            password: password,
            name: name,
            birthday: birthday,
            cep: cep,
            address: address,
            number: number,
            city: city,
            state: state
        })

        setEmail('');
        setPassword('');
        setName('');
        setBirthday('');
        setCep('');
        setAddress('');
        setNumber('');
        setCity('');
        setState('');
    };

    return (
        <main className={styles.register}>
            <h1 className={styles.title}>Register</h1>
            <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.field}>
                    <label className={styles.label}>Email:</label>
                    <input type='email' className={styles.input} value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div className={styles.field}>
                    <label className={styles.label}>Password:</label>
                    <input type='password' className={styles.input} value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>

                <div className={styles.field}>
                    <label className={styles.label}>Name:</label>
                    <input type='text' className={styles.input} value={name} onChange={(e) => setName(e.target.value)} />
                </div>

                <div className={styles.field}>
                    <label className={styles.label}>Birthday:</label>
                    <input type='date' className={styles.input} value={birthday} onChange={(e) => setBirthday(e.target.value)} />
                </div>

                <div className={styles.field}>
                    <label className={styles.label}>CEP:</label>
                    <input type='text' className={styles.input} value={cep} onChange={(e) => setCep(e.target.value)} onBlur={findCep} />
                </div>

                <div className={styles.field}>
                    <label className={styles.label}>Address:</label>
                    <input type='text' className={styles.input} value={address} onChange={(e) => setAddress(e.target.value)} />
                </div>

                <div className={styles.field}>
                    <label className={styles.label}>Number:</label>
                    <input type='text' className={styles.input} value={number} onChange={(e) => setNumber(e.target.value)} />
                </div>

                <div className={styles.field}>
                    <label className={styles.label}>City:</label>
                    <input type='text' className={styles.input} value={city} onChange={(e) => setCity(e.target.value)} />
                </div>

                <div className={styles.field}>
                    <label className={styles.label}>State:</label>
                    <input type='text' className={styles.input} value={state} onChange={(e) => setState(e.target.value)} />
                </div>

                <button type='submit' className={styles.button}>Register</button>
            </form>
        </main>
    )
}