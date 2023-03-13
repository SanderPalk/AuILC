import "./Admin.css"
import axios from "axios";
import {useState} from "react";
import FindUser from "./FindUser";
import AddInvestments from "./AddInvestments";
import AddUser from "./AddUser";
import FindAllUsers from "./FindAllUsers";
import FindAllInvestments from "./FindAllInvestments";

function AdminPanel() {
    const [adminKey, setAdminKey] = useState('')
    const [admin, setAdmin] = useState(null)
    const [searched, setSearched] = useState(false)
    const [panelSelector, setPanelSelector] = useState('')

    const api = process.env.REACT_APP_BASE_URL

    function handleChange(event) {
        setAdminKey(event.target.value)
    }

    const getAdmin = () => {
        axios.get(api + `/admin/${adminKey}`)
            .then((response) => {
                const adminData = response.data;
                setAdmin(adminData)
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

    function checkAdmin() {
        console.log(admin.user_key)
    }


    return (
        <div className="admin-panel">
            <div className="authorization">
                <h1>Admin panel</h1>
                {!admin && (
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
                            <button className={panelSelector === 'findAllUsers' ? 'active' : ''}
                                    onClick={() => handlePanelSelector('findAllUsers')}>
                                All users
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
                            <button className={panelSelector === 'findAllInvestments' ? 'active' : ''}
                                    onClick={() => handlePanelSelector('findAllInvestments')}>All investments
                            </button>
                        </div>
                    </div>
                    <div className="panel-content">
                        <button onClick={checkAdmin}></button>
                        {panelSelector === 'addUser' && (
                            <AddUser adminKey={admin.user_key}/>
                        )}
                        {panelSelector === 'changeUser' && (
                            <div className="changeUser">
                                TODO
                                Not implemented
                            </div>
                        )}
                        {panelSelector === 'findUser' && (
                            <FindUser/>
                        )}
                        {panelSelector === 'findAllUsers' && (
                            <FindAllUsers/>
                        )}
                        {panelSelector === 'addInvestment' && (
                            <AddInvestments/>
                        )}
                        {panelSelector === 'changeInvestment' && (
                            <div className="changeInvestment">
                                TODO
                                Not implemented
                            </div>
                        )}
                        {panelSelector === 'findInvestment' && (
                            <div className="findInvestment">
                                TODO
                                Not implemented
                            </div>
                        )}
                        {panelSelector === 'findAllInvestments' && (
                            <FindAllInvestments/>
                        )}
                    </div>
                </div>
            )}
        </div>
    )
}

export default AdminPanel