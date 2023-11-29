
export default function Income(){

	return (
		<div className="w-full h-full flex justify-center items-center">
			<div className="flex max-sm:flex-col justify-center gap-5">
				<div className="w-[300px] h-[300px] rounded-[10px] border-[8px] border-secondary flex justify-center items-center mx-auto" >
					<div className="flex flex-col items-center gap-4">
						<h1>Income(Month)</h1>
						<div className= "flex justify-center items-center w-[200px] h-[200px] rounded-full border-primary border-solid border-[10px]">
							<p>1000 บาท</p>
						</div>
					</div>
				</div>
				<div className="w-[300px] h-[300px] rounded-[10px] border-[8px] border-secondary flex justify-center items-center mx-auto">
					<div className="flex flex-col items-center gap-4">
						<h1>Saving(Month)</h1>
							<div className= "flex justify-center items-center w-[200px] h-[200px] rounded-full border-primary border-solid border-[10px]">
							<p>1000 บาท</p>
						</div>
					</div>
				</div>
			</div>

		</div>
	)
}