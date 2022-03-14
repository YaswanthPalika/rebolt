import { CardContent, Typography } from '@mui/material';
import React from 'react';
import {Component} from 'react'

import MainCard from 'ui-component/cards/MainCard';

import { Avatar,Grid, Box, List, ListItem, ListItemAvatar, ListItemText } from '@mui/material';
//user imports
import { collection, getDocs,updateDoc, setDoc, deleteDoc, doc, addDoc, serverTimestamp, query, where } from "@firebase/firestore";
import { db, email, name, uid } from 'index';

class Accountdetails extends Component{
  state={name:'',
         email:'',
         phone :'',
        }

   componentDidMount = async() => {
    const q = query(collection(db, 'users'), where("uid", "==", uid));
    await getDocs(q).then((snapshot) => {
      snapshot.docs.forEach((doc)=>{
        const data = doc.data()
        console.log(data.phone)
        this.setState({name:data.name,email:data.email,phone:data.phone})
      })
    })
   }
  render(){
    const {name,email,phone} = this.state
    return (
      <>
      <MainCard title="Account details">
        <Grid className="rebolt-box" item sx={{ mb: 1.25 }}>
            <Typography
              sx={{
              fontSize: '1rem',
              fontWeight: 500,
            }}>
              <p>
                <span>Name :</span> {name}
              </p>
              <p>
                <span>email :</span> {email}
              </p>
              {phone === undefined ? 
                <p><span>phone :</span>not available</p> 
                : 
                <p><span>phone :</span> {phone}</p>}
              </Typography>
        </Grid>
      </MainCard>
      </>
    )
  }
}

export default Accountdetails
