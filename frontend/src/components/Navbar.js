import { Link } from 'react-router-dom'
import Grid from "@mui/material/Grid";  

const Navbar = () => {

  return (
    <header>
      <div className="container">
        <Link to="/">
          <Grid container justifyContent="center" padding={2}>
            <Grid item xs={4}>
              <h2 className="title">Canadian Chamber of Commerce</h2>
            </Grid>
          </Grid>
        </Link>
      </div>
    </header>
  )
}

export default Navbar