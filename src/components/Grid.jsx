const Grid = () => {
    return (
        <>
            <div className="text-white bg-slate-900">
                <div className="container mx-auto">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                        <div className="bg-sky-500 p-3 rounded-lg">First col</div>
                        <div className="bg-sky-600 p-3 rounded-lg">Second col</div>
                        <div className="bg-sky-700 p-3 rounded-lg">Third col</div>
                        <div className="bg-sky-800 p-3 rounded-lg col-span-2">Fourth col</div>
                        <div className="bg-sky-900 p-3 rounded-lg">Fifth col</div>
                        <div className="bg-sky-200 p-3 rounded-lg">Sixth col</div>
                        <div className="bg-sky-300 p-3 rounded-lg col-span-2">Seventh col</div>
                    </div>
                    <hr />
                    <hr />
                    {/* col-start-[value] and col-end-[value] */}
                    <div className="mt-4 grid grid-cols-6 gap-4">
                        <div className="bg-purple-500 p-3 rounded-lg col-span-4 col-start-3">First col</div>
                        <div className="bg-purple-600 p-3 rounded-lg col-span-4 col-start-1 col-end-4">Second col</div>
                        <div className="bg-purple-700 p-3 rounded-lg col-end-7">Third col</div>
                        <div className="bg-purple-800 p-3 rounded-lg col-span-4">Fourth col</div>
                    </div>
                    {/* automatic col sizing */}
                    <div className="mt-4 grid grid-flow-col auto-cols-max">
                        <div className="bg-red-500 p-3 rounded-lg col-span-4 col-start-3">First col</div>
                        <div className="bg-red-600 p-3 rounded-lg col-span-4 col-start-1 col-end-4">Second col</div>
                        <div className="bg-red-700 p-3 rounded-lg col-end-7">Third col</div>
                    </div>
                    {/* grid template rows */}
                    <div className="grid grid-rows-5 grid-flow-col gap-4">
                        <div className="bg-sky-500 p-3 rounded-lg">First col</div>
                        <div className="bg-sky-600 p-3 rounded-lg">Second col</div>
                        <div className="bg-sky-700 p-3 rounded-lg">Third col</div>
                        <div className="bg-sky-800 p-3 rounded-lg">Fourth col</div>
                        <div className="bg-sky-900 p-3 rounded-lg">Fifth col</div>
                        <div className="bg-sky-200 p-3 rounded-lg">Sixth col</div>
                        <div className="bg-sky-300 p-3 rounded-lg">Seventh col</div>
                    </div>
                    {/* row start and end */}
                    <div className="mt-4 grid grid-rows-2 grid-flow-col gap-4">
                        <div className="bg-purple-500 p-3 rounded-lg row-span-2">First col</div>
                        <div className="bg-purple-600 p-3 rounded-lg">Second col</div>
                        <div className="bg-purple-700 p-3 rounded-lg">Third col</div>
                        <div className="bg-purple-800 p-3 rounded-lg row-span-2">Fourth col</div>
                    </div>
                    <br />
                    {/* grid auto flow */}
                    <div className="grid grid-flow-row-dense grid-cols-3 grid-rows-3 gap-2 ">
                        <div className="bg-orange-500 p-3 rounded-lg col-span-2">First col</div>
                        <div className="bg-orange-600 p-3 rounded-lg col-span-2">Second col</div>
                        <div className="bg-orange-700 p-3 rounded-lg">Third col</div>
                        <div className="bg-orange-800 p-3 rounded-lg">Fourth col</div>
                        <div className="bg-orange-900 p-3 rounded-lg">Fifth col</div>
                        <div className="bg-orange-200 p-3 rounded-lg col-span-2">Sixth col</div>
                        <div className="bg-orange-300 p-3 rounded-lg">Seventh col</div>
                        <div className="bg-orange-700 p-3 rounded-lg">Eighth col</div>
                        <div className="bg-orange-800 p-3 rounded-lg">Ninth col</div>
                        <div className="bg-orange-900 p-3 rounded-lg col-span-2">Tenth col</div>
                        <div className="bg-orange-200 p-3 rounded-lg">eleventh col</div>
                        <div className="bg-orange-300 p-3 rounded-lg">twelevth col</div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Grid
