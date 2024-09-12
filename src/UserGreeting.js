import PropTypes from 'prop-types';

function UserGreeting(props){
    const welcomMessage = <h2 className="welcome-message">Welcom {props.username}</h2>
    const loginPrompt = <h2 className="login-prompt">Please login to continue</h2>

    return(props.isLoggedIn ? welcomMessage: loginPrompt)
}

UserGreeting.prototype = {
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string,
}

UserGreeting.defaultProps = {
    isLoggedIn: false,
    username: "Guest"
}
export default UserGreeting