import moment from 'moment'
export default function Add() {
    moment().format("MM/DD/YYYY");

	return (
		<div className="h-screen w-screen">
			<h1>add</h1>
            <h1>{Date()}</h1>
            <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2">
                    <h1>Text : </h1>
                    <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs m-r" />
                </div>
                <div className="flex items-center gap-2">
                    <h1>Cost : </h1>
                    <input type="number" placeholder="Type here" className="input input-bordered w-full max-w-xs m-r" />
                </div>
                <button className="btn btn-success">Submit</button>

            </div>
		</div>
	)
}
