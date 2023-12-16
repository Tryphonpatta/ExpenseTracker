"use client"
import moment from 'moment'
import React,{ChangeEvent, useState,useEffect} from 'react'
import Status from './component/status';
import axios from 'axios';

export default function Add() {
    const date:string = moment().format('DD-MM-YYYY'); 
    const [cate,setCate] = useState<string>("food");
    const [value,setValue] = useState<string>("0");
    const [refresh,setRefresh] = useState<boolean>(false);
    const handleCategoryChange = (e : ChangeEvent<HTMLSelectElement>) => {
        setCate(e.target.value);
    };


	return (
		<div className="h-screen w-screen">
			<h1>add</h1>
            <h1>Today : {date}</h1>
            <div className="flex justify-center w-screen">
                <Status date = {date}/>

            </div>
		</div>
	)
}
