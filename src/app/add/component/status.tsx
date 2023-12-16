"use client"
import React,{useState,useEffect} from 'react'
import Form from './form';
import axios from 'axios';
import { set } from 'mongoose';
interface Status {
	food : number;
	travel : number;
	etc : number;
}

interface StatusProps {
	date : string;

}

export default function Status({date} : StatusProps) {
	const [status,setStatus] = useState<Status>();
	const [food,setFood] = useState<number>(0);
	const [travel,setTravel] = useState<number>(0);
	const [etc,setEtc] = useState<number>(0);
	const [loading,setLoading] = useState<boolean>(true);
	const getdata = async () => {
		setLoading(true);
		const res = await fetch(`http://127.0.0.1:8000/getexpense/${date}`);
		const data = await res.json();
		// setStatus(data);
		console.log(data);
		setStatus(data);
		setFood(data.food);
		setTravel(data.travel);
		setEtc(data.etc);
		setLoading(false);
		return data;
	}

	const updateData = (x : number,setX : React.Dispatch<React.SetStateAction<number>> , delta:number) => {
		setX(x+delta);
	}
	const postData = async () => {
        const response = await axios.post('http://localhost:8000/fixexpense',{
            date : date,
            food : food,
            travel : travel,
			etc : etc
        });
    }

	useEffect(() => {
		getdata();
	},[])

	return (
		<div className="flex flex-col gap-3">
			{loading && 
				<div className='absolute top-0 left-0 w-screen h-screen bg-gray-600 opacity-40 flex justify-center items-center'>Loading...</div>
			}
			<h1 className= "text-center">status</h1>
			<div>
				<Form cate = {"food"} x = {food} setX = {setFood} reset = {status?.food}/>
			</div>
			<div>
				<Form cate = {"travel"} x = {travel} setX = {setTravel} reset = {status?.travel}/>
			</div>
			<div>
				<Form cate = {"etc"} x = {etc} setX = {setEtc} reset = {status?.etc}/>
			</div>
			<button className="btn btn-success" onClick={postData}>Submit</button>
		</div>
		
	)
}