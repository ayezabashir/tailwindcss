const Flex = () => {
    return (
        <>
            {/* Flex */}
            <div className="w-full flex flex-row-reverse">
                <div className="bg-black text-white w-1/2">Main Content</div>
                <div className="bg-white text-black w-1/2">Sidebar</div>
            </div>
            {/* Flex Grow */}
            <div className="flex mt-4">
                <div className="bg-blue-200 p-2 flex-none">without flex grow</div>
                <div className="bg-blue-500 p-2 flex-grow">with flex grow</div>
                <div className="bg-blue-900 p-2 flex-none">without flex grow</div>
            </div>
            {/* Flex Basis */}
            <div className="flex w-full mt-4">
                <div className="w-1/3 h-6 bg-blue-900"></div>
                <div className="basis-2/3 hover:basis-1/3 h-6 bg-blue-400"></div>
            </div>
            {/* Flex Wrap */}
            <div className="flex flex-wrap w-full">
                <div className="w-32">01</div>
                <div className="w-32">02</div>
                <div className="w-32">03</div>
                <div className="w-32">04</div>
                <div className="w-32">05</div>
                <div className="w-32">06</div>
            </div>
        </>
    )
}

export default Flex
