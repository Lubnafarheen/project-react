import React, { useState } from 'react';
import axios from 'axios';
import AlertMessage from '../ex9-events/AlertMessage';

const Axios = () => {
    const API_URL = "http://localhost:8080/api/v1/person"; 
    const[people, setPeople] = useState([]);
    const[person, setPerson] = useState({});
    const[selectedId, setselectedId] = useState(1);
    
    const[alert, setAlert] = useState({type: '', message: ''});


    const getRequestAction = async () =>{
        console.log('start');
       await axios.get(API_URL).then(response =>{
            console.log("Response:", response);
            if(response.status === 200){
                setPerson(response.data);
                setAlert({type: 'success', message: 'Get operation by ID is successfully done!'})
            }else{
                setAlert({type: 'warning', message: 'API Error!'})
            }
        }).catch(error => {
            console.log("Error:", error);
            setAlert({type: 'danger', message: error.message})

        });

        console.log('end');
    }

    const getRequestByIdAction = async() =>{
        console.log('start');
        await axios.get(API_URL+'/'+ selectedId).then(response =>{
             console.log("Response:", response);
             if(response.status === 200){
                 setPeople(response.data);
                 setAlert({type: 'success', message: 'Get operation is successfully done!'})
             }else{
                 setAlert({type: 'warning', message: 'API Error!'})
             }
         }).catch(error => {
             console.log("Error:", error);
             setAlert({type: 'danger', message: error.message})
 
         });
 
         console.log('end');
 }

 const postRequestAction = async () => {

    const data = {firstName: 'test', lastName:'testsson', email: 'test@test.se', title: 'TEST'};
    await axios.post(API_URL, data).then(response => {
        console.log("RESPONSE:", response);
        if(response.status === 201){
            setPerson(response.data);
            setAlert({type: 'success', message: 'Post operation is done!'});
        } else {
            setAlert({type: 'warning', message: 'Display API Error Message...'});
        }

    }).catch( error => {
        console.log("ERROR: ", error);
        setAlert({type: 'danger', message: error.message});
    });
}

const putRequestAction = async () => {

    const data = {id:4,  firstName: 'testfal', lastName:'testsson', email: 'test@test.se', title: 'TEST'};
    await axios.put(API_URL, data).then(response => {
        console.log("RESPONSE:", response);
        if(response.status === 204){
            setPerson(response.data);
            setAlert({type: 'success', message: 'Put operation is done!'});
        } else {
            setAlert({type: 'warning', message: 'Display API Error Message...'});
        }

    }).catch( error => {
        console.log("ERROR: ", error);
        setAlert({type: 'danger', message: error.message});
    });
}

const deleteRequestAction = async() =>{
    console.log('start');
    await axios.delete(API_URL+'/'+ selectedId).then(response =>{
         console.log("Response:", response);
         if(response.status === 200){
             setPeople(response.data);
             setAlert({type: 'success', message: 'Delete operation is successfully done!'})
         }else{
             setAlert({type: 'warning', message: 'API Error!'})
         }
     }).catch(error => {
         console.log("Error:", error);
         setAlert({type: 'danger', message: error.message})

     });

     console.log('end');
}

    return (
        <div className='container pt-5'>
            <h3>Axios Demo</h3>
            <AlertMessage message={alert.message} type = {alert.type}/>
            <div className='row'>
                <div className='col'>
                    <button type='button' className='btn btn-info' onClick={getRequestAction}>Get</button>
                </div>
                 </div>
                 <br />
                 <div className='row'>
                 <div className='col'>
                    <button type='button' className='btn btn-primary' onClick={getRequestByIdAction}>Get by Id</button>
                </div>
                </div>
                <br />
                 <div className='row'>
                 <div className='col'>
                    <button type='button' className='btn btn-success' onClick={postRequestAction}>Post</button>
                </div>
                </div>
                <br />
                 <div className='row'>
                 <div className='col'>
                    <button type='button' className='btn btn-danger' onClick={putRequestAction}>Put</button>
                </div>
                </div>
                <br />
                 <div className='row'>
                 <div className='col'>
                    <button type='button' className='btn btn-dark' onClick={deleteRequestAction}>Delete</button>
                </div>
                </div>
        </div>
    );
};

export default Axios;