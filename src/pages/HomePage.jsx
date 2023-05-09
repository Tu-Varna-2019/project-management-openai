import React from 'react'
import '@aws-amplify/ui-react/styles.css';
import { HomeV2,HomeV2Mobile,NotetitlebuttonCollection } from "../ui-components";
import { HomeOverrideFunc } from '../overrides/HomeOverride';
import '@aws-amplify/ui-react/styles.css';


export default function HomePage(props) {

  const {
    HomeOverride,
    HomeNoteCollectionOverride,
    customOverrideItems
  } = HomeOverrideFunc();

  const isMobileDevice = window.matchMedia('(max-width: 768px)').matches;
  console.log(isMobileDevice);

    return (  
        <>
        <div 
          style={{ height:"900px", position:'relative',display: 'inline-block',overflow: "hidden"}}>
        {isMobileDevice ? <HomeV2Mobile overrides={HomeOverride}/> :<HomeV2 overrides={HomeOverride}/> }
    </div><div style={{ position: 'relative' , display: 'block',top: "-10px",left: "100px",objectFit: "cover"}}>
    <NotetitlebuttonCollection
    style={{position: 'absolute', bottom: 160, right: 180 }}
    overrides={HomeNoteCollectionOverride}
overrideItems={customOverrideItems}/></div></>);}