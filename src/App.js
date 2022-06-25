import React, { useEffect } from 'react';
// import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import {Container,AppBar, Typography, Grow, Grid} from '@mui/material';
import memories from './images/memories.png'
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import { getPosts } from '.actions/posts';
import { useDispatch } from 'react-redux';
import { getPosts } from '../../server/controllers/posts';
const App = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getPosts())
    }, [])
    return (
        <Container>
            <AppBar position='static' color='inherit'>
                <Typography variant='h2' align='center'>Memories</Typography>
                <img src={memories} alt="memories" width="40"  />
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justify="space-between" alignItem="stretch" spacing="">
                        <Grid item xs={12} sm={7}>
                            <Posts />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                                <Form />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        
        </Container>
    );
};

export default App;