
export default function Totalspend(){

	return (
		<div className="w-full h-full flex justify-center items-center">
			<div className="flex max-sm:flex-col justify-center gap-5">
				<div className="w-[300px] h-[300px] rounded-[10px] border-[8px] border-secondary flex justify-center items-center mx-auto" >
					<div className="flex flex-col items-center gap-4">
						<h1>Total Spend(Month)</h1>
						<div className= "flex justify-center items-center w-[200px] h-[200px] rounded-full border-primary border-solid border-[10px]">
							<p>1000 บาท</p>
						</div>
					</div>
				</div>
				<div className="w-[300px] h-[300px] rounded-[10px] border-[8px] border-secondary flex justify-center items-center mx-auto">
					<div className="flex flex-col h-full justify-center">
					<div className="flex justify-between mb-10 pl-5 pr-5">
						<h1 className="w-fit">food & beverage: </h1>
						<div className="flex ml-10 w-fit">
						<h1 className="mr-2">200 </h1><h1>บาท</h1>
						</div>
					</div>
					<div className="flex justify-between mb-10 pl-5 pr-5">
						<h1 className="w-fit">Travel :</h1>
						<div className="flex w-fit">
						<h1 className="mr-2">200 </h1><h1>บาท</h1>
						</div>
					</div>
					<div className="flex justify-between pl-5 pr-5">
						<h1 className="w-fit">Etc. :</h1>
						<div className="flex w-fit">
						<h1 className="mr-2">200 </h1><h1>บาท</h1>
						</div>
					</div>
					</div>
					

				</div>
			</div>

		</div>
	)
}