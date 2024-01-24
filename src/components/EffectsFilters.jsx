const EffectsFilters = () => {
    return (
        <div className="h-screen p-4">
            <div className="inline-block shadow-xl shadow-red-600 p-4 text-black bg-white border rounded-lg">
                <h1 className="text-2xl">Hello</h1>
                <p className="mb-4">This is a pragraph</p>
                <button className="px-3 py-2 rounded-lg cursor-pointer shadow-md shadow-cyan-500 bg-cyan-400">
                    Say Hello
                </button>
            </div>
            {/* filters */}
            <br /> <br />
            <div className="inline-block shadow-xl shadow-red-600 p-4 text-black bg-white border rounded-lg">
                <img className="w-[50%] hover:blur-sm" src="https://avatars.githubusercontent.com/u/115556300?v=4" alt="" />
                <img className="w-[50%] hover:grayscale brightness-125" src="https://avatars.githubusercontent.com/u/115556300?v=4" alt="" />
                <img className="w-[50%] hover:hue-rotate-30 brightness-50" src="https://avatars.githubusercontent.com/u/115556300?v=4" alt="" />
                <img className="w-[50%] invert hover:saturate-150" src="https://avatars.githubusercontent.com/u/115556300?v=4" alt="" />
                <img className="w-[50%] sepia hover:sepia-0" src="https://avatars.githubusercontent.com/u/115556300?v=4" alt="" />

                <button className="px-3 py-2 rounded-lg cursor-pointer shadow-md shadow-cyan-500 bg-cyan-400">
                    Say Hello
                </button>
            </div>
        </div>
    )
}

export default EffectsFilters
