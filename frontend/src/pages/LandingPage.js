import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const LandingPage = () => {
    const navigate = useNavigate();
    return(
        <div className="body">
            <Stack direction={'row'} spacing={1} margin={3}>
                <Button variant="contained" onClick={() => navigate('./login')}>Login</Button>
                <Button variant="contained" onClick={() => navigate('./registration-page')}>Register</Button>
                <Button variant="contained" onClick={() => navigate('./home')}>Continue As A Guest</Button>
            </Stack>
        </div>
    )
}

export default LandingPage;