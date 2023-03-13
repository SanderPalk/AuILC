import {useState} from "react";
import axios from "axios";

function FindAllUsers() {
    const [users, setUsers] = useState([])

    const api = process.env.REACT_APP_BASE_URL

    const getAllUsers = async () => {
        axios.get( api + '/users')
            .then((response) => {
                const usersData = response.data;
                console.log('Users have been received')
                setUsers(usersData)
            })
            .catch(() => console.log('Error getting users'))
    }

    return (
        <div className="findAllUsers">
            <button className="findAll" onClick={getAllUsers}>Find all users</button>
            {users.length === 0 ? (
                    <p>No users found</p>
                ) :
                <table>
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>User_key</th>
                        <th>First name</th>
                        <th>Last Name</th>
                        <th>Phone</th>
                        <th>Bank account</th>
                        <th>Address</th>
                        <th>Role</th>
                    </tr>
                    </thead>
                    <tbody>
                    {users.map(user => (
                        <tr key={user._id}>
                            <td>{user._id}</td>
                            <td>{user.user_key}</td>
                            <td>{user.first_name}</td>
                            <td>{user.last_name}</td>
                            <td>{user.phone}</td>
                            <td>{user.bank_account}</td>
                            <td>{user.address}</td>
                            <td>{user.role}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            }
        </div>
    )
}

export default FindAllUsers