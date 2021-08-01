import './friend-list.css'
import PropTypes from 'prop-types'
import FriendListItem from '../friendListItem/friendListItem'



const FriendList = ({ friends }) => {
    
    return (
 
        <ul className="friend-list">
            {friends.map((friend) => {
                return <FriendListItem avatar={friend.avatar} name={friend.name} isOnline={friend.isOnline} id={friend.id}/>
            })
            }
        </ul>

    )
}

export default FriendList;

FriendList.propTypes = {
    friends: PropTypes.array.isRequired,
}

