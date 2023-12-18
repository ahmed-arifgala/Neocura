import React from "react";

const Bg = (props) => {
    return(
        <div style={{backgroundImage: `url(${props.img})`}}>
            {props.children}
        </div>
    );
}

export default Bg;