import React, { useContext, useEffect, useState } from "react";
import LocationSec from "../../../../IndivDoc/IndivDocMainSec/RightSideSec/LocationSec/LocationSec";
import classes from "./HosRightSide.module.css";
import context from "../../../../../Context/Context";
import Aux from "../../../../../hoc/Auxiliary/Auxiliary";
import Modal from "../../../../../UI/Modal/Modal";

const HosRightSide = () => {
  const { HospitalData } = useContext(context);

  const br = HospitalData.branches[0];
  const timetable = br.timetable[0];

  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [viewingTimetable, setViewingTimetable] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState(null);

  const hideTimetableHandler = () => {
    setViewingTimetable(false);
    setShowModal(false);

  };

  const gen = (name) => {
    setSelectedLocation(name);
    setViewingTimetable(true);
  };

  useEffect(() => {
    if (viewingTimetable && selectedLocation) {
          if (loc.name === selectedLocation) {
            const tableRows = Object.entries(timetable).map(([day, time]) => (
              <tr key={day}>
                <td className={classes.Day}>{day}</td>
                <td className={classes.Time}>{time}</td>
              </tr>
            ));

            const timeTable = (
              <table>
                <tbody>{tableRows}</tbody>
              </table>
            );

            console.log("Found!", timeTable);
            showModalWithContent(timeTable);
          }
        }

      console.log("inside gen");

  }, [viewingTimetable, selectedLocation]);

  const showModalWithContent = (tt) => {
    setModalContent(
      <Modal show={viewingTimetable} modalClosed={hideTimetableHandler} className={classes.Modal}>
        <p>{tt}</p>
      </Modal>
    );
    setShowModal(true);
  };

  return (
    <Aux>
      {showModal && modalContent}

      <div className={classes.RightSideWrapper}>
        <div className={classes.HosRightSide}>

                  <LocationSec
                    key={br.name}
                    name={br.name}
                    location={br.location}
                    fees={br.fees}
                    timetable={timetable}
                    gen={gen}
                  />
    
        </div>
      </div>
    </Aux>
  );
};

export default HosRightSide;
