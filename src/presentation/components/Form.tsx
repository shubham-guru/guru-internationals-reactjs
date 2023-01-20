import { Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import Alert from "./Alert";

const Form = () => {
  const [data, setData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const textField = {
    backgroundColor: "#fff",
  };

  const handleClick = async () => {
    if(!data.name.trim() || !data.email.trim() || !data.message.trim()){
        Alert.fire({
            icon: "error",
            title: "Fields cannot be empty",
          });
    } else{
        const { name, email, message } = data;

        const res = await fetch("https://guruinternationals-7f673-default-rtdb.asia-southeast1.firebasedatabase.app/userQuery.json",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name,
                email,
                message
            }),
        }
        );
        if(res){
            Alert.fire({
                icon: "success",
                title: "We have received your query, will get back to you soon !",
              });
        } else{
            Alert.fire({
                icon: "error",
                title: "Something went wrong from our end, please try again !",
            });
        }
    }
  }
  return (
    <Box sx={{ backgroundColor: "#f6f6f6", padding: 5 }}>
      <form style={{ textAlign: "center" }} autoCorrect="off">
        <TextField
          fullWidth
          label="Name"
          type="text"
          required={true}
          autoComplete="off"
          sx={textField}
          onChange={(e)=> setData({...data, name: e.target.value})}
        />
        <br />
        <br />
        <TextField
          fullWidth
          label="Email id"
          type="email"
          required={true}
          autoComplete="off"
          sx={textField}
          onChange={(e)=> setData({...data, email: e.target.value})}
        />
        <br />
        <br />
        <TextField
          fullWidth
          label="Message"
          type="text"
          required={true}
          autoComplete="off"
          multiline
          maxRows={6}
          sx={textField}
          onChange={(e)=> setData({...data, message: e.target.value})}
        />
        <br />
        <br />
        <Button color="warning" variant="contained" onClick={handleClick}>
          Submit
        </Button>
      </form>
    </Box>
  );
};

export default Form;
