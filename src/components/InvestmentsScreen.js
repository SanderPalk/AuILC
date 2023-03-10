import "./InvestmentScreen.css"
import {useState} from "react";

function InvestmentsScreen() {
    const [searchKey, setSearchKey] = useState("")
    const [searched, setSearched] = useState(false)

    const handleChange = (event) => {
        setSearchKey(event.target.value)
    }

    const handleSearchText = (event) => {
        if (event.key === "Enter") {
            setSearched(true)
            console.log("Pressed enter")
            console.log(searchKey)
        }
    }

    const handleSearchButton = () => {
        setSearched(true)
        console.log("Pressed search")
        console.log(searchKey)
    }


    return (
        <div className="investment-screen">
            <div className="investment-input">
                <h3>Insert your user key</h3>
                <input type="text" className="investment-search" value={searchKey} onChange={handleChange}
                       placeholder="Example: 1213ktpf" onKeyPress={handleSearchText} maxLength={8}/>
                <input type="submit" className="submit-button" value="SEARCH" onClick={handleSearchButton}/>
            </div>

            <div className="investment-information">
                {searched === true && (
                    <div className="investment-data">
                        <h2>Hello, Andrei Sadovsky</h2>
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
                            <tr>
                                <td>69</td>
                                <td>$ 1337.37</td>
                                <td>Big money contract</td>
                                <td>1 week</td>
                                <td>09.03.2023</td>
                                <td>16.03.2023</td>
                                <td>Done</td>
                            </tr>
                            <tr>
                                <td>223</td>
                                <td>$ 100 000 000.00</td>
                                <td>Small loan of 100 million</td>
                                <td>To the mars</td>
                                <td> ~ </td>
                                <td> ~ </td>
                                <td>Running</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    )
}

export default InvestmentsScreen;