import { Link } from 'react-router-dom';
import './friend.css'


const Friend = ({friend}) => {
    const {name, email, phone, id} = friend;
    return (
        <div className="friend">
            <h2>{name}</h2>
            <p>{email}</p>
            <p>{phone}</p>
            <p><Link to={`/friend/${id}`}>Show Details</Link></p>
        </div>
    );
};

export default Friend;