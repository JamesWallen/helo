import React from 'react';
import { connect } from 'react-redux';

const Header = props => {
    return (
        <div className='nav-container'>
            {props.username}
            {props.profile}
            
            <nav>
            <Link to='/dashboard' className='nav-links'>Home</Link>
            <Link to='/post/:postid' className='nav-links'>New Post</Link>
            <Link to='/' className='nav-links'>Profile</Link>
            </nav>
                    
        </div>
    )
}

const mapStateToProps = reduxState => reduxState;

export default connect(mapStateToProps)(Nav);