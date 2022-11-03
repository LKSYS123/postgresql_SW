import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import './App.css';

function App() {
    const [backData, setBackData] = useState([{}]);
    const [postId, setPostId] = useState('');
    const [postTitle, setPostTitle] = useState('');
    const [postBody, setPostBody] = useState('');
    const [online, setOnline] = useState(false);

    useEffect(() => {
        if (navigator.onLine) {
            setOnline(true);
            console.log('onononononononon');
        } else {
            setOnline(false);
            console.log('off off off off off');
        }
    }, [online]);

    useEffect(() => {
        console.log('aaaaaaaaaaaaa', online);
    }, [online]);

    useEffect(() => {
        fetch('http://localhost:4000/api/glorys', {
            headers: {
                Accept: 'application/json',
            },
            mode: 'no-cors',
        })
            .then((response) => response.json())
            .then((data) => {
                setBackData(data);
                console.log('data ===========> ' + data);
            })
            .catch((resp) => {
                console.error(resp);
            });
    }, []);

    const onChangeId = (e) => {
        setPostId(e.target.value);
    };

    const onChangeTitle = (e) => {
        setPostTitle(e.target.value);
    };

    const onChangeBody = (e) => {
        setPostBody(e.target.value);
    };

    let params = new URLSearchParams();
    params.append('id', postId);
    params.append('title', postTitle);
    params.append('body', postBody);

    const onSubmit = () => {
        fetch('http://localhost:4000/api/addGlory', {
            headers: {
                Accept: 'application/json',
            },
            method: 'POST',
            body: params,
            mode: 'no-cors',
        })
            .then((request) => console.log(request))
            // .then((response) => response.json())
            .then((json) => console.log(json))
            .catch((err) => {
                console.log(err);
            });
    };

    const onDelete = () => {
        fetch('http://localhost:4000/api/deletePost', {
            headers: {
                Accept: 'application/json',
            },
            method: 'POST',
            body: params,
            mode: 'no-cors',
        })
            .then((request) => console.log(request))
            .then((response) => response.json())
            .then((json) => console.log(json))
            .catch((err) => {
                console.log(err);
            });
    };

    const onUpdate = () => {
        fetch('http://localhost:4000/api/updatePost', {
            headers: {
                Accept: 'application/json',
            },
            method: 'POST',
            body: params,
            mode: 'no-cors',
        })
            .then((request) => console.log(request))
            .then((response) => response.json())
            .then((json) => console.log(json))
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <>
            <div style={{ width: 700, minHeight: 400, margin: 50 }}>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label='simple table'>
                        <TableHead>
                            <TableRow key='columns'>
                                <TableCell>id</TableCell>
                                <TableCell align='right'>title</TableCell>
                                <TableCell align='right'>body</TableCell>
                                <TableCell align='right'>
                                    publishedDate
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {backData.map((data) => (
                                <TableRow
                                    key={0}
                                    sx={{
                                        '&:last-child td, &:last-child th': {
                                            border: 0,
                                        },
                                    }}
                                >
                                    <TableCell component='th' scope='row'>
                                        {data.id}
                                    </TableCell>
                                    <TableCell align='right'>
                                        {data.title}
                                    </TableCell>
                                    <TableCell align='right'>
                                        {data.body}
                                    </TableCell>
                                    <TableCell align='right'>
                                        {data.publishedDate}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
            <div className='formBox' style={{ margin: 50 }}>
                <form method='POST' action='http://localhost:4000/api/addPost'>
                    <input
                        type='text'
                        title='id'
                        name='id'
                        placeholder='id id'
                        onChange={onChangeId}
                    />
                    <input
                        type='text'
                        title='title'
                        name='title'
                        placeholder='title title'
                        onChange={onChangeTitle}
                    />
                    <input
                        type='text'
                        title='body'
                        name='body'
                        placeholder='body body'
                        onChange={onChangeBody}
                    />
                    <button type='button' onClick={onSubmit}>
                        등록
                    </button>
                    <button type='button' onClick={onDelete}>
                        삭제
                    </button>
                    <button type='button' onClick={onUpdate}>
                        수정
                    </button>
                    {/* <button>등록</button> */}
                </form>
            </div>
        </>
    );
}

export default App;
