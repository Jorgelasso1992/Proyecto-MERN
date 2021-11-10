import React from 'react'


export function Avatar(props) {
    return (
        <div className="AvatarContainer">
            <img src={props.user.img} alt={props.user.name} />
        </div>
    )
}
