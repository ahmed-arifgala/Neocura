import React from "react";
import classes from './Hospital.module.css';
import HospitalPage from "./HospitalPage/HospitalPage";
import Context from "../../Context/Context";
import { useLoaderData, useParams } from "react-router-dom";


const Hospital = () => {

    const params = useParams();
    const HospitalData = useLoaderData();
    console.log(HospitalData);

    // const HospitalData1 = {
    //     "hospitalId": "3",
    //     "name": "Indus Hospital",
    //     "averageFees": "4000",
    //     "totalDoctors": "120",

    //     "branches": [
    //         {
    //             "name": "Indus Hospital",
    //             "location": "Korangi, Karachi",
    //             "fees": "1141",
    //             "postalCode": "45678",
    //             "email": "indus.korangi45678@gmail.com",
    //             "timetable": [
    //                 {
    //                     "Monday": "12:00 pm - 04:00 pm",
    //                     "Tuesday": "12:00 pm - 04:00 pm",
    //                     "Wednesday": "12:00 pm - 04:00 pm",
    //                     "Thursday": "12:00 pm - 04:00 pm",
    //                     "Friday": "",
    //                     "Saturday": "11:00 am - 03:00 pm",
    //                     "Sunday": "11:00 am - 03:00 pm"
    //                 }
    //             ]
    //         }
    //     ]
    // }


    return (
        <div className={classes.Hospital}>
            <Context.Provider value={{HospitalData}}>
                <HospitalPage toolbarName = {params.toolbarName} />
            </Context.Provider>
        </div>
    )
}

export default Hospital;


export async function loader({params}) {
  
  
    const response = await fetch("http://localhost:5000/" + params.toolbarName +  "/" + params.leftItem + "/" + params.rightItem);
  
    console.log(response);
                                                                        
    return response;
  
  }
  