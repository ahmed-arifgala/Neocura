import React from "react";
import classes from './SideList.module.css';
import { cities } from "../../../../StateData/NavData/NavData";
import { Link } from "react-router-dom";

const SideList = (props) => {

    return (

        <div className={`${classes.SideList} ${classes.Open}`}>
            <ul>

                {
                    cities.map((city, i) => (
                        <li key={i}> 
                            <Link
                                onClick={props.closeHandler}
                                to={
                                    ((`${props.link}/${city}`)
                                    .split(' ')).join('-') 
                                    
                                 }
                            >
                                {city}

                            </Link>

                        </li>
                    ))
                }
              
            </ul>
        </div>
    );
}

export default SideList;