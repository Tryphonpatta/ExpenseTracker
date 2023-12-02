"use client"
import moment from 'moment'
import React,{ChangeEvent, useState,useEffect} from 'react'
import Status from './component/status';

export default function Add() {
    const date:string = moment().format('DD-MM-YYYY'); 
    const [cate,setCate] = useState<string>("select categories");

    const handleCategoryChange = (e : ChangeEvent<HTMLSelectElement>) => {
        setCate(e.target.value);
    };

	return (
		<div className="h-screen w-screen">
			<h1>add</h1>
            <h1>Today : {date}</h1>
            <div className="flex flex-col gap-3">
                <div>
                    <div className="flex items-center gap-2">
                        <h1>Text : </h1>
                        <select onChange={handleCategoryChange} value={cate} className="select select-bordered w-full max-w-xs">
                            <option value="food & beverage">food & beverage</option>
                            <option value="Travel">Travel </option>
                            <option value="Etc.">Etc. </option>
                        </select>
                    </div>
                    <div className="flex items-center gap-2">
                        <h1>Cost : </h1>
                        <input type="number" placeholder="Type here" className="input input-bordered w-full max-w-xs m-r" />
                    </div>
                </div>
                <Status date = {date}/>
                <button className="btn btn-success">Submit</button>

            </div>
		</div>
	)
}
