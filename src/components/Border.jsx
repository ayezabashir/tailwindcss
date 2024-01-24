const Border = () => {
    return (
        <>
            <div>
                <header className="w-full border-8">Header</header>
                <br />
                <div className="border-b-2 border-l-8">Border on bottom</div>
                <br />
                {/* Divide kind of work like border as well */}
                <div className="divide-y divide-red-600">
                    <div>01</div>
                    <div>02</div>
                    <div>03</div>
                </div>
                <br />
                <div className=" grid grid-cols-3 divide-x-8 divide-dotted divide-red-100">
                    <div>01</div>
                    <div>02</div>
                    <div>03</div>
                </div>
                <br />
                {/* border on input feild */}
                <div>
                    <input type="text" className="border-2 border-dashed border-rose-400 outline-none" />
                </div>
                <br />
                {/* Outlines and Ring: for creating outline rings with box-shadow  */}
                <button className="outline-double outline-offset-2 outline-cyan-300 ring ring-rose-400">Button C</button>
                <br />
            </div>
        </>
    )
}

export default Border
