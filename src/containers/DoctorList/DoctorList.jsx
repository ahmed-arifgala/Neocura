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



  // const [docDetail2 , setDocDetail2 ] = useState ();
  // const params = useParams();

  // useEffect(() => {
  //   async function fetchDoctor() {
  //     try {
  //       const response = await axios.get(
  //         `http://localhost:5000/Doctor/${params.leftItem}/${params.rightItem}/${params.cityName}/${params.docId}`
  //       );
  //       const data = response.data;
  //       console.log(response);
  //       console.log(data);
  //       setDocDetail2(data);
  //     } catch (error) {
  //       console.error('Error fetching doctor:', error);
  //     }
  //   }

  //   fetchDoctor();
  // }, []);


    // const [docInfo, setDocInfo] = useState(
    //     {
    //         'docId': 1,
    //         'docImg': 'doc_111.png',
    //         'name': 'Dr. Samra Sadaf',
    //         'specialization': ['Dermatologist', 'Cosmetologist', 'Cardiologist', 'Neurologist', 'Urologist'],
    //         'education': [{
    //             degree: 'M.B.B.S',
    //             uniName: 'Sharif Medical & Dental College',
    //             countryName: 'Pakistan',
    //             yearOfGrad: '2015'
    //         },
    //         {
    //             degree: 'M.C.P.S (Dermatology)',
    //             uniName: ' Gujranwala Medical College',
    //             countryName: 'Pakistan',
    //             yearOfGrad: '2021'
    //         }
    //         ],
    //         'services': ['Acne Treatment', 'Alopecia', 'Antihistamine Treatment', 'Body Contouring', 'Boil'],
    //         'conditionsTreated': ['Acne', 'Acne Scars', 'Eczema', 'Herpes', 'Moles'],
    //         'surgeriesPerformed': [],
    //         'professionalMemberships': ['Pakistan Medical Commission (PMC) '],
    //         'languagesSpoken': ['Urdu', 'English', 'Pashto', 'Chinese'],
    //         'experience': '5 Years',
    //         'satisfiedPatients': .91,
    //         'noOfReviews': 54,
    //         'waitTime': 15,
    //         'isPlatinumDoctor': true,
    //     }
    // );
    
  //  const [locations, setlocations] = useState(
  //   { 
  //     'onlineConsultation': [{
  //       'name': 'Online Video Consultation',
  //       'fees': 1200,
  //       'timetable': {
  //         'Monday': '06:00 pm - 10:00 pm',
  //         'Tuesday': '06:00 pm - 10:00 pm',
  //         'Wednesday': '06:00 pm - 10:00 pm',
  //         'Thursday': '06:00 pm - 10:00 pm',
  //         'Friday': '06:00 pm - 10:00 pm',
  //         'Saturday': '05:00 pm - 11:00 pm',
  //         'Sunday': '05:00 pm - 11:00 pm',
  //       }
  //     }],

  //     'hospital': [{
  //       'name': 'Combined Military Hospital (CMH)',
  //       'location': 'Abdul Rehman Road, Lahore',
  //       'fees': 1500,
  //       'timetable': {
  //         'Monday': '08:00 am - 12:00 pm',
  //         'Tuesday': '08:00 am - 12:00 pm',
  //         'Wednesday': '08:00 am - 12:00 pm',
  //         'Thursday': '08:00 am - 12:00 pm',
  //         'Friday': '08:00 am - 12:00 pm',
  //         'Saturday': '09:00 am - 01:00 pm',
  //         'Sunday': '09:00 am - 01:00 pm',
  //       }
  //     }
  //   ],
  //     // 'clinic': {}

  //    // viewingTimetable: false
  //   }
  //  );
      
    // const [userReview, setUserReview] = useState(
    //     {

    //     overview: {
    //       'Consulation Time': 5.0,
    //       'Diagnosis': 5.0,
    //       'Cleanliness': 5.0,
    //       'Staff Behaviour': 4.8
    //     }, 


    //     reviews: [
    //         {
    //           "name": "Mohammed Ahmed",
    //           "timePassed": "3 months ago",
    //           "review": "I had a great experience with Dr. Samra. The wait time was minimal, and the doctor provided a thorough diagnosis. The treatment prescribed was effective, and I felt that enough time was given during the consultation to address my concerns. Highly recommended!"
    //         },
    //         {
    //           "name": "Aisha Khan",
    //           "timePassed": "1 year ago",
    //           "review": "Dr. Samra is an excellent doctor. I visited her for my skin condition, and she was very knowledgeable and attentive. The wait time was reasonable, and the treatment plan she recommended worked wonders for me. I'm grateful for her expertise!"
    //         },
    //         {
    //           "name": "Abdullah Ali",
    //           "timePassed": "2 weeks ago",
    //           "review": "I had a positive experience with Dr. Samra. She was professional and caring. The wait time was short, and she explained the diagnosis and treatment options clearly. I'm satisfied with the consultation."
    //         },
    //         {
    //           "name": "Fatima Hassan",
    //           "timePassed": "6 months ago",
    //           "review": "Dr. Samra is an amazing doctor. She provided a thorough examination and listened attentively to my concerns. The wait time was reasonable, and the treatment she prescribed has been effective. I would highly recommend her!"
    //         },
    //         {
    //           "name": "Ibrahim Malik",
    //           "timePassed": "4 months ago",
    //           "review": "My experience with Dr. Samra was excellent. She was knowledgeable, friendly, and took the time to explain everything in detail. The wait time was minimal, and the treatment provided yielded positive results. I'm grateful for her expertise!"
    //         },
    //         {
    //           "name": "Zainab Khan",
    //           "timePassed": "8 months ago",
    //           "review": "Dr. Samra is a highly skilled and compassionate doctor. She provided a thorough examination and tailored treatment plan. The wait time was reasonable, and she addressed all my concerns. I'm satisfied with the care I received."
    //         },
    //         {
    //           "name": "Hamza Ahmed",
    //           "timePassed": "3 weeks ago",
    //           "review": "I had a great experience with Dr. Samra. She was attentive, knowledgeable, and provided a detailed explanation of my condition. The wait time was minimal, and the treatment she prescribed has been effective. Highly recommended!"
    //         },
    //         {
    //           "name": "Ayesha Ali",
    //           "timePassed": "5 months ago",
    //           "review": "Dr. Samra is a fantastic doctor. She was thorough, caring, and attentive to my needs. The wait time was reasonable, and she took the time to address all my questions. I'm pleased with the treatment outcome."
    //         },
    //         {
    //           "name": "Ali Hassan",
    //           "timePassed": "9 months ago",
    //           "review": "I had a positive experience with Dr. Samra. She was professional, empathetic, and provided clear explanations. The wait time was short, and the treatment plan she recommended has been effective. I would recommend her to others."
    //         },
    //         {
    //           "name": "Sara Malik",
    //           "timePassed": "2 years ago",
    //           "review": "Dr. Samra is an excellent dermatologist. She is knowledgeable, patient, and provided me with a comprehensive treatment plan. The wait time was reasonable, and I'm satisfied with the results."
    //         }
    //         ]
    //     }
    // );



    

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
