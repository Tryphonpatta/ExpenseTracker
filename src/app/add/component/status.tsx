"use client"
import React,{useState,useEffect} from 'react'

interface Status {
	food : number;
	travel : number;
	etc : number;
}

interface StatusProps {
	date : string;
	refresh : boolean
}

export default function Status({date,refresh} : StatusProps) {
	const [status,setStatus] = useState<Status>();

	const getdata = async () => {
		const res = await fetch(`http://127.0.0.1:8000/getexpense/${date}`);
		const data = await res.json();
		// setStatus(data);
		console.log(data);
		setStatus(data);
		return data;
	}

	useEffect(() => {
		getdata();
	},[refresh])

	return (
		<div className="">
			<h1>status</h1>
			<h1>food : {status?.food}</h1>
			<h1>travel : {status?.travel}</h1>
			<h1>etc : {status?.etc}</h1>
		</div>
	)
}