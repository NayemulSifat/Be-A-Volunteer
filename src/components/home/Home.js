import React, { useState } from 'react';
import DATA from '../../fakeData/data'
import Supports from '../supports/Supports';
import Grid from '@material-ui/core/Grid';
import { InputBase } from '@material-ui/core';

const Home = () => {

    const style = {
        container: {
            textAlign: 'center'
        },
        events: {
            padding: '3%'
        },
        search: {
            border: "1px solid blue",
            borderRadius: '5px',
            padding: "8px",
            textAlign: "center"
        }

    }
    
    const [supports, setSupports] = useState(DATA);
    return (
        <>
            <div style={style.container}>

                <h1>I GROW BY HELPING PEOPLE IN NEED</h1>
                <InputBase
              placeholder="Search…"
              style={style.search}
              inputProps={{ 'aria-label': 'search' }}
            />

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