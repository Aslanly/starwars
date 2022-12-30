import React from "react";
import "../Styles/People.scss";
import Modal from "./Modal";
import { useState } from "react";

const People = (people) => {

    const [openModal, setOpenModal] = useState(false);

    return (
        <div className="container_card">
            {
                people.people.map(people => {
                    return (
                        <div className="card">
                            <button onClick={() => setOpenModal(true)}>Open modal</button>
                            <strong className="character_name">{people.name}</strong>
                            <div className="indicators">
                                {people.height !== "unknown" &&
                                    (<div className="indicator">
                                        <div className="indicator_title">{people.height}</div>
                                        <div className="indicator_name">height</div>
                                    </div>)}
                                {people.mass !== "unknown" &&
                                    (<div className="indicator">
                                        <div className="indicator_title">{people.mass}</div>
                                        <div className="indicator_name">mass</div>
                                    </div>)}
                            </div>
                            <div className="genderBD">
                                {people.gender === "male" && (
                                    <div className="genderBD_item1" style={{ backgroundColor: "#73D677" }}>
                                        {people.gender}
                                    </div>
                                )}
                                {people.gender === "female" && (
                                    <div className="genderBD_item1" style={{ backgroundColor: "#C956FF" }}>
                                        {people.gender}
                                    </div>
                                )}
                                <div className="genderBD_item2" style={{ backgroundColor: "#07D6F2" }}>{people.birth_year}</div>
                            </div>
                            
                        </div>
                    )
                })
            }
            {openModal && <Modal genderProp={people.gender} closeModal={setOpenModal}/>}
        </div>
    )
}

export default People;