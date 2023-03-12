import "./Admin.css"
import axios from "axios";
import {useState} from "react";

function AdminPanel() {
    const [adminKey, setAdminKey] = useState('')
    const [admin, setAdmin] = useState(null)
    const [searched, setSearched] = useState(false)
    const [panelSelector, setPanelSelector] = useState('')
    const [user, setUser] = useState(null)
    const [searchOption, setSearchOption] = useState('')
    const [searchValue, setSearchValue] = useState('')

    const [id, setId] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [userKey, setUserKey] = useState('')
    const [role, setRole] = useState('investor')
    const [phone, setPhone] = useState('')
    const [bankAccount, setBankAccount] = useState('')
    const [address, setAddress] = useState('')

    const api = process.env.REACT_APP_BASE_URL

    function handleChange(event) {
        setAdminKey(event.target.value)
    }

    const getAdmin = () => {
        axios.get(api + `/admin/${adminKey}`)
            .then((response) => {
                const adminData = response.data;
                setAdmin(adminData)
                console.log(admin)
            })
            .catch(() => console.log('Invalid key'))
    }

    const handleAdminCheck = async (event) => {
        if (event.key === "Enter") {
            await getAdmin()
            await setSearched(true)
        }
    }

    function handlePanelSelector(option) {
        setPanelSelector(option)
    }

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
        axios.post(api + '/users', userData)
            .then((response) => {
                console.log(response.data);
                setUser(response.data)
            })
            .catch((error) => {
                console.error(error)
            })
    }

    const getUserInformation = async (searchOption, searchValue) => {
        axios.get(api + `/users/${searchOption}/${searchValue}`)
            .then((response) => {
                const userData = response.data
                console.log(userData)
                setUser(userData)
                console.log(user)
            })
            .catch(() => console.log('No user found'))
    }

    const handleSearchChange = (e) => {
        setUser(null)

        setSearchOption(e.target.name)
        setSearchValue(e.target.value)
    }

    const handleSearch = async (event) => {
        if (event.key === "Enter") {
            console.log("pressed enter")
            await getUserInformation(searchOption, searchValue)
        }
    }


    return (
        <div className="admin-panel">
            <div className="authorization">
                <h1>Admin panel</h1>
                {!admin && !searched && (
                    <input className="admin-key" placeholder="Insert your admin key:" maxLength="9" value={adminKey}
                           onChange={handleChange} onKeyDown={handleAdminCheck}/>
                )}
                {searched && (
                    <div>
                        {admin ? (
                            <h2>Hello {admin.first_name}, time to do some work</h2>
                        ) : <p className="validation-error">*Invalid admin key, please enter a valid admin key*</p>
                        }
                    </div>
                )}
            </div>
            {searched && admin && (
                <div className="panel">
                    <div className="upper-nav">
                        <div className="user-section">
                            USERS
                        </div>
                        <div className="investment-section">
                            INVESTMENTS
                        </div>
                    </div>
                    <div className="lower-nav">
                        <div id="user-options" className="lower-section">
                            <button className={panelSelector === 'addUser' ? 'active' : ''}
                                    onClick={() => handlePanelSelector('addUser')}>Add user
                            </button>
                            <button className={panelSelector === 'changeUser' ? 'active' : ''}
                                    onClick={() => handlePanelSelector('changeUser')}>Change user
                            </button>
                            <button className={panelSelector === 'findUser' ? 'active' : ''}
                                    onClick={() => handlePanelSelector('findUser')}>Find user
                            </button>
                        </div>
                        <div className="lower-section">
                            <button className={panelSelector === 'addInvestment' ? 'active' : ''}
                                    onClick={() => handlePanelSelector('addInvestment')}>Add investment
                            </button>
                            <button className={panelSelector === 'changeInvestment' ? 'active' : ''}
                                    onClick={() => handlePanelSelector('changeInvestment')}>Change investment
                            </button>
                            <button className={panelSelector === 'findInvestment' ? 'active' : ''}
                                    onClick={() => handlePanelSelector('findInvestment')}>Find investment
                            </button>
                        </div>
                    </div>
                    <div className="panel-content">
                        {panelSelector === 'addUser' && (
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
                        )}
                        {panelSelector === 'changeUser' && (
                            <div className="changeUser">
                                Change user
                            </div>
                        )}
                        {panelSelector === 'findUser' && (
                            <div className="findUser">
                                <div className="form">
                                    <h3>Find user</h3>
                                    By ID:
                                    <input name="id" onChange={handleSearchChange} onKeyDown={handleSearch}/>
                                    By User key:
                                    <input name="user_key" onChange={handleSearchChange} onKeyDown={handleSearch}/>
                                    By first name:
                                    <input name="first_name" onChange={handleSearchChange} onKeyDown={handleSearch}/>
                                    By last name:
                                    <input name="last_name" onChange={handleSearchChange} onKeyDown={handleSearch}/>
                                    By phone number
                                    <input name="phone" onChange={handleSearchChange} onKeyDown={handleSearch}/>
                                    By bank account:
                                    <input name="bank_account" onChange={handleSearchChange} onKeyDown={handleSearch}/>
                                </div>
                                {user && (
                                <div className="information">
                                    <h3>User information</h3>
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
                        )}
                        {panelSelector === 'addInvestment' && (
                            <div className="addInvestment">
                                Add investment
                            </div>
                        )}
                        {panelSelector === 'changeInvestment' && (
                            <div className="changeInvestment">
                                Change investment
                            </div>
                        )}
                        {panelSelector === 'findInvestment' && (
                            <div className="findInvestment">
                                find Investment
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    )
}

export default AdminPanel