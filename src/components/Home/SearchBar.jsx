import React, { useEffect, useState } from "react";
import classes from "./Home.module.css";
import Box from '@mui/material/Box';
import { Autocomplete, TextField } from "@mui/material"; 
import icon1 from '../../assets/images/HomeImages/docIcon.png'
import icon2 from '../../assets/images/HomeImages/hospIcon.png'
import icon3 from '../../assets/images/HomeImages/services.png'
import icon4 from '../../assets/images/HomeImages/condIcon.png'
import InputAdornment from '@mui/material/InputAdornment';
import icon5 from '../../assets/images/HomeImages/surgIcon.png'
import axios from "axios";
import SearchIcon from '@mui/icons-material/Search';

export default function SearchBar() {
  const [Item,setItem]=useState("")

    const [data, setData] = useState([]);

const Search=(e)=>{
    setItem(e);
    console.log(e)
}

    useEffect(() => {
      axios.get("http://localhost:5000/searchBarApi")
        .then((response) => {
          console.log(response)
          const uniqueData = response.data.map((option, index) => ({
            ...option,
            key: `option-${index}`,
          }));
          setData(uniqueData);
        })
        .catch((error) => {
          console.log(error);
        });
    }, []);    return (
    <Autocomplete
      id="country-select-demo"
      className={classes.SearchBar}
      options={data}
      freeSolo
      disableClearable
      autoHighlight
      getOptionLabel={(option) => option.label}
      renderOption={(props, option) => (
        <Box component="li" key={option.key} sx={{ borderTopLeftRadius: "20px", '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
          <img
            loading="lazy"
            width="20"
            src={option.type === "Doctor" ? icon1 : option.type === "Hospital" ? icon2 : option.type === "Services" ? icon3 : option.type === "Condition" ? icon4 :icon5 }
            srcSet={option.type === "Doctor" ? icon1 : option.type === "Hospital" ? icon2 : option.type === "Services" ? icon3 : option.type === "Condition" ? icon4 :icon5 }
            alt=""
          />
          <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}>
            <p>{option.label}</p>
            <p>{option.type}</p>
          </div>
        </Box>
      )}
      renderInput={(params) => (
        <TextField
          onChange={(e) => { console.log(e.target.value) }}
          onSelect={(e) => { Search(e.target.value) }}
          className={classes.searchField}
          {...params}
          sx={{
            "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "transparent",
            }
          }}
          placeholder="Search for doctors, hospitals, specialities, services, diseases"
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <InputAdornment position="end">
                <SearchIcon sx={{ color: "#042343ff",fontSize:"32px", marginLeft: 4 }} onClick={(e)=>Search(params.inputProps.value)}/>
              </InputAdornment>
            ),
          }}
        />
      )}
    />
  );
}