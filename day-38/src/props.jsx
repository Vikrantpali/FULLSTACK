import React from "react";
import PropTypes from "prop-types";

function ProfileCard({name, age, isActive}){
    return(
        <div>
            <h1>Name : {name}</h1>
            <p>Age : {age}</p>
            <p>Status : {isActive ? "Active" : 'InActive'}</p>
        </div>
    );
}

ProfileCard.propTypes ={
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    isActive: PropTypes.bool,
};


export default ProfileCard;