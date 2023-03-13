import axios from "axios";
import {useState} from "react";

function FindUser() {
    const [searchOption, setSearchOption] = useState('')
    const [searchValue, setSearchValue] = useState('')
    const [user, setUser] = useState(null)
    const [investments, setInvestments] = useState([])

    const api = process.env.REACT_APP_BASE_URL

    const getUserInformation = async (searchOption, searchValue) => {
        axios.get(api + `/users/${searchOption}/${searchValue}`)
            .then((response) => {
                const userData = response.data
                setUser(userData)
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
            setUser(null)
            setInvestments([])
            await getUserInformation(searchOption, searchValue)
            await getUserInvestments()
            console.log(investments)
        }
    }

    const getUserInvestments = async () => {
        axios.get(api + `/investments/${user.user_key}`)
            .then((response) => {
                const investmentsData = response.data;
                console.log('Investments have been received')
                setInvestments(investmentsData)
            })
            .catch(() => console.log('Error getting investments'))
    }

    return (
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
                    <table className="user-table">
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
                    <h3>User investments</h3>
                    {investments.length === 0 ? (
                            <p>User has no investments</p>
                        ) :
                        <table>
                            <thead>
                            <tr>
                                <th>ID</th>
                                <th>INVESTED AMOUNT</th>
                                <th>INVESTMENT TYPE</th>
                                <th>TIME PERIOD</th>
                                <th>CONTRACT START</th>
                                <th>CONTRACT END</th>
                                <th>STATUS</th>
                            </tr>
                            </thead>
                            <tbody>
                            {investments.map(investment => (
                                <tr key={investment._id}>
                                    <td>{investment._id}</td>
                                    <td>{investment.amount}</td>
                                    <td>{investment.type}</td>
                                    <td>{investment.time_period}</td>
                                    <td>{investment.start_date}</td>
                                    <td>{investment.end_date ? investment.end_date : ''}</td>
                                    <td>{investment.status}</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    }
                </div>
            )}
        </div>
    )
}

export default FindUser