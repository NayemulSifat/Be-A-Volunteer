import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
const useStyles = makeStyles({

    media: {
        height: 100,
    },
    discription: {
        height: 50,
        textAlign: 'center'

    }
});

const Supports = (props) => {

    const classes = useStyles();
    const { id, title, image } = props.data;

    const history = useHistory();

    const supportHandler = () => {
        history.push(`/newvolunteer/${id}`)
    }

    return (


        <Card onClick={supportHandler} className={classes.root}>
            <CardActionArea>
                <img className={classes.media} style={{ height: '80%', width: "100%", }} src={image} alt={title} />

                <CardContent>
                    <Typography className={classes.discription} gutterBottom variant="h5" component="h2">
                        {title}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );

};

export default Supports;