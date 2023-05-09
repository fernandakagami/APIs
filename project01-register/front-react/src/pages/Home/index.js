import { useEffect, useState } from "react";
import styles from "./Home.module.css";
import axios from "axios";

export default function Home() {
    const [users, setUsers] = useState([]);    

    useEffect(() => {        
        axios.get(`http://localhost:3000/users`)
        .then((response) => setUsers(response.data))        
    }, [users]);    

    const deleteUser = (id) => {
        console.log(id);        
        axios.delete(`http://localhost:3000/users/${id}`) 
    }

    return (        
        <div className={styles.container}>           
            <h1 className={styles.title}>Users</h1>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th className={styles.titleColumn}>Name</th>
                        <th className={styles.titleColumn}>Email</th>
                        <th className={styles.titleColumn}>Birthday</th>
                        <th className={styles.titleColumn}>CEP</th>
                        <th className={styles.titleColumn}>Address</th>
                        <th className={styles.titleColumn}>Number</th>
                        <th className={styles.titleColumn}>City</th>
                        <th className={styles.titleColumn}>State</th>
                        <th className={styles.titleColumn}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    { users.map((user) => (
                        <tr key={user._id}>
                            <td>{ user.name }</td>
                            <td>{ user.email }</td>
                            <td>{ user.birthday }</td>
                            <td>{ user.cep }</td>
                            <td>{ user.address }</td>
                            <td>{ user.number }</td>
                            <td>{ user.city }</td>
                            <td>{ user.state }</td>
                            <td>
                                <a type='button' href={`/edit/${user._id}`} className={styles.edit}>E</a>
                                <button type='button' className={styles.delete} onClick={() => deleteUser(user._id)} >X</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}