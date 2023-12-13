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

    const updateData = async () => {
        console.log(cate);
        console.log(value);
        const response = await axios.post('http://localhost:8000/fixexpense',{
            date : date,
            cate : cate,
            value : parseInt(value)
        });
        setRefresh(!refresh);
    }

	return (
		<div className="h-screen w-screen">
			<h1>add</h1>
            <h1>Today : {date}</h1>
            <div className="flex flex-col gap-3">
                <div>
                    <div className="flex items-center gap-2">
                        <h1>Text : </h1>
                        <select onChange={handleCategoryChange} value={cate} className="select select-bordered w-full max-w-xs">
                            <option value="food">food & beverage</option>
                            <option value="travel">Travel </option>
                            <option value="etc">Etc. </option>
                        </select>
                    </div>
                    <div className="flex items-center gap-2">
                        <h1>Cost : </h1>
                        <input type="number" placeholder="Type here" value={value} onChange={(e) => {setValue(e.target.value)}} className="input input-bordered w-full max-w-xs m-r" />
                    </div>
                </div>
                <Status date = {date} refresh = {refresh}/>
                <button className="btn btn-success" onClick={updateData}>Submit</button>

            </div>
		</div>
	)
}
