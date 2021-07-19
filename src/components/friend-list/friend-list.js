import './friend-list.css'


const FriendList = ({ friends }) => {
    
    return (
 
        <ul className="friend-list">
            {friends.map((friend) => {
                return <li key={friend.id} className="item">
                    <span className={friend.isOnline ? 'is-active status' : 'is-inactive status'}></span>
                    <img className="avatar" src={friend.avatar} alt={friend.name} width="48" />
                    <p className="name">{friend.name}</p> 
                </li>;
            })
            }
        </ul>

    )
}
export default FriendList;

