import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import MobileNav from './components/MobileNav';
import SideBar from './components/SideBar';
import axios from 'axios';
import { Bar, Pie } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const AnalysisScreen = () => {

    const [userGender, setUserGender] = useState({datasets: [{}]});

    const [userLoation, setUserLocation] = useState({datasets: [{}]});
    
    const [voteGender, setVoteGender] = useState({datasets: [{}]});

    const [voteLoation, setVoteLocation] = useState({datasets: [{}]});
    
    const [voteCount, setVoteCount] = useState({});
   
   useEffect(() => {
     
        axios.get(`http://localhost:5000/api/admin/analysis/voteCount`)
        .then((res) => {
            setVoteCount(res.data.vote)
        })
        .catch((err) => {
            console.log(err)
        })
        
    }, [])
    
    console.log(voteCount)

    useEffect(() => {
     
        axios.get(`http://localhost:5000/api/admin/analysis/userGender`)
        .then((res) => {
            setUserGender({
                labels: ['MALE', 'FEMALE'],
                datasets:[{
                    label: "USER GENDER",
                    data: [res.data.user.male, res.data.user.female],
                    backgroundColor: [
                        "#d62828",
                        "#003049",
                    ],
                    borderColor: "#f4f4f4",
                    borderWidth: 2,
                }]
            })
        })
        .catch((err) => {
            console.log(err)
        })
        
    }, [])
  


    useEffect(() => {
     
        axios.get(`http://localhost:5000/api/admin/analysis/userLocation`)
        .then((res) => {
            setUserLocation({
                labels: Object.keys(res.data),
                datasets:[{
                    label: "USER LOCATION",
                     data: Object.values(res.data),
                     backgroundColor: [
                         "#264653",
                        "#2a9d8f",
                        "#e9c46a",
                        "#f4a261",
                        "#e76f51",
                        "#22223b",
                        "#4a4e69",
                        "#bc6c25",
                        "#dda15e",
                        "#606c38",
                        "#283618",
                        "#003049",
                        "#d62828",
                        "#f77f00",
                        "#2f3e46",
                        "#354f52",
                        "#52796f",
                        "#219ebc",
                        "#344e41",
                        "#3a5a40",
                        "#457b9d",
                        "#000000",
                        "#14213d",
                        "#006d77",
                        "#83c5be",
                        "#ee6c4d",
                        "#293241",
                        "#5e548e",
                        "#2b2d42",
                        "#9d0208",
                        "#0a9396",
                        "#005f73",
                        "#ca6702",
                        "#bc4749",
                        "#f7b538",
                        "#db7c26",
                        "#d8572a",
                        "#c32f27",
                     ],
                     borderColor: "#f4f4f4",
                     borderWidth: 2,
                 }]
            })

            // console.log(Object.values(res.data));
        })
        .catch((err) => {
            console.log(err)
        })
        
    }, [])
    
    
    
    useEffect(() => {
     
        axios.get(`http://localhost:5000/api/admin/analysis/voteGender`)
        .then((res) => {
            setVoteGender({
                labels: ['MALE', 'FEMALE'],
                datasets:[{
                    label: "VOTE GENDER",
                    data: [res.data.user.male, res.data.user.female],
                    backgroundColor: [
                        "#2a9d8f",
                        "#e9c46a",
                    ],
                    borderColor: "#f4f4f4",
                    borderWidth: 2,
                }]
            })
        })
        .catch((err) => {
            console.log(err)
        })
        
    }, [])
  


    useEffect(() => {
     
        axios.get(`http://localhost:5000/api/admin/analysis/voteLocation`)
        .then((res) => {
            setVoteLocation({
                labels: Object.keys(res.data),
                datasets:[{
                    label: "VOTE LOCATION",
                     data: Object.values(res.data),
                     backgroundColor: [
                         "#264653",
                        "#2a9d8f",
                        "#e9c46a",
                        "#f4a261",
                        "#e76f51",
                        "#22223b",
                        "#4a4e69",
                        "#bc6c25",
                        "#dda15e",
                        "#606c38",
                        "#283618",
                        "#003049",
                        "#d62828",
                        "#f77f00",
                        "#2f3e46",
                        "#354f52",
                        "#52796f",
                        "#219ebc",
                        "#344e41",
                        "#3a5a40",
                        "#457b9d",
                        "#000000",
                        "#14213d",
                        "#006d77",
                        "#83c5be",
                        "#ee6c4d",
                        "#293241",
                        "#5e548e",
                        "#2b2d42",
                        "#9d0208",
                        "#0a9396",
                        "#005f73",
                        "#ca6702",
                        "#bc4749",
                        "#f7b538",
                        "#db7c26",
                        "#d8572a",
                        "#c32f27",
                     ],
                     borderColor: "#f4f4f4",
                     borderWidth: 2,
                 }]
            })

            // console.log(Object.values(res.data));
        })
        .catch((err) => {
            console.log(err)
        })
        
    }, [])
  
  

    return (
        <div className='bg-gray-100 min-h-screen'>
            <SideBar />
            <MobileNav />
            <Header />
            <div className='md:ml-72 px-4'>
                <div className='my-5'>
                
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mb-10'>
                     
                        <div className='lg:w-96 w-full shadow rounded p-4 bg-white'>
                            <div className='mb-3 text-[#ca6702] font-medium text-3xl'>Hand</div>
                            <div className='font-medium text-2xl'>+{voteCount.hand}</div>
                        </div>
                        
                        <div className='lg:w-96 w-full shadow rounded p-4 bg-white'>
                            <div className='mb-3 text-[#bc4749] font-medium text-3xl'>Leaf</div>
                            <div className='font-medium text-2xl'>+{voteCount.leaf}</div>
                        </div>
                    </div>
                    
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mb-10'>
                      
                        <div className='lg:w-96 w-full shadow rounded p-4 bg-white'>
                            <div className='mb-3'>USER GENDER ANALYSIS</div>
                            <Pie data={userGender} /> 
                        </div>
                        
                        <div className='lg:w-96 w-full shadow rounded p-4 bg-white'>
                            <div className='mb-3'>VOTE GENDER ANALYSIS</div>
                            <Pie data={voteGender} /> 
                        </div>
                    </div>
                    
                      <div className='w-full shadow rounded p-4 bg-white mb-10'>
                            <div className='mb-3'>USER LOCATION ANALYSIS</div>
                            <Bar data={userLoation} /> 
                        </div>
                        
                        <div className='w-full shadow rounded p-4 bg-white'>
                            <div className='mb-3'>VOTE LOCATION ANALYSIS</div>
                            <Bar data={voteLoation} /> 
                        </div>
                </div>
            </div>
        </div>
    )
}


export default AnalysisScreen;
