import React, { useState, useEffect } from 'react';
import IndivDoc from '../../components/IndivDoc/IndivDoc';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import Context from '../../Context/Context';
import { useLoaderData , useParams} from "react-router-dom";

const DoctorList = () => {

  const docInfo2 = useLoaderData();
  console.log('DOCINFO2: ', docInfo2);
  const docInfoArr = Object.keys(docInfo2);
  let docInfo = docInfo2[docInfoArr[0]];
  const locations = docInfo2[docInfoArr[1]];
  const userReview = docInfo2[docInfoArr[2]];
  console.log(docInfo);
  console.log(locations);
  console.log(userReview);


  docInfo = {
    ...docInfo,
    'services': ['Echo-Cardiography', 'Holter Monitoring', 'Angioplasty', 'Pacemaker Implantation', 'Coronary Artery Bypass Surgery' ],
    'professionalMemberships': ['Pakistan Medical Commission (PMC) '],
    'surgeriesPerformed': [],
    'noOfReviews': 5
  }

  console.log('AFTER ASSIGNMENT', docInfo);
    
    return (
        
        <Aux>
            <Context.Provider value={{docInfo, userReview, locations}}>
                <IndivDoc />
            </Context.Provider>

        </Aux>


    );
};

export default DoctorList;

export async function loader({params}) {
  
  console.log(params.docId);

  const response = await fetch("http://localhost:5000/Doctor" +  "/" + params.leftItem + "/" + params.rightItem + "/" + params.cityName + "/" + params.docId);

  console.log(response);
                                                                      
  return response;

}
