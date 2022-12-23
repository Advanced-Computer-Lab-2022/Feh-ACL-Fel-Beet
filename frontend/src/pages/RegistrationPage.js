import Navbar from "../components/Navbar"
import {useState} from "react"
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const RegistrationPage = () => {
    const [Username, setUsername] = useState('')
    const [Password, setPassword] = useState('')
    const [Email, setEmail] = useState('')
    const [FirstName, setFirstName] = useState('')
    const [LastName, setLastName] = useState('')
    const [Gender, setGender] = useState('')
    const [error, setError] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {Username, Password, Email, FirstName, LastName, Gender};

        //check if username/email already exist in the database
        let response = await fetch('http://localhost:4000/individualTrainee/findIndividualTrainee', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {'Content-Type': 'application/json'}
        })

        const json = await response.json()

        if(!response.ok){
            let response = await fetch('http://localhost:4000/individualTrainee/add', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {'Content-Type': 'application/json'}
            })

            json = await response.json()

            if(!response.ok) {
                setError(json.error);
            }
            if(response.ok) {
                setUsername("");
                setPassword("");
                setError(null);
                console.log("Individual trainee added");
            }
    
        }
        else{
            setError("A user with that email or username already exists");
        }

    }

    return(
        <div className="RegistrationPage">
            <Navbar/>
            <div className="RegistrationContent">
                <form className="UserRegistrationForm" onSubmit={handleSubmit}>
                    <label>Username</label>
                    <input type="text" onChange={(e) => setUsername(e.target.value)} value={Username}></input>
                    <label>Password</label>
                    <input type="text" onChange={(e) => setPassword(e.target.value)} value={Password}></input>
                    <label>First Name</label>
                    <input type="text" onChange={(e) => setFirstName(e.target.value)} value={FirstName}></input>
                    <label>Last Name</label>
                    <input type="text" onChange={(e) => setLastName(e.target.value)} value={LastName}></input>
                    <label>Email</label>
                    <input type="text" onChange={(e) => setEmail(e.target.value)} value={Email}></input>
                    <label>Gender</label>
                    <input type="text" onChange={(e) => setGender(e.target.value)} value={Gender}></input>
                    <button className="button2">Register</button>
                    {error && <div className="error">{error}</div>}
                </form>
            </div>
        </div>
    )
}

export default RegistrationPage;