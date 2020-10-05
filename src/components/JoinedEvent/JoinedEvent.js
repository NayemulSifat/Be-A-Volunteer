import { Button, Card, CardActionArea, CardActions, CardContent, Grid, Typography } from '@material-ui/core';
import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';




const JoinedEvent = () => {
    const [events, setEvents] = useState([]);
    const [loggedInUser, setloggedInUser] = useContext(UserContext);
    useEffect(() => {
        fetch('http://localhost:5000/userEvents?email=' + loggedInUser.email, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                authorization: `Bearer ${sessionStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                setEvents(data)
            })

    }, [])
    const deleteEvent = (id) => {

        fetch('http://localhost:5000/delete/' + id, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
            })


    }
    return (
        <div>
            <Grid style={{padding: '20px', margin: 'auto'}} container spacing={8} >
                {
                    events.map(data => <Grid key={data.id} item xs={6} sm={3}>
                        <Card>
                            <CardActionArea>
                                <img style={{ height: '80%', width: "100%", }} src={data.image} alt={data.title} />

                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {data.organization}
                                    </Typography>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {data.Joiningdate}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button onClick={() => deleteEvent(data._id)} size="small" color="primary">Cancel</Button> </CardActions>
                        </Card>
                    </Grid>)
                }
            </Grid>

        </div>
    );
};

export default JoinedEvent;