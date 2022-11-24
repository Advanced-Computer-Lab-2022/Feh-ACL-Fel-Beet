import { Link } from 'react-router-dom'

const Navbar = () => {

  return (
    <header>
      <div className="container">
        <Link to="/">
          <h1>SabOORa</h1>
        </Link>
        <Link to="/">
          <h4>Login as Corporate Trainee</h4>
        </Link>
        <Link to="/">
          <h4>Login as Individual Trainee</h4>
        </Link>
        <Link to="/">
          <h4>Login as Instructor</h4>
        </Link>
      </div>
    </header>
  )
}

export default Navbar