import React, { useContext, useEffect, useState } from "react";
import LocationSec from "./LocationSec/LocationSec";
import classes from "./RightSideSec.module.css";
import context from "../../../../Context/Context";
import Aux from "../../../../hoc/Auxiliary/Auxiliary";
import Modal from "../../../../UI/Modal/Modal";

const RightSideSec = () => {
  const { locations } = useContext(context);
  console.log('LOCATIONS: ', locations);
  const locKeys = Object.keys(locations);
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [viewingTimetable, setViewingTimetable] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState(null);

  const hideTimetableHandler = () => {
    setViewingTimetable(false);
    setShowModal(false);

    console.log('handler called');

  };

  const gen = (name) => {
    setSelectedLocation(name);
    setViewingTimetable(true);
  };

  useEffect(() => {
    if (viewingTimetable && selectedLocation) {
      locKeys.slice(1,4).forEach((key) => {
        locations[key].forEach((loc) => {
          if (loc.name === selectedLocation) {
            const tableRows = Object.entries(loc.timetable).map(([day, time]) => (
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
        });
      });

      console.log("inside gen");
    }
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
        <div className={classes.RightSideSec}>
          {locKeys.slice(1,4).map((key) => {
            return locations[key].map((loc) => {
              return (
                  <LocationSec
                    key={loc.name}
                    name={loc.name}
                    location={loc.location}
                    fees={loc.fees}
                    timetable={loc.timetable}
                    gen={gen}
                  />
              );
            });
          })}
        </div>
      </div>
    </Aux>
  );
};

export default RightSideSec;
