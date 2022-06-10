import React, { useState, useEffect } from 'react'
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { actionClear } from '../redux/actions'

const style = {
    Box: {
        height: '100%',
        backgroundColor: '#e7ebf0',
        padding: ' 20px 0px'
    },
    card: {
        padding: '5px 0px',
        marginTop: '20px'
    },

    textCenter: {
        marginTop: '10px',
        textAlign: 'center'
    },
    flexBox: {
        marginTop: '20px',
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between'
    }
}
export default function Result() {
    const [correctAnswer, setCorrectAnswer] = useState(0)
    const result = useSelector((state) => state.question)
    let navigate = useNavigate();
    const dispatch = useDispatch()
    const check = (answer, yourAnswer) => {
        if (answer === yourAnswer)
            return true

        else return false
    }

    useEffect(() => {

        var number = 0
        result.map(item => {
            console.log(typeof (item.answer_ofContestant));
            if (item.answer === item.answer_ofContestant)
                number++
        })
        setCorrectAnswer(number)

    }, [])
    const handleClick = () => {
        dispatch(actionClear([]))
        navigate('/');
    }
    console.log(result);
    return (
        <Box sx={style.Box}>
            <Container fixed >
                {
                    result.map((item, index) => (

                        <Card sx={style.card}>
                            <CardContent>
                                <Typography variant="h5" component="div" sx={style.textCenter}>
                                    Question {index + 1}
                                </Typography>

                                <Typography variant="body1" sx={style.textCenter}>
                                    {item.question}
                                </Typography>
                                <Typography variant="body1" component="div" sx={style.textCenter}>
                                    Answer:  {item.answer}
                                </Typography>


                                <Typography variant="h6" component="div" sx={style.textCenter} color={check(item.answer, item.answer_ofContestant) ? 'green' : 'error'}>
                                    Your answer: {item.answer_ofContestant}
                                </Typography>


                            </CardContent>

                        </Card>
                    ))
                }
                <Box sx={style.flexBox}>
                    <Typography variant='h5' color='primary'>
                        Your Result: {correctAnswer} / {result.length}
                    </Typography>

                    <Button variant="contained" onClick={() => handleClick()}>Back to home</Button>


                </Box>

            </Container>
        </Box>

    )
}
