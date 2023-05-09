import styles from './Edit.module.css';
import { useEffect, useState } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import axios from "axios";

export default function Edit() {
    const { id } = useParams();
    const [user, setUser] = useState({email: '', password: '', name:'', birthday: '', cep: '', address: '', number: '', city:'', state:''});  
    const navigate = useNavigate();   

    useEffect(() => {  
        axios.get(`http://localhost:3000/users/${id}`)
        .then((response) => setUser(response.data))
    }, [id])

    const userForEdit = (e) => {
        e.preventDefault();
        axios.patch(`http://localhost:3000/users/${id}`, user)        
        navigate("/");
    }

    const inputEvent = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }
    
    return (
        <main className={styles.register}>
            <h1 className={styles.title}>Register</h1>
            <form className={styles.form} onSubmit={userForEdit}>
            <div className={styles.field}>
                    <label className={styles.label}>Email:</label>
                    <input type='email' className={styles.input} name='email' value={user.email} onChange={inputEvent} />
                </div>

                <div className={styles.field}>
                    <label className={styles.label}>Password:</label>
                    <input type='password' className={styles.input} name='password' value={user.password} onChange={inputEvent} />
                </div>

                <div className={styles.field}>
                    <label className={styles.label}>Name:</label>
                    <input type='text' className={styles.input} name='name' value={user.name} onChange={inputEvent} />
                </div>

                <div className={styles.field}>
                    <label className={styles.label}>Birthday:</label>
                    <input type='date' className={styles.input} name='birthday' value={user.birthday} onChange={inputEvent} />
                </div>

                <div className={styles.field}>
                    <label className={styles.label}>CEP:</label>
                    <input type='text' className={styles.input} name='cep' value={user.cep} onChange={inputEvent} />
                </div>

                <div className={styles.field}>
                    <label className={styles.label}>Address:</label>
                    <input type='text' className={styles.input} name='address' value={user.address} onChange={inputEvent} />
                </div>

                <div className={styles.field}>
                    <label className={styles.label}>Number:</label>
                    <input type='text' className={styles.input} name='number' value={user.number} onChange={inputEvent} />
                </div>

                <div className={styles.field}>
                    <label className={styles.label}>City:</label>
                    <input type='text' className={styles.input} name='city' value={user.city} onChange={inputEvent} />
                </div>

                <div className={styles.field}>
                    <label className={styles.label}>State:</label>
                    <input type='text' className={styles.input} name='state' value={user.state} onChange={inputEvent} />
                </div>

                <button type='submit' className={styles.button}>Update</button>
            </form>
        </main>
    )
}