import React, { useState, useEffect } from "react";
import DocMainSec from "./DocMainSec/DocMainSec";
import classes from "./Doctor.module.css";
import {

  FAQData,
  docDetailInfoQ,
  docDetailInfoA

} from "../../StateData/DocData/DocData";
import { useLoaderData, useParams } from "react-router-dom";
import FilterSec from "../../UI/FilterSec/FilterSec";
import FAQSection from "../../UI/FAQSection/FAQSection";
import DetailInfoSec from "./DocMainSec/DetailInfoSec/DetailInfoSec";

const Doctor = () => {

  const doctorDataDatabase = useLoaderData();
  const params = useParams();

  const doctorDb = doctorDataDatabase?.map((dr) => dr.doctorInfo);
  console.log("DOCTOR DB: ", doctorDb);
  //   console.log(docData)

  const doctorLocDb = doctorDataDatabase?.map((dr) => dr.locInfo);
  console.log(doctorLocDb);
  //   console.log(locData)

  const [docDetail, setDocDetail] = useState(doctorDb);
  const [locDetail, setLocDetail] = useState(doctorLocDb);
  const [prevDocDetail, setPrevDocDetail] = useState(doctorDb);
  const [prevLocDetail, setPrevLocDetail] = useState(doctorLocDb);
  const [count, setCount] = useState(0);


  const docFilterNames = [
    "Male Doctors",
    "Female Doctors",
    "Highest Satisfaction ",
    "Most Experienced",
    "Online Doctors",
    "Lowest Fees",
    "Clinic Doctors",
  ];

  const AvgFees = (doc) => {
    let totalFees = 0;
    let count = 0;
    Object.keys(doc)
      .slice(1, 4)
      .forEach((locs) =>
        doc[locs].forEach((loc) => {
          count++;
          totalFees += loc.fees;
        })
      );
    console.log(totalFees);
    console.log(count);
    console.log(totalFees / count);

    return totalFees / count;
  };
  


const calcExpAvg = () => {
  let totalExp = 0;

  doctorDb.forEach((doc) => {
      totalExp += parseInt(doc.experience.split(" ")[0]);
    });
    console.log(totalExp / doctorDb.length);
    return totalExp / doctorDb.length;
  };


const isClinic = (id) => {
  let isClinic = false;

  let matchedObj = doctorLocDb.find((obj) => obj.docId === id);

  return (matchedObj.clinic.length > 0);
};

const filterData = (name, fside) => {
  
  let filteredData;
  console.log(fside);
  console.log(name);

  if (!fside) {
    setCount(count + 1);
    setPrevDocDetail(docDetail);
    setPrevLocDetail(locDetail);

    console.log("entering if");

    if (name === docFilterNames[2]) {
      filteredData = docDetail.filter((doc) => parseFloat(doc.satisfiedPatients) >= 0.95);
    }
     else if (name === docFilterNames[3]) {
      let expAvg = calcExpAvg();
      filteredData = docDetail.filter(
        (doc) => parseInt(doc.experience.split(" ")[0]) >= expAvg
      );

      console.log(filteredData);
    } 
    else if (name === docFilterNames[4]) {
      filteredData = docDetail.filter((doc) => doc.isPlatinumDoctor);
    } 
    else if (name === docFilterNames[6]) {
      filteredData = docDetail.filter((doc) => isClinic(doc.docId));
    }
     else if (name === docFilterNames[5]) {
      let avgFeesList = [];

      doctorLocDb.forEach((doc) =>
        avgFeesList.push({
          doc_Id: doc.docId,
          avg_Fees: AvgFees(doc),
        })
      );

      console.log(avgFeesList);
      let sum = avgFeesList
        .map((ob) => ob.avg_Fees)
        .reduce((sum, currentValue) => sum + currentValue, 0);

      let mean = sum / avgFeesList.length;
      console.log(sum, mean);

      let cheaperdocIdList = avgFeesList.filter((ob) => ob.avg_Fees <= mean);

      console.log(cheaperdocIdList);

      filteredData = docDetail.filter((doc) =>
        cheaperdocIdList.map((ob) => ob.doc_Id).includes(doc.docId)
      );

      // filteredData = docData.filter(doc => doc.satisfiedPatients >= 0.95);
    } else if (name === docFilterNames[0] || name === docFilterNames[1]) {
      console.log('Entering gender filter');
      filteredData = docDetail.filter(
        (doc) => doc.gender === name.split(" ")[0]
      );
      console.log(filteredData);
    }

    const idArr = filteredData.map((doc) => doc.docId);
    // console.log('in doc, idArr: ', idArr);
    const filteredLocData = locDetail.filter((item) =>
      idArr.includes(item.docId)
    );
    console.log('in doc, filteredLocData: ', filteredLocData);

    setDocDetail(filteredData);
    setLocDetail(filteredLocData);


  }
  
  else {
    console.log("entering else");

    if (count != 0) {
      console.log("entering else if");
      setCount(count - 1);

    } else  {
      console.log("entering else else");
    }

    setDocDetail(prevDocDetail); 
    setLocDetail(prevLocDetail);

  }

};

  return (
    <div className={classes.Doctor}>

      <div className={classes.Header}>
         {
          params.leftItem == 'Speciality' || params.leftItem == 'Online' ? 
              <h1>Best {params.rightItem}s in {params.cityName} </h1> 
          : <h1>Best Doctors for {params.rightItem} in {params.cityName} </h1> 
         }
          
          <FilterSec filterNames={docFilterNames} handler={filterData} />
      </div>
      
  
      <DocMainSec docData={docDetail} locData={locDetail} />
  
      <DetailInfoSec Q={docDetailInfoQ} A={docDetailInfoA} />
  
      <FAQSection FAQData={FAQData} />

    </div>
  );

};


export default Doctor;

export async function loader({ params }) {

    const response = await fetch(

    "http://localhost:5000/Doctor" +
      "/" +
      params.leftItem +
      "/" +
      params.rightItem +
      "/" +
      params.cityName
  );

  console.log(response);
  return response;
}
