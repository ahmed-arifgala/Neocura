import React from 'react';
import classes from './HospitalPage.module.css';
import HosCard from './HosCard/HosCard';
import HosMainSec from './HosMainSec/HosMainSec';
import DetailInfoSec from '../../Doctor/DocMainSec/DetailInfoSec/DetailInfoSec';
import { HosQ, HosA } from '../../../StateData/DetailInfoQA/DetailInfoQA';

const HospitalPage = (props) => {
    return (
            <div className={classes.HospitalPage}>
                <HosCard toolbarName = {props.toolbarName} />
                <HosMainSec />
                <DetailInfoSec Q={HosQ} A={HosA} />


            </div>
        );
}

export default HospitalPage;