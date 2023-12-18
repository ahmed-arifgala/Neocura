import React, {useEffect, useState} from "react";
import classes from './LocCard.module.css';
import videoConIcon from '../../../../../assets/Icons/videoCon2.png';
import hospitalIcon from '../../../../../assets/Icons/hospitalIcon.png';
import clinicIcon from '../../../../../assets/Icons/clinicIcon.png';

const LocCard = ({locData, ImgIndex}) => {

    console.log(locData);
    const [isAvailableNow, setIsAvailableNow] = useState(false);
    const [nextAvailableDay, setNextAvailableDay] = useState('');
    const [nextAvailableTime, setNextAvailableTime] = useState('');

    const currentDate = new Date();
    const currentDay = currentDate.toLocaleString('en-us', {weekday: 'long'});

   useEffect( () => {


    const currentDate = new Date();
    const currentDay = currentDate.toLocaleString('en-us', {weekday: 'long'});
    const currentHours = currentDate.getHours();
    const currentMinutes = currentDate.getMinutes();
    const currentAmPm = currentHours >= 12 ? 'pm' : 'am';
    var startTime = "00:00 pm";
    var endTime = "00:00 pm";


    if(locData.timetable[currentDay]!=''){
        // console.log("CHECKING ERROR: ", locData.timetable[currentDay])
        var [startTime, endTime] = locData.timetable[currentDay].split(' - ');
    //     console.log("spliting locdata.timetable: ", locData.timetable[currentDay].split(' - '));
    //     console.log("START TIme: ",startTime, endTime)
    // 
    }

    const [startHours, startMinutes, startAmPm] = startTime.split(/:| /);
    // console.log("SPLITING starttime: ",startTime.split(/:| /));
    // console.log(startHours);
    // console.log(startMinutes);
    
    const [endHours, endMinutes, endAmPm] = endTime.split(/:| /);
    

    const getNextAvailableDay = (currentDay) => {
        const days = Object.keys(locData.timetable);
        const currentIndex = days.indexOf(currentDay);
    
        let nextDayIndex = (currentIndex + 1) % days.length;
        while (locData.timetable[days[nextDayIndex]] === '') {
          nextDayIndex = (nextDayIndex + 1) % days.length;
        }
    
        return days[nextDayIndex];
      };

    if(locData.timetable[currentDay]!=''){
        // console.log('entering if block');
        const isStartTimePassed = currentAmPm === startAmPm
        ? currentHours > parseInt(startHours, 10) || (currentHours === parseInt(startHours, 10) && currentMinutes > parseInt(startMinutes, 10))
        : startAmPm === 'am' && currentAmPm === 'pm';
        
        const isEndTimePassed = currentAmPm === endAmPm
        ? currentHours > parseInt(endHours, 10) || (currentHours === parseInt(endHours, 10) && currentMinutes > parseInt(endMinutes, 10))
        : endAmPm === 'am' && currentAmPm === 'pm';

        if(isStartTimePassed && !isEndTimePassed) {
            setIsAvailableNow(true);
        }else if(!isStartTimePassed){
            setNextAvailableDay(currentDay);
            setNextAvailableTime(locData.timetable[currentDay]);
        }else{
            setNextAvailableDay(getNextAvailableDay(currentDay));
            setNextAvailableTime(locData.timetable[getNextAvailableDay(currentDay)]);
        }

    }else{
        // console.log('entering else block');
        setNextAvailableDay(getNextAvailableDay(currentDay));
        setNextAvailableTime(locData.timetable[getNextAvailableDay(currentDay)]);
    }


   }, [] );


 
   
    return(
    <div className={classes.LocCard}>
        
        <p className={classes.Heading}>
            <img src={ImgIndex == 0 ? videoConIcon : ImgIndex == 1 ? hospitalIcon : clinicIcon } />
            {locData.name}
        </p>
        
        <div>
            <div className={classes.Info}>
                <span className={classes.CircleIcon}> </span>
                {
                isAvailableNow? (<p>Available Now</p>) 
                : (
                    <p>
                        <span>Available {nextAvailableDay === currentDay ? 'Today' : ' on ' + nextAvailableDay}</span>
                    </p>
                )
                }
                <p>Rs. {locData.fees}</p>
            </div>

            
            
            { <div className={classes.Timing}>
             { 
                !isAvailableNow ? (<p style={{fontSize: '12px', marginLeft: '18px'}}>{nextAvailableTime}</p>) : null
             }
            </div> }
            
        </div>

    </div>
   ); 
}


export default LocCard;