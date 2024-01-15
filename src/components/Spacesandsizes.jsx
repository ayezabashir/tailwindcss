const Spacesandsizes = () => {
    return (
        <>
            <div className="bg-lime-300 px-2 py-4">
                Lorem ipsum dolor sit.
            </div>
            <div className="bg-slate-500 ml-4 mt-3">
                Lorem, ipsum.
            </div>
            <div className="-mt-2">
                we can use margin in negative too
            </div>
            <br />
            explaining space between
            <div className="flex space-x-4">
                <div className="h-6 w-1/3 bg-black text-white p-2">01</div>
                <div className="h-6 w-1/3 bg-slate-300 p-2">02</div>
                <div className="h-6 w-1/3 bg-slate-800 p-2">03</div>
            </div>
            <div className="w-full flex">
                <div className="w-1/2 min-w-min bg-red-500"></div>
                <div className="w-1/2 h-16 bg-green-900"></div>
            </div>
            <br /><br />
        </>
    )
}

export default Spacesandsizes
