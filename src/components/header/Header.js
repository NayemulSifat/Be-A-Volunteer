import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Logo from '../../resources/logos/Group 1329.png'
import { UserContext } from '../../App';

const Header = () => {

    const styles = {
        container: {
            height: '50px',
            width: '70%',
            margin: 'auto',
            marginTop: '20px',
            backgroundColor: 'transparent',
            display: 'flex',
            justifyContent: 'space-between',
        },
        logo: {
            height: '100%',
            width: '30%'
        },
        options: {
            marginLeft: '15px',
            textDecoration: 'none',

        }
    }

    const [loggedInUser, setloggedInUser] = useContext(UserContext);

    return (
        <div style={styles.container}>
            <div>
                <img style={styles.logo} src={Logo} alt="LOGO" />
            </div>
            <div >
                <Link style={styles.options} to="/">Home</Link>
                <Link style={styles.options} to="/donation">Donation</Link>
                <Link style={styles.options} to="/events">Events</Link>
                <Link style={styles.options} to="/blog">Blog</Link>
                <Link style={styles.options} to="/login" className="btn"><Button variant="contained" color="primary">{loggedInUser.name ? `${loggedInUser.name}` : 'Register'}</Button></Link >
                <Link style={styles.options} to="/admin"><Button variant="contained" color="primary">Admin</Button></Link>
            </div>

        </div>
    );
};

export default Header;