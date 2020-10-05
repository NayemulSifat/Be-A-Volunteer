import React, { useState } from 'react';
import DATA from '../../fakeData/data'
import Supports from '../supports/Supports';
import Grid from '@material-ui/core/Grid';

const Home = () => {

    const style = {
        container: {
            textAlign: 'center'
        },
        events: {
            padding: '3%'
        }

    }
    const [supports, setSupports] = useState(DATA);
    return (
        <>
            <div style={style.container}>

                <h1>I GROW BY HELPING PEOPLE IN NEED</h1>
                <h2>SEARCH OPTIONS</h2>

            </div>
            <Grid container spacing={8} style={style.events}>
                {
                    supports.map(data => <Grid key={data.id} item xs={6} sm={3}><Supports data={data} /></Grid>)
                }
            </Grid>

        </>
    );
};
export default Home;