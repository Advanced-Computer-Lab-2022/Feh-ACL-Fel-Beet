import {useState} from "react"

function ManualUserAdditionForm({type}) {
    const [Username, setUsername] = useState('')
    const [Password, setPassword] = useState('')
    const [error, setError] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()

        const data = {Username, Password}

        let response;

        switch(type){
            case "admin":
                response = await fetch('http://localhost:5000/admin/add', {
                    method: 'POST',
                    body: JSON.stringify(data),
                    headers: {'Content-Type': 'application/json'}
                })
                break;
            case "instructor":
                response = await fetch('http://localhost:5000/instructor/add', {
                    method: 'POST',
                    body: JSON.stringify(data),
                    headers: {'Content-Type': 'application/json'}
                })
                break;
            case "corporate trainee":
                response = await fetch('http://localhost:5000/corporateTrainee/add', {
                    method: 'POST',
                    body: JSON.stringify(data),
                    headers: {'Content-Type': 'application/json'}
                })
                break;
        }

        const json = await response.json()

        if(!response.ok) {
            setError(json.error);
        }
        if(response.ok) {
            setUsername("");
            setPassword("");
            setError(null);
            console.log(type + " added");
        }
    }

    return(
        <form className="manualAdditionForm" onSubmit={handleSubmit}>
            <h3>Add a new {type}</h3>
            <label>Username</label>
            <input type="text" onChange={(e) => setUsername(e.target.value)} value={Username}></input>
            <label>Password</label>
            <input type="text" onChange={(e) => setPassword(e.target.value)} value={Password}></input>
            <button>Add {type}</button>
            {error && <div className="error">{error}</div>}
        </form>
    )
}

export default ManualUserAdditionForm