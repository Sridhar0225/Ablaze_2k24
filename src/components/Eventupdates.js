import React,{useState,useEffect} from "react"
import styles from '../App.module.css';
import axios from 'axios';
import CircularProgress from '@mui/material/CircularProgress';

function Eventupdates(){
    const[eventupdates,seteventupdates]=useState([]);
    const[eventload,setevents]=useState(true);
    const callapi=()=>{
         axios("").then(response=>{
            if(response.status===302){
                var redirectedUrl = response.headers.get("Location");
                if (redirectedUrl){
                return fetch(redirectedUrl); 
                }
            }
            setevents(false);
            return seteventupdates(response.data);
        })   
    }
    useEffect(()=>{
        callapi();
        setInterval(()=>{
           callapi();
        },20000);
    },[]);
    
    return (
    <div className={styles.eventsupdate}>
        <h2>Event Updates</h2>
        {(eventload)?<div className={styles.loading}><CircularProgress color="primary"/><p>Hold On We are Loading For You</p></div>:
            eventupdates.map((data,i)=>{
                return(
                    <div key={i} className={styles.EventUpdateCard}>
                        {(i==0)?<div className={styles.latestmessage}>Latest Message</div>:""}
                        <h1>{data.Name}</h1>
                        <p className={styles.Description}>{data.Description}</p>
                        {(data.EventTime)?<p><span>Assemble At&nbsp;&nbsp;&nbsp; : </span>{data.EventTime} | {data.Venue}</p>:""}
                        {/* <p><span>Venue&nbsp; : </span>{data.Venue}</p> */}
                        <span className={styles.posttime}>{data.OrganizerName } | {data.PostingDate} <span className={styles.ptime}>{data.PostingTime}</span></span>
                    </div>
                )})
        }
    </div>
  )
}
export default React.memo(Eventupdates);
