import React from 'react'
import '../css/Friend.css';

const Friend =({details, handleFavClick})=> {
    return (
        <div className="friend_block">
            <span>
                {details.Name}
            </span>
            <input type="checkbox" defaultChecked={details.Favourite} onChange={()=>handleFavClick(details.Name)} />
        </div>
    )
}

export default Friend;
