import * as React from 'react';
import {useState} from 'react'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ArrowBack from '@mui/icons-material/ArrowBack';
import { Card, CardContent, CardHeader, Divider, Grid ,Fab} from '@mui/material';
import { useParams } from 'react-router-dom';
import MainCard from 'ui-component/cards/MainCard';
import {useNavigate} from 'react-router-dom'
//firebase imports
import { db } from 'index';
import { onSnapshot, query, where, collection, doc, getDoc } from '@firebase/firestore';
import './forward.css'

export default function ForwardReactionOutput() {
    var navigate = useNavigate()
    const [cardoutputdata, setcardoutputdata] = React.useState([])
  const [arrayData, setArrayData] = React.useState([])
  const [isLoading,setLoader] = React.useState(false)
  const [ReactantSmile,setReactant] = React.useState('')
  const [smile,setSmile] = React.useState('')
  const { eid } = useParams();

  const getoutput = () => {
    console.log(eid)
    const cardoutput = query(doc(db, 'forward_reaction', eid))
    getDoc(cardoutput)
    .then(res => {
      console.log(res.data().output)    
      setArrayData(res.data().output.predictions)
      setReactant(res.data().output.reactants)
      setSmile(`data:image/jpeg;base64,${res.data().output.reacts_b64}`)
      console.log(arrayData)
    })


  }
  React.useEffect(() => {
    getoutput();
  }, [])


    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
            backgroundColor: theme.palette.common.black,
            color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
            fontSize: 14,
        },
    }));


    const DataTable = () => {
        var sno =0
        return (
        arrayData.map(each => { 
            sno +=1
            const smileImg = `data:image/jpeg;base64,${each.smiles_b64}`
            return (
            <TableRow>
                                        <TableCell>{sno}</TableCell>
                                        <TableCell><img src={smileImg} atl="green igunia"/></TableCell>
                                        <TableCell>
                                            <table>
                                                <tr>{each.SMILES}</tr>
                                                <tr><button onClick={()=>{navigator.clipboard.writeText(each.SMILES);
                                                    alert("Copied the text ");}                                                    
                                                }>copy SMILES</button></tr>
                                            </table>
                                        </TableCell>
                                        <TableCell>
                                            <table>
                                                <tr>calc log p : {(each.CalcLogP).toFixed(2)}</tr>
                                                <tr>Lipinkski : {each.Lipinski}</tr>
                                                <tr>Molecule weight: {(each.Mol_Wt).toFixed(2)}</tr>
                                                <tr>QED : {(each.QED).toFixed(2)}</tr>
                                                <tr>SA : {(each.SA).toFixed(2)}</tr>
                                                <tr>Stereo Centers : {each.StereoCenters} </tr>
                                                <tr>nHA : {each.nHA}</tr>
                                                <tr>nHD: {each.nHD}</tr>
                                            </table>
                                        </TableCell>
                                    </TableRow>
        )})
        )
            }

    return (
        <>
        <Paper>
        <Card>
        <grid>
                    <Fab variant="extended" sx={{ mb: 2 }} onClick={()=>{
                        //history.push("/dashboard")
                        //history.back()
                        navigate(-1)
                    }} style={{margin:'10px'}}>
                        <ArrowBack />
                    </Fab>
                    <div className='react-bob'>
                        <p>    <span>Reactants :</span> <button onClick={()=>{navigator.clipboard.writeText(ReactantSmile);
                                                            alert("Copied the text ");}                                                    
                                                        }>copy SMILES</button> <br/>   <span>image :</span></p>
                        <img className='reactant-image' src={smile} alt="altern imag"/>
                    </div>
                </grid>
            
        
        <Divider/>
        <CardContent>
            <Grid container>
                <Grid item xl='12' md='12' sm='12'>
                    <Paper elevation={4}>
                            <Table sx={{ minWidth: 700 }} style={{borderTopRightRadius:'0px',borderTopLeftRadius:'0px'}} aria-label="customized table">
                                <TableHead>
                                    <TableRow>
                                        <StyledTableCell>Sno</StyledTableCell>
                                        <StyledTableCell>Structure</StyledTableCell>
                                        <StyledTableCell>Smiles</StyledTableCell>
                                        <StyledTableCell>Properties</StyledTableCell>
                                    </TableRow>
                                </TableHead>
                                    <DataTable />
                                <TableBody>
                                    
                                </TableBody>
                            </Table>
                    </Paper>
                </Grid>
            </Grid>
            </CardContent>
            </Card>
            </Paper>
        </>
    );
}
