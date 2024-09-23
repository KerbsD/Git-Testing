import PropTypes from 'prop-types'

function UserGreeting(props){
    
    const welcomeMessage = <h2 className="bg-blue-200 border-2 border-blue-700 mx-10 p-4 font-bold rounded-xl w-[350px] text-center text-xl">Welcome, {props.username}</h2>;

    const warningMessage = <h2 className='bg-red-200 border-2 border-red-700 mx-10 p-4 font-bold rounded-xl w-[350px] text-center text-xl'>Log in ka muna, {props.username}</h2>;
    
    return(props.userLoggedin ? welcomeMessage : warningMessage);
}

UserGreeting.proptypes = {
    userLoggedin: PropTypes.bool,
    username: PropTypes.string
}

UserGreeting.defaultProps = {
    userLoggedin: false,
    username: "Guest",
}


export default UserGreeting