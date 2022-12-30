import React from "react";
import male from "../Images/male.png";
import female from "../Images/female.png";
import hermo from "../Images/hermo.png";

const ModalImg = (genderProp) => {
    return (
        <div>
            {genderProp === "male" && (
                <img src={male}/>
            )}
            {genderProp === "female" && (
                <img src={female}/>
            )}
            {genderProp === "hermophrodite" && (
                <img src={hermo}/>
            )}
        </div>
    )
}

export default ModalImg;