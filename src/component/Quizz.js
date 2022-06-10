import React from 'react'
import { useState, useEffect } from 'react';
import { data } from '../data/data';
/* MUI lib */
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { actionAdd, actionAddAnswer } from '../redux/actions'

const style = {
    card: {
        width: '300px',
        padding: '10px 0px',
        margin: '0 auto'
    },

    btnCenter: {
        marginTop: '20px',
        display: 'flex',
        justifyContent: 'center'
    },
    textCenter: {
        marginTop: '10px',
        textAlign: 'center'
    },
    Box: {
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        backgroundImage: `url('https://i.picsum.photos/id/1041/5184/2916.jpg?hmac=TW_9o6HeD7H7I7NVo-S1Fa1iAvzQ10uvmJqsXvNoi0M')`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
    }
}
export default function Quizz() {
    const [process, setProcess] = useState(1)
    const [question, setQuestion] = useState()
    const [answer, setAnswer] = useState()
    const [existQuestion, setExistQuestion] = useState([])
    const dispatch = useDispatch()
    useEffect(() => {
        /* Tạo mảng câu hỏi phụ thuộc vào mức độ và số câu hiện tại : 1-4" dễ, 5-8: vừa, 9-10: khó */
        let tmp
        if (process <= 4 && process > 0)
            tmp = data.filter(item => item.level === 'easy')
        else if (process <= 8 && process > 4)
            tmp = data.filter(item => item.level === 'medium')
        else if (process <= 10)
            tmp = data.filter(item => item.level === 'hard')
        else return

        function init() {
            /* Chọn 1 câu ngẫu nhiên từ mảng vừa tạo */
            const randomQuestion = get_random(tmp)

            /* Kiểm tra nếu câu hỏi ngẫu nhiên vừa lấy đã xuất hiện hay chưa */
            if (Object.values(existQuestion).includes(randomQuestion) === false) {
                /* Nếu chưa: render ra câu hỏi đồng thời cho câu hỏi đó vào mảng những câu đã xuất hiện */
                setExistQuestion([...existQuestion, randomQuestion])
                setQuestion(randomQuestion)
            }
            /* Nếu rồi, chạy lài từ đầu để lấy lại câu hỏi ngẫu nhiên khác */
            else init()
        }

        init()

    }, [process])
    const get_random = (list) => {
        var number = Math.floor((Math.random() * list.length))
        return list[number];
    }

    const handleNext = () => {
        if (answer !== '') {
            setProcess(process + 1)
            question.answer_ofContestant = answer
            dispatch(actionAdd(question))
            setAnswer('')
        }
        else {
            alert('Please select an answer')
        }
        // dispatch(actionAddAnswer(answer))
    }
    if (process > 0 && process < 11 && question !== undefined) {
        return (
            <Box sx={style.Box}>
                <Card sx={style.card}>
                    <CardContent>
                        <Typography variant="h5" component="div">
                            Question {process}
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            {question.question}
                        </Typography>
                        <Typography variant="body2">
                            Choose an answer below:
                        </Typography>



                        <RadioGroup aria-labelledby="demo-radio-buttons-group-label" name="radio-buttons-group">

                            <FormControlLabel onChange={(e) => setAnswer(e.target.value)} value={question.choices[0]} control={<Radio />} label={question.choices[0]} />
                            <FormControlLabel onChange={(e) => setAnswer(e.target.value)} value={question.choices[1]} control={<Radio />} label={question.choices[1]} />
                            <FormControlLabel onChange={(e) => setAnswer(e.target.value)} value={question.choices[2]} control={<Radio />} label={question.choices[2]} />
                            <FormControlLabel onChange={(e) => setAnswer(e.target.value)} value={question.choices[3]} control={<Radio />} label={question.choices[3]} />

                        </RadioGroup>

                        <Box sx={style.btnCenter}>

                            <Button onClick={() => handleNext()} variant="contained">Next </Button>


                        </Box>
                    </CardContent>

                </Card>
            </Box>

        )
    }
    else {
        return (
            <Box sx={style.Box}>
                <Card sx={style.card}>
                    <CardContent>
                        <Typography variant="h5" component="div" sx={style.textCenter}>
                            Congratulation!
                        </Typography>

                        <Typography variant="body2" sx={style.textCenter}>
                            Your test is finished. Click FINISH to view your result
                        </Typography>

                        <Box sx={style.btnCenter}>
                            <Link to='/Result' style={{ textDecoration: 'none' }}>
                                <Button variant="contained" color="success">Finish </Button>
                            </Link>
                        </Box>
                    </CardContent>

                </Card>

            </Box>
        )
    }

}
