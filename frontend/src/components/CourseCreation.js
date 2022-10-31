import {useState} from "react"

function CourseCreation() {
    const [Name, setName] = useState('');
    const [Professor, setProfessor] = useState('');
    const [Country, setCountry] = useState('');
    const [Subject, setSubject] = useState('');
    const [Price, setPrice] = useState('');
    const [Hours, setHours] = useState('');
    const [Rating, setRating] = useState('');
    const [Subs, setSubs] = useState('');
    const [Exercises, setExercises] = useState('');
    const [Hours_subs, setHours_subs] = useState('');
    const [Link, setLink] = useState('');
    const [error, setError] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = {
            Name,
            Professor,
            Country,
            Subject,
            Price,
            Hours,
            Rating,
            Subs,
            Exercises,
            Hours_subs,
            Link    
        }

        const response = await fetch('http://localhost:5000/post', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {'Content-Type': 'application/json'}
        })

        const json = await response.json();

        if(!response.ok){
            setError(json.error);
        }
        else if(response.ok){
            setName('');
            setProfessor('');
            setCountry('');
            setSubject('');
            setPrice('');
            setHours('');
            setRating('');
            setSubs('');
            setExercises('');
            setHours_subs('');
            setLink('');
            setError(null);
            console.log("Course added");
        }

    }

    return(
        <form className="courseCreationForm" onSubmit={handleSubmit}>
            <h3>Create a New Course</h3>
            <label>Name </label>
            <input type="text" onChange={(e) => setName(e.target.value)} value={Name}></input>
            <label><br></br>Professor </label>
            <input type="text" onChange={(e) => setProfessor(e.target.value)} value={Professor}></input>
            <label><br></br>Country </label>
            <input type="text" onChange={(e) => setCountry(e.target.value)} value={Country}></input>
            <label><br></br>Subject </label>
            <input type="text" onChange={(e) => setSubject(e.target.value)} value={Subject}></input>
            <label><br></br>Price </label>
            <input type="text" onChange={(e) => setPrice(e.target.value)} value={Price}></input>
            <label><br></br>Hours </label>
            <input type="text" onChange={(e) => setHours(e.target.value)} value={Hours}></input>
            <label><br></br>Rating </label>
            <input type="text" onChange={(e) => setRating(e.target.value)} value={Rating}></input>
            <label><br></br>Subs </label>
            <input type="text" onChange={(e) => setSubs(e.target.value)} value={Subs}></input>
            <label><br></br>Exercises </label>
            <input type="text" onChange={(e) => setExercises(e.target.value)} value={Exercises}></input>
            <label><br></br>Hours_subs </label>
            <input type="text" onChange={(e) => setHours_subs(e.target.value)} value={Hours_subs}></input>
            <label><br></br>Link </label>
            <input type="text" onChange={(e) => setLink(e.target.value)} value={Link}></input>
            <br></br><button>Add Course </button>
            {error && <div className="error">{error}</div>}
        </form>
    )
}

export default CourseCreation