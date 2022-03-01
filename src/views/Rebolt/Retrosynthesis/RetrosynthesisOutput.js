import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import {BallTriangle} from 'react-loader-spinner'
import ArrowBack from '@mui/icons-material/ArrowBack';
// material-ui
import { Button, Card, CardActions, CardContent, CardHeader, CardMedia, Grid,Fab } from '@mui/material';
import { Typography } from '@mui/material';
import { ContactSupportOutlined } from '@mui/icons-material';
// project imports
import MainCard from 'ui-component/cards/MainCard';
//firebase imports
import { db } from 'index';
import { onSnapshot, query, where, collection, doc, getDoc } from '@firebase/firestore';



const RetrosynthesisOutput = () => {
  const [cardoutputdata, setcardoutputdata] = React.useState([])
  const [arrayKeys, setArrayKeys] = React.useState([])
  const [isLoading,setLoader] = React.useState(false)
  const { eid } = useParams();

  const getoutput = () => {
    const carddata = [];
    const cardoutput = query(doc(db, 'retrosynthesis', eid))
    getDoc(cardoutput)
    .then(res => {
      const x =res.data().output
      const y = Object.values(x)
      
    })
    getDoc(cardoutput)
    .then(async res => {
      const x =res.data().output
      const y = Object.values(x)
      const z = Object.keys(x)
      y.sort()
      await setArrayKeys(z)
      await setcardoutputdata(y)
    })


  }
  React.useEffect(() => {
    setLoader(true)
    getoutput();
    setLoader(false)
  }, [])

  const LoaderBox = () => (
    <div className="loader">
      <BallTriangle color="#00BFFF" height={80} width={80} />
    </div>
  )

  const RenderCardOutput = () => (
                  <>
                    <MainCard style={{ mb: '2' }}>
                      <Grid container spacing={2}>
              {
                  cardoutputdata.map(data =>{
                    const idx = data.idx
                    const elementData = data.path[0]
                    console.log(elementData)
                    const str1 = `USPTO i’d : ${elementData.usid}`
                  return(<>
                    <Grid item xs={12} lg={4}>
                          <Card elevation={2}>
                            <CardHeader title={str1}></CardHeader>
                            <CardMedia
                              component="img"
                              height="250"
                              image={`data:image/png;base64,${elementData.smile_temp}`}
                              alt="green iguana"
                            />
                            <CardContent>
                              <Grid container spacing={2}>
                                <Grid items sm={6} xs={6}><Typography variant="body" content="body" display="inline-block">Score :{(elementData.score).toFixed(2)} </Typography></Grid>
                                <Grid items sm={6} xs={6}><Typography variant="body" content="body" display="inline-block">Steps :{ elementData.num_steps}</Typography></Grid>
                              </Grid>
                            </CardContent>

                            <CardActions>
                              <Button size="small" variant="contained"><Link to={`/Rebolt/RetrosynthesisTreeOutput/${eid}+${idx}`}>view</Link></Button>
                            </CardActions>
                          </Card>
                        </Grid>
                  </>)
                })
              }
                        
                      </Grid>
                    </MainCard>
                  </>
  )

  return (
    <>
      <grid>
          <Fab variant="extended" sx={{ mb: 2 }} onClick={()=>{
                        //history.push("/dashboard")
                        //history.back()
                    }} style={{margin:'10px'}}>
                        <ArrowBack />
                    </Fab>
      </grid>
      {isLoading && <LoaderBox />}
     {!isLoading && <RenderCardOutput />}
    </>
    
  )
}

export default RetrosynthesisOutput