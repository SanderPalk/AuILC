import axios from "axios";
import {useState} from "react";

function AddUser(adminKey) {
    const [user, setUser] = useState(null)
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [userKey, setUserKey] = useState('')
    const [role, setRole] = useState('investor')
    const [phone, setPhone] = useState('')
    const [bankAccount, setBankAccount] = useState('')
    const [address, setAddress] = useState('')


    const api = process.env.REACT_APP_BASE_URL

    const handleSubmit = (event) => {
        event.preventDefault();
        const userData = {
            first_name: firstName,
            last_name: lastName,
            user_key: userKey,
            role: role,
            phone: phone,
            bank_account: bankAccount,
            address: address,
        }
        axios.post(api + `/users/post/${adminKey.adminKey}`, userData)
            .then((response) => {
                setUser(response.data)
                console.log("User added")
            })
            .catch((error) => {
                console.error(error)
            })
    }

    return (
        <div className="addUser">
            <div className="form">
                <h3>Add user</h3>
                <form onSubmit={handleSubmit}>
                    First name:
                    <input type="text" value={firstName}
                           onChange={(event) => setFirstName(event.target.value)}/>
                    Last name:
                    <input type="text" value={lastName}
                           onChange={(e) => setLastName(e.target.value)}/>
                    User key:
                    <input type="text" value={userKey}
                           onChange={(e) => setUserKey(e.target.value)}/>
                    Role (leave unchanged!):
                    <input type="text" value={role} onChange={(e) => setRole(e.target.value)}/>
                    Phone:
                    <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)}/>
                    Bank account:
                    <input type="text" value={bankAccount}
                           onChange={(e) => setBankAccount(e.target.value)}/>
                    Address:
                    <input type="text" value={address}
                           onChange={(e) => setAddress(e.target.value)}/>
                    <input className="submit-button" type="submit" value="Add user"/>
                </form>
            </div>
            {user && (
                <div className="user-information">
                    <h3>Created user</h3>
                    <table>
                        <thead>
                        <tr>
                            <th>User ID</th>
                            <th>User key</th>
                            <th>First name</th>
                            <th>Last name</th>
                            <th>Phone</th>
                            <th>Bank account</th>
                            <th>Address</th>
                            <th>Role</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>{user._id}</td>
                            <td>{user.user_key}</td>
                            <td>{user.first_name}</td>
                            <td>{user.last_name}</td>
                            <td>{user.phone}</td>
                            <td>{user.bank_account}</td>
                            <td>{user.address}</td>
                            <td>{user.role}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    )
}

export default AddUser