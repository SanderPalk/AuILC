import {useState} from "react";
import axios from "axios";

function FindAllInvestments() {
    const [investments, setInvestments] = useState([])

    const api = process.env.REACT_APP_BASE_URL

    const getAllInvestments = async () => {
        axios.get( api + '/investments')
            .then((response) => {
                const investmentsData = response.data;
                console.log('Investments have been received')
                setInvestments(investmentsData)
            })
            .catch(() => console.log('Error getting investments'))
    }


    return (
        <div className="findAllInvestments">
            <button className="findAll" onClick={getAllInvestments}>Find all investments</button>
            {investments.length === 0 ? (
                    <p>No investments found</p>
                ) :
                <table>
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>User_key</th>
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
                            <td>{investment.user_key}</td>
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
    )
}

export default FindAllInvestments