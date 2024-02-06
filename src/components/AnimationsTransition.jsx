const AnimationsTransition = () => {
    return (
        <>
            <div className="inline-block  p-4 text-black bg-white border rounded-lg">
                <h1 className="text-2xl">Hello</h1>
                <p className="mb-4">This is a pragraph</p>
                <img className="w-[50%] transition skew-x-6 hover:rotate-45 origin-top-right" src="https://avatars.githubusercontent.com/u/115556300?v=4" alt="" />
                <button className="transition delay-1000 duration-1000 hover:-translate-y-1 px-3 py-2 rounded-lg cursor-pointer shadow-md shadow-cyan-500 bg-cyan-400">
                    Say Hello
                </button>
                <br /><br />
                <button className="animate-spin px-3 py-2 rounded-lg cursor-pointer shadow-md shadow-cyan-500 bg-cyan-400">
                    Spining
                </button>
                <br /><br />
                {/* Ping is used for notificaion ping mostly */}
                <button className="animate-ping px-3 py-2 rounded-lg cursor-pointer shadow-md shadow-cyan-500 bg-cyan-400">
                    Ping
                </button>
                <br /><br />
                <button className="animate-pulse px-3 py-2 rounded-lg cursor-pointer shadow-md shadow-cyan-500 bg-cyan-400">
                    Pulse
                </button>
            </div>
        </>
    )
}

export default AnimationsTransition
