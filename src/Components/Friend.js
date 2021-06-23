import React from 'react'
import '../css/Friend.css';
import {AiOutlineDelete,AiFillStar,AiOutlineStar} from 'react-icons/ai'

const Friend =({details, handleInteraction})=> {
    return (
        <div className="friend_block">
            <div className="nameWrapper">
                <div>
                    {details.Name}
                </div>
                <div className="nameSuffix">is your friend</div>
            </div>
            <div>
                <span className="icons" onClick={()=>handleInteraction(details.Name,1)}>{details.Favourite ? <AiFillStar/>: <AiOutlineStar/>}</span>
                <span className="icons" onClick={()=>handleInteraction(details.Name,2)}><AiOutlineDelete /></span>
            </div>
        </div>
    )
}

export default Friend;
