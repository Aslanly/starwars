import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import People from "../Components/People";
import "../Styles/Character.scss";
import arrowleft from "../Images/arrowleft.png";
import arrowright from "../Images/arrowright.png";


const Character = () => {

    const [people, setPeople] = useState([]);
    const [count, setCount] = useState(1)
    
    useEffect(() => {
        axios
            .get('https://swapi.dev/api/people?page=' + count)
            .then(data => setPeople(data.data.results))
            .catch(err => err)
    }, [count]);


    return (
        <div className="container_two">
            <div className="info">
                <h2><strong>60 Peoples</strong> for you to choose your favorite</h2>
            </div>
            <div className="input">
                <input className="input_text"/>
            </div>
            <People people={people} />
            <div className="btn">
                <button className="btn_arrow" onClick={() => setCount(count - 1)}><img src={arrowleft} /></button>
                <button className="btn_arrow" onClick={() => setCount(count + 1)}><img src={arrowright} /></button>
            </div>
            
        </div>
    )
}

export default Character;