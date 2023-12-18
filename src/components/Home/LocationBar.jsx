import React, { useState } from "react";
import classes from "./Home.module.css";
import Box from '@mui/material/Box';
import { Autocomplete, TextField } from "@mui/material"; 
import LocationOnIcon from '@mui/icons-material/LocationOn';
import InputAdornment from '@mui/material/InputAdornment';
import MyLocationIcon from '@mui/icons-material/MyLocation';

export default function LocationBar() {
  const [city,setCity]=useState("")
  console.log(city)
  const data=[
    {label:"Karachi"},
    {label:"Lahore"},
    {label:"Islamabad"},
    {label:"Quetta"},
    {label:"Peshawar"},
  ]

  return (
    <Autocomplete
      id="country-select-demo"
      className={classes.LocBar}
      options={data}
      // sx={{backgroundColor: "rgba(243, 243, 243, 0.802)"}}
      // freeSolo
      disableClearable
      autoHighlight
      getOptionLabel={(option) => option.label}
      renderOption={(props, option) => (
  
    <Box component="li" key={option.label} sx={{ backgroundColor: "rgba(243, 243, 243, 0.802)", '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
          <div style={{ display: 'flex', width: '100%', gap:"10px" }}>
          <MyLocationIcon sx={{fontSize:"20px"}}/>
            <p>{option.label}</p>
          </div>
        </Box>
      )}
      renderInput={(params) => (
        <TextField
          onChange={(e) => { console.log(e.target.value) }}
          onSelect={(e) => { setCity(e.target.value) }}
          className={classes.searchField}
          {...params}
          sx={{
            "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "transparent",
            }
          }}
          placeholder="Enter City"
          InputProps={{
            ...params.InputProps,
            startAdornment: (
              <InputAdornment position="start">
                <LocationOnIcon sx={{ color: "#042343ff", marginRight: 1 }} />
              </InputAdornment>
            ),
          }}
        />
      )}
    />
  );
}
