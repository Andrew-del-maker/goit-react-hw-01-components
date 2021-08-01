import PropTypes from 'prop-types'

const FriendListItem = ({ avatar, name, isOnline, id }) => {
    return (
        <li key={id} className="item">
                    <span className={isOnline ? 'is-active status' : 'is-inactive status'}/>
                    <img className="avatar" src={avatar} alt={name} width="48" />
                    <p className="name">{name}</p> 
                </li>
    )
    
}

export default FriendListItem;

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
    id:PropTypes.number,
}