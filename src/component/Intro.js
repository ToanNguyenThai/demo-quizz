import React from 'react'
import { Link } from 'react-router-dom';
/* MUI lib */
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const style = {
    card: {
        width: '330px',
        margin: '0 auto',
        padding: '20px 0px'
    },
    textCenter: {
        marginTop: '10px',
        textAlign: 'center'
    },
    btnCenter: {
        display: 'flex',
        justifyContent: 'center'
    },
    textRed: {
        color: 'red'
    },
    Box: {
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#e7ebf0'
    }
}
export default function Intro() {

    return (
        <Box sx={style.Box}>
            <Card sx={style.card}>
                <CardContent>

                    <Typography variant="h5" component="div" sx={style.textCenter}>
                        Are you ready for the test ?
                    </Typography>
                    <Typography variant="body2" sx={style.textCenter} color="error">
                        Caution: After moved to next question, you are unbale to go back.
                    </Typography>
                    <Typography variant="body1" sx={style.textCenter}>
                        Press "Start" to continue
                    </Typography>
                </CardContent>

                <Box sx={style.btnCenter}>
                    <Link style={{ textDecoration: 'none' }} to='/Quizz'>
                        <Button variant="contained">Start</Button>
                    </Link>
                </Box>


            </Card >
        </Box>

    )
}
