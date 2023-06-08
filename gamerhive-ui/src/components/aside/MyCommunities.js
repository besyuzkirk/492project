import React from "react";
import "./MyCommunities.scss";

function MyCommunuties() {
    return (
        <div className="community-card">
            <div className="community-card-header">
                <img src={process.env.PUBLIC_URL + "/logo-no-background.svg"} />
                <div>My Communuties</div>
            </div>
            <div className="community-card-body">
                <ul>
                    <li>Community - 1 <button className="community-remove-button">Remove</button></li> 
                    <hr />
                    <li>Community - 2 <button className="community-remove-button">Remove</button></li> 
                    <hr />
                    <li>Community - 3 <button className="community-remove-button">Remove</button></li> 
                    <hr />
                    <li>Community - 4 <button className="community-remove-button">Remove</button></li> 
                    <hr />
                    <li>Community - 5 <button className="community-remove-button">Remove</button></li> 
                </ul>
            </div>
        </div>
    );
}

export default MyCommunuties;