const Colours = () => {
    return (
        <>
            <h1 className="hover:text-green-700 hover:cursor-pointer text-green-900">
                text-green-900 and when we hover it lightens up
            </h1>
            <h1 className="text-yellow-800">
                text-yellow-800
            </h1>
            <h1 className="bg-slate-600 text-white">
                Background colour
            </h1>
            <h2 className="border-4 border-green-700">
                Applying border
            </h2>
            <br />
            <h2 className="border-8 border-y-0 border-x-green-800">
                border x
            </h2>
            <br />
            <h2 className="border-8 border-x-0 border-y-green-800">
                border y
            </h2>
            <br />
            <h2 className="bg-peachy-orange-100 hover:bg-peachy-orange-300 hover:cursor-pointer">
                Color that i added through tailwind.config.js file
            </h2>
        </>
    )
}

export default Colours
