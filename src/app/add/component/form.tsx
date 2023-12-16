"use client"
import { FaEdit,FaSave  } from "react-icons/fa";
import { VscDebugRestart } from "react-icons/vsc";
import React from 'react'
import { useState } from "react";

interface FormProps {
	cate : string;
	x? : number;
	setX : React.Dispatch<React.SetStateAction<number>>;
	reset : undefined | number;
}


export default function Form({cate,x,setX,reset} : FormProps) {

	const [canEdit,setCanEdit] = useState<boolean>(false);

	return (
		<div>
			<div>
			<h1>{cate}</h1>
				<div className='flex w-full gap-[50px] items-center'>
					<input type="number" placeholder="Type here" value={x} onChange={(e) => {setX(parseInt(e.target.value))	}}
					className="input input-bordered w-full max-w-xs m-r " 
					disabled = {!canEdit}
					/>
					<FaEdit	onClick = {() => setCanEdit(true)} className = " hover:cursor-pointer hover:fill-yellow-600 w-[40px]"/>
					<FaSave	onClick = {() => setCanEdit(false)} className = " hover:cursor-pointer hover:fill-green-600 w-[40px]"/>
					<VscDebugRestart onClick = {
						() => {
							if(reset != undefined){
								setX(reset);
							}
						}
					}
					className = " hover:cursor-pointer hover:fill-red-600 w-[40px]"
					/>
				</div>
			</div>
		</div>
	)
}