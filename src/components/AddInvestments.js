import axios from "axios";
import {useState} from "react";

function AddInvestments(adminKey) {
    const [investment, setInvestment] = useState('')
    const [userKey, setUserKey] = useState('')
    const [amount, setAmount] = useState('')
    const [type, setType] = useState('')
    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')
    const [timePeriod, setTimePeriod] = useState('')
    const [status, setStatus] = useState('')

    const api = process.env.REACT_APP_BASE_URL

    const handleSubmit = (event) => {
        event.preventDefault();
        const investmentData = {
            user_key: userKey,
            amount: amount,
            type: type,
            start_date: new Date(startDate),
            end_date: new Date(endDate),
            time_period: timePeriod,
            status: status,
        }
        axios.post(api + `/investments/post/${adminKey.adminKey}`, investmentData)
            .then((response) => {
                setInvestment(response.data)
                console.log("Investment added")
            })
            .catch((error) => {
                console.error(error)
            })
    }


    return (
        <div className="addInvestment">
            <div className="form">
                <h3>Add investment</h3>
                <form onSubmit={handleSubmit}>
                    *UserKey:
                    <input type="text" value={userKey}
                           onChange={(event) => setUserKey(event.target.value)}/>
                    *Amount:
                    <input type="text" value={amount}
                           onChange={(e) => setAmount(e.target.value)}/>
                    Contract type:
                    <input type="text" value={type}
                           onChange={(e) => setType(e.target.value)}/>
                    Contract start date:
                    <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)}/>
                    Contract end date:
                    <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)}/>
                    Time period:
                    <input type="text" value={timePeriod}
                           onChange={(e) => setTimePeriod(e.target.value)}/>
                    *Status:
                    <input type="text" value={status}
                           onChange={(e) => setStatus(e.target.value)}/>
                    <input className="submit-button" type="submit" value="Add investment"/>
                </form>
            </div>
            {investment && (
                <div className="user-information">
                    <h3>Created user</h3>
                    <table>
                        <thead>
                        <tr>
                            <th>Investment ID</th>
                            <th>Investment key</th>
                            <th>Amount</th>
                            <th>Contract Type</th>
                            <th>Start date</th>
                            <th>End date</th>
                            <th>Time period</th>
                            <th>Status</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>{investment._id}</td>
                            <td>{investment.user_key}</td>
                            <td>{investment.amount}</td>
                            <td>{investment.type}</td>
                            <td>{investment.start_date}</td>
                            <td>{investment.end_date}</td>
                            <td>{investment.time_period}</td>
                            <td>{investment.status}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    )
}

export default AddInvestments