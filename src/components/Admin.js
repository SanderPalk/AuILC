import "./Admin.css"
import axios from "axios";
import {useState} from "react";

function AdminPanel () {
    const [ key, setKey ] = useState('')

    function handleChange(event) {
        setKey(event.target.value)
    }

    const getUser = () => {

    }

    return (
        <div className="admin-panel">
            <h3>Admin panel</h3>
            <input className="admin-key" placeholder="Insert your admin key:" maxLength="9" value={key} onChange={handleChange}/>
        </div>
    )
}

export default AdminPanel