import React, { useEffect} from 'react';
import {BallTriangle} from 'react-loader-spinner'
import ArrowBack from '@mui/icons-material/ArrowBack';
//css
//css
import './Retrotree.css';
import jsPDF from 'jspdf';
//mui imports
import {FaCopy} from 'react-icons/fa'
import { Card, CardActions, CardHeader, Fab } from '@mui/material';
import { Box, Dialog, DialogActions, DialogContent,CardMedia, DialogContentText, DialogTitle, FormControl, FormControlLabel, Grid, Radio, RadioGroup, Select } from '@mui/material';
import { CardContent } from '@mui/material';
import { Download, Refresh } from '@mui/icons-material';
import Button from '@mui/material/Button';
//firebase imports
import { db } from 'index';
import { doc ,query, getDoc} from '@firebase/firestore';
//third party imports
import { TreevizReact } from 'treeviz-react';
import { useNavigate, useParams } from 'react-router-dom';
import MyComponent from '../sample';

var arrayData = []

  const TemplateFreeTree = () => {
    var navigate = useNavigate()
    const [hid,changeHid] = React.useState([])
    const [open2,setopen2] = React.useState(false)
    const [open3,setopen3] = React.useState(false)
    const [open4,setopen4]= React.useState(false)
    const [data1,setData1] = React.useState([])
    const [isLoading,setLoader] = React.useState(false)
    const { eid } = useParams();
    const [eid1,idx] = eid.split(' ')
    const elementId =  `top_${idx}`
  
  
    const openReference = () => {
      setopen2(true)
    }
  
    const closeReference = () => {
      setopen2(false)
    }
  
    const LoaderBox = () => (
      <div className="loader">
        <BallTriangle color="#00BFFF" height={80} width={80} />
      </div>
    )
  
    const printDoc = () => {
      var doc = new jsPDF("p","pt","a4")
      doc.html(document.querySelector("#treeDiagram"),{
        callback : function(pdf){
          pdf.save("output.pdf")
        }
      })
        
    }
   
  const getoutput=async()=>{
    console.log(idx)
    const cardoutput = query(doc(db, 'retrosynthesis_tf', eid1))
    //getDoc(cardoutput).then(res => setcardoutputdata(res.data().output.top_0))
    const response = await getDoc(cardoutput)

    console.log(response.data().output[elementId],elementId)
    const outputData = response.data().output[elementId].path
    console.log(outputData)
    await outputData.map((each)=>{
      arrayData.push({
        id:each.id,
        color:each.color,
        father:each.father,
        procedure:each.procedure,
        smile:each.smile,
        smileTemp:each.smile_temp,
        smileB64:each.smile_b64,
        reference:each.reference,
        title:each.title,
        usptoLink:each.uspto_link,
        time:each.time,
        buildingBlock:each.building_block,
        buildingBlockPath:each.building_block_path,
        score:each.score,
        rxnScore:each.rxn_score,
        fwdScore:each.fwd_score,
        usid:each.usid,
      })
    })
    console.log(arrayData)
    setLoader(false)
  }
  useEffect(() => {
    reload()
  },[])


 
  const reload = async() => {
    setLoader(true)
    arrayData = []
    //console.log("loading")
    await getoutput()
    setData1(arrayData)
    //console.log("done")
  }
  
  const TreeOutput = () => (
    <Card elevation={2}>
    <CardHeader title='Retrosynthesis path-view' style={{ borderBottom: '2px solid black' }}></CardHeader>

    <CardContent>
      <div id="treeDiagram">
      <TreevizReact
      sx={{height:'300px',width:'300px'}}
        data={data1}
        areaHeight={600}
        areaWidth={950}
        linkShape='curve'
        idKey={'id'}
        relationnalField={'father'}
        nodeWidth={150}
        nodeHeight={100}
        mainAxisNodeSpacing={1.3}
        secondaryAxisNodeSpacing={1.75}
        
        renderNode={(node) =>{
          if(node.data.reference){
            return `<p class="reference-card" style="border:4px solid #808080;"
             hid=${node.data.id}>REFERENCE</p>`
          }
          else{
            if(node.data.buildingBlockPath == null){
              return ` 
          <div class="card card1" style="border-top:8px solid ${node.data.color};border-bottom:8px solid ${node.data.color};
          margin-top:-30px;
          padding:5px;border-radius:15px;box-shadow:2px spx black;box-shadow:4px 4px 5px grey;">
              <img class="tree-img" src='data:image/jpeg;base64, ${node.data.smileB64}' hid=${node.data.id}/>
              <p hid=${node.data.id}></p>
          </div>
          `
            }
            else{
              return ` 
                    <div class="card" style="border-top:8px solid ${node.data.color};border-bottom:8px solid ${node.data.color};
                    margin-top:-30px;
                    padding:5px;border-radius:15px;box-shadow:2px spx black;box-shadow:4px 4px 5px grey;">
                        <img class="tree-img" src='data:image/jpeg;base64, ${node.data.smileB64}' hid=${node.data.id}/>
                        
                    </div>
                    `
            }
            
          } 
        }

        }
        onNodeClick={(node) => {
          
          var nid = new DOMParser().parseFromString(node.srcElement.outerHTML, 'text/html').body.getElementsByTagName("img")[0].getAttribute('hid');
          nid = parseInt(nid)
         // console.log(data1[parseInt(nid)])
         // console.log(data1[nid].building_block)
          changeHid(data1[parseInt(nid)])

          if(data1[nid].reference === true){
            setopen2(true)
          }else{
              setopen4(true)
          }
        }}
        
        duration={1000}
        linkWidth={(node) => 5}
      />
      </div>

    </CardContent>
    <CardActions style={{borderTop:'2px solid black'}}>

      <Fab aria-label="add" color='secondary' spacing={2}>
        <Refresh onClick={reload}/>
      </Fab>
      <Fab aria-label="add" color='secondary'>
        <Download onClick={printDoc}/>
      </Fab>
      
    </CardActions>
  </Card>

  )

  

  return (
    <>
    <grid>
    <Fab variant="extended" sx={{ mb: 2 }} onClick={()=>{
                        //history.push("/dashboard")
                        //history.back()
                        navigate(-1)
                    }} style={{margin:'10px'}}>
                        <ArrowBack />
    </Fab>
    </grid>

     {isLoading && <LoaderBox />}
     {!isLoading && <TreeOutput />}
     
      <Dialog
        sx={{ '& .MuiDialog-paper': { maxWidth: '90vw', maxHeight: '90vh' } }}
        minWidth="xs"
        open={open4}
      >
        <DialogTitle></DialogTitle>
        <DialogContent dividers>
          <CardMedia
                              component="img"
                              height="250"
                              image={`data:image/png;base64,${hid.smileB64}`}
                              alt="green iguana"
                            />
          <p>Score : {hid.fwdScore}</p>
          <button className='copy-button' 
            onClick={()=>{
            navigator.clipboard.writeText(hid.smile);
            alert("Copied the text ");
          }}>click here to copy Smiles</button>
          {hid.buildingBlock && <p><a rel="noreferrer" 
          target="_blank" href={hid.buildingBlockPath}>buy chemical</a></p>}
        </DialogContent>
        <DialogActions>
          <Button onClick={()=>{
            setopen4(false)
          }}>
            Close
          </Button>
        </DialogActions>
      </Dialog>

    </>
  );
}


export default TemplateFreeTree;
