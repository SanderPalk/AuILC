import "./InvestmentScreen.css"
import {useState} from "react";
import axios from "axios";


function InvestmentsScreen() {
    const [searchKey, setSearchKey] = useState("")
    const [searched, setSearched] = useState(false)
    const [user, setUser] = useState(null)
    const [investments, setInvestments] = useState([])

    const api = process.env.REACT_APP_BASE_URL

    const handleChange = (event) => {
        setSearchKey(event.target.value)
        console.log(api)
    }

    const getUser = () => {
        axios.get(api + `/user/${searchKey}`)
            .then((response) => {
                const userData = response.data;
                console.log('User has been received');
                setUser(userData)
            })
            .catch(() => console.log('Error getting user'))
    }

    const getInvestments = () => {
        axios.get(api + `/investments/${searchKey}`)
            .then((response) => {
                const investmentsData = response.data;
                console.log('Investments have been received')
                setInvestments(investmentsData)
            })
            .catch(() => console.log('Error getting investments'))
    }


    const handleSearchButton = async () => {
        setSearched(true)
        await getUser()
        if (user) {
            await getInvestments()
        }
    }

    const handleSearchText = async (event) => {
        if (event.key === "Enter") {
            setSearched(true)
            await getInvestments()
            await getUser()
        }
    }

    // NOTES statuses: 1=DONE; 2=RUNNING; 3=EXTENDED, 4=EARLY WITHDRAWAL; 5=CANCELLED


    return (
        <div className="investment-screen">
            <div className="investment-input">
                <h3>Insert your user key</h3>
                <input type="text" className="investment-search" value={searchKey} onChange={handleChange}
                       placeholder="Example: 1213ktpf" onKeyPress={handleSearchText} maxLength={9}/>
                <input type="submit" className="submit-button" value="SEARCH" onClick={handleSearchButton}/>
            </div>


                <div className="investment-information">
                    {searched && user && (
                    <div className="investment-data">
                        <h2>Hello, {user.first_name} {user.last_name}</h2>
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
                    </div>)}
                </div>

        </div>
    )
}

export default InvestmentsScreen;
