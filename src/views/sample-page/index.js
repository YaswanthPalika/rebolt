// material-ui
import { Typography } from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import { StandaloneStructServiceProvider } from "ketcher-standalone";
import { Editor } from "ketcher-react";
import "ketcher-react/dist/index.css";
import Miew from "miew";
// ==============================|| SAMPLE PAGE ||============================== //
window.Miew = Miew;

const structServiceProvider = new StandaloneStructServiceProvider();
var template = "template_based"
var token
const KetcherApp = ()=>{
    return <>
            <Editor
                    staticResourcesUrl={""}
                    structServiceProvider={structServiceProvider}
                    onInit={(k)=>{
                    //console.log("hello")
                    window.ketcher = k
                    }}  
                        onSelectionChange={(k)=>{
                                console.log("onSelectionChange")
                                }} 
                        onElementEdit={(k)=>{
                                console.log("onElementEdit")
                                }} 
                        onEnhancedStereoEdit={(k)=>{
                                console.log("onEnhancedStereoEdit")
                                }} 
                        onQuickEdit={(k)=>{
                                console.log("onQuickEdit")
                                }} 
                        onBondEdit={(k)=>{
                                console.log("onBondEdit")
                                }} 
                        onRgroupEdit={(k)=>{
                                console.log("onRgroupEdit")
                                }} 
                        onSgroupEdit={(k)=>{
                                console.log("onSgroupEdit")
                                }} 
                        onSdataEdit={(k)=>{
                                console.log("onSdataEdit")
                                }} 
                        onRemoveFG={(k)=>{
                                console.log("onRemoveFG")
                                }} 
                        onMessage={(k)=>{
                                console.log("onMessage")
                                }} 
                        onAromatizeStruct={(k)=>{
                                console.log("onAromatizeStruct")
                                }} 
                        onDearomatizeStruct={(k)=>{
                                console.log("onDearomatizeStruct")
                                }} 
                        onAttachEdit={(k)=>{
                                console.log("onAttachEdit")
                                }} 
                        onCipChange={(k)=>{
                                console.log("onCipChange")
                                }} 
                        onConfirm={(k)=>{
                                console.log("onConfirm")
                                }} 
                            />
    </>
}


const SamplePage = () => (
    <>
        <KetcherApp />
        <button>sumbmit</button>
    </>
);

export default SamplePage;
