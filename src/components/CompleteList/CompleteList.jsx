import React, {useState} from 'react';
import classes from './CompleteList.module.css';
import ListCard from './ListCard/ListCard';
import { cities } from '../../StateData/NavData/NavData';
import {Link, useLocation, useLoaderData} from 'react-router-dom';

const CompleteList = () => {

    const [selectedName, setSelectedName] = useState('');
    const location = useLocation();
    
    const specialities = useLoaderData();
    console.log(specialities);

    const scrollToCities = (selectionName) => {
        const citiesSec = document.getElementById('cities');
        citiesSec.scrollIntoView({behavior: 'smooth'});
        setSelectedName(selectionName);
    }

    // const [specialities, setSpecialities] = useState(
    //    [
    //         { name: 'Cardiologist', noofdr: 30 },
    //         { name: 'Dermatologist', noofdr: 25 },
    //         { name: 'Pediatrician', noofdr: 40 },
    //         { name: 'Orthopedic Surgeon', noofdr: 15 },
    //         { name: 'Gastroenterologist', noofdr: 20 },
    //         { name: 'Ophthalmologist', noofdr: 18 },
    //         { name: 'Psychiatrist', noofdr: 35 },
    //         { name: 'Neurologist', noofdr: 28 },
    //         { name: 'ENT Specialist', noofdr: 22 },
    //         { name: 'Endocrinologist', noofdr: 12 },
    //         { name: 'Urologist', noofdr: 10 },
    //         { name: 'Pulmonologist', noofdr: 19 },
    //         { name: 'Oncologist', noofdr: 16 },
    //         { name: 'Radiologist', noofdr: 24 },
    //         { name: 'General Surgeon', noofdr: 32 },
    //         { name: 'Family Physician', noofdr: 45 },
    //         { name: 'Nephrologist', noofdr: 14 },
    //         { name: 'Rheumatologist', noofdr: 11 },
    //         { name: 'Dentist', noofdr: 50 },
    //         { name: 'Allergist', noofdr: 9 },
    //    ]
    // );


    return(
        <div className={classes.CompleteList}>
            
            <div className={classes.ListItems}>
                {
                    specialities.map((speciality, index) => {
                        return(
                            <ListCard 
                                    key={index} 
                                    heading={speciality.name} 
                                    para={speciality.noofdr} 
                                    scroll = {scrollToCities}
                                    
                            />
                        )
                    })
                }
            </div>
          
            <div className={classes.Cities} id='cities' >

                <h1>Choose a city</h1>
                
                <div className={classes.Card}>
                   {
                        cities.map((city, index) => (
                        <Link to={(`${location.pathname.substring('/CompleteList'.length)}/${selectedName}/${city}`) }>
                            <p>
                                {city}
                            </p>
                        </Link>
                        
                    
                    ))
                    }    
                </div>

                    
                   


            </div>

        </div>
    );
};

export default CompleteList;  


export async function loader({params}) {
    
    const response = await fetch("http://localhost:5000/CompleteList/" + params.toolBarName + "/" + params.leftItem);
  
    console.log(response);
                                                                        
    return response;
  
}

