import React from "react";
import Filter from "./Filter/Filter";
import classes from './FilterSec.module.css';

const FilterSec = ({filterNames, handler}) => {
    return (
        <div className={classes.FilterSection}>
            {
                filterNames.map((filter, i) => (
                    <Filter 
                        key={i}
                        index={i} 
                        name={filter}
                        handler={handler}
                    />
                ))
            }
        </div>
    );
}

export default FilterSec;