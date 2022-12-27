import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

const LandingPage = () => {
    const navigate = useNavigate();
    return(
        <div className="landing-page">
            <Grid container spacing={0}  direction="column" alignItems="center" justifyContent="center" style={{ minHeight: '200px' }}>
                <Grid item xs={4} justifyContent="center">
                    <Box className="title">
                        <h1>Welcome to Saboora!</h1>
                    </Box>
                </Grid>
            </Grid>
            <Stack container spacing={2} direction="column">
                <Button variant="contained" onClick={() => navigate('./login')}>Login</Button>
                <Button variant="contained" onClick={() => navigate('./registration-page')}>Register</Button>
                <Button variant="contained" onClick={() => navigate('./home')}>Continue As A Guest</Button>
            </Stack>
        </div>
    )
}

export default LandingPage;