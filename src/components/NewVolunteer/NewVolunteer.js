
import React, { useContext, useState } from 'react';
import 'date-fns';
import { useHistory, useParams } from 'react-router-dom';
import DateFnsUtils from '@date-io/date-fns';
import { UserContext } from '../../App';
import './NewVolunteer.css';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import DATA from '../../fakeData/data';




const NewVolunteer = () => {

    const { id } = useParams();

    const singleEvents = DATA.find(data => data.id === parseInt(id));

    const { title } = singleEvents;

    const [loggedInUser, setloggedInUser] = useContext(UserContext);

    const history = useHistory();

    const [error, setError] = useState();

    const [selectedDate, setSelectedDate] = React.useState(new Date());

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const validationHandler = (e) => {
        let isValid = true;

        if (e.target.name === 'name') {
            isValid = /^[a-zA-Z\s-, ]+$/.test(e.target.value);
            if (isValid) {
                setError('');
            }
            else {
                setError('Name must be contained only words')
            }
        }
        if (e.target.name === 'email') {
            isValid = /\S+@\S+\.\S+/.test(e.target.value);
            if (isValid) {
                setError('')
            }
            else {
                setError('Wrong Email')
            }
        }

    }

    const registerHandler = (e) => {
        e.preventDefault();

        // const {name, email, date, description, organization} = e.target.value;
        const name = e.target.name.value;
        const email = e.target.email.value;
        const date = e.target.date.value;
        const description = e.target.description.value;
        const organization = e.target.organization.value;


        const newUser = {
            name: name,
            email: email,
            Joiningdate: date,
            description: description,
            organization: organization
        }

        fetch('https://pure-ridge-14119.herokuapp.com/addUser', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newUser)
        })
            .then(res => res.json())
            .then(data => {

            });
        history.push('/events')

    }

    return (
        <form onSubmit={registerHandler}>
            <label htmlFor=""><strong>Register as a volunteer</strong></label><br />

            <input onBlur={validationHandler} type="text" name="name" placeholder="Full Name" value={loggedInUser.name} required /><br />
            <input onBlur={validationHandler} type="text" name="email" placeholder="UserName or Email" value={loggedInUser.email} required /><br />
            <MuiPickersUtilsProvider utils={DateFnsUtils}><KeyboardDatePicker
                name="date"
                margin="normal"
                id="date-picker-dialog"
                label="Joining Date"
                format="dd/MM/yyyy"
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{ 'aria-label': 'change date' }}
                required
            />
            </MuiPickersUtilsProvider>
            <input onBlur={validationHandler} type="text" name="description" placeholder="Description" required /><br />
            <input onBlur={validationHandler} type="text" name='organization' placeholder="Organize books at the library" value={title} required /><br />
            <label style={{ color: '#eb1f12' }} htmlFor="p">{error}</label> <br />
            <input type="submit" value="Registration" className="Registerbtn" />
        </form>
    );
};

export default NewVolunteer;