"use client"
import moment from 'moment'
import { set } from 'mongoose';
import { useState,useEffect, use } from 'react';

export default function Totalspend(){
	const [total,setTotal] = useState<number>(0);
	const [food,setFood] = useState<number>(0);
	const [travel,setTravel] = useState<number>(0);	
	const [etc,setEtc] = useState<number>(0);
	const [loading,setLoading] = useState<boolean>(false);

	const getdata = async () => {
		setLoading(true);
		const date:string = moment().format('MM-YYYY'); 
		const res = await fetch(`http://localhost:8000/expense/${date}`);
		const data = await res.json();
		var total =0,food = 0,travel = 0,etc = 0;
		for(let i =0;i<data.length;i++){
			food += data[i].food;
			travel += data[i].travel;
			etc += data[i].etc;
			total += data[i].food + data[i].travel + data[i].etc;
		}
		setTotal(total);
		setFood(food);
		setTravel(travel);
		setEtc(etc);
		setLoading(false);
	}
	useEffect(()=>{
		getdata();
	},[])

	return (
		<div className="w-full h-full flex justify-center items-center">
			{loading && 
				<div className='absolute top-0 left-0 w-screen h-screen bg-gray-600 opacity-40 flex justify-center items-center'>Loading...</div>
			}
			<div className="flex max-sm:flex-col justify-center gap-5">
				<div className="w-[300px] h-[300px] rounded-[10px] border-[8px] border-secondary flex justify-center items-center mx-auto" >
					<div className="flex flex-col items-center gap-4">
						<h1>Total Spend(Month)</h1>
						<div className= "flex justify-center items-center w-[200px] h-[200px] rounded-full border-primary border-solid border-[10px]">
							<p>{total} บาท</p>
						</div>
					</div>
				</div>
				<div className="w-[300px] h-[300px] rounded-[10px] border-[8px] border-secondary flex justify-center items-center mx-auto">
					<div className="flex flex-col h-full justify-center">
					<div className="flex justify-between mb-10 pl-5 pr-5">
						<h1 className="w-fit">food & beverage: </h1>
						<div className="flex ml-10 w-fit">
						<h1 className="mr-2">{food} </h1><h1>บาท</h1>
						</div>
					</div>
					<div className="flex justify-between mb-10 pl-5 pr-5">
						<h1 className="w-fit">Travel :</h1>
						<div className="flex w-fit">
						<h1 className="mr-2">{travel} </h1><h1>บาท</h1>
						</div>
					</div>
					<div className="flex justify-between pl-5 pr-5">
						<h1 className="w-fit">Etc. :</h1>
						<div className="flex w-fit">
						<h1 className="mr-2">{etc} </h1><h1>บาท</h1>
						</div>
					</div>
					</div>
				</div>
			</div>

		</div>
	)
}