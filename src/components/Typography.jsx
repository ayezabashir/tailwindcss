const Typography = () => {
    return (
        <>
            <h1 className="text-5xl underline decoration-purple-500 decoration-wavy">Typography Title 1</h1>
            <h2 className="text-2xl underline decoration-fuchsia-600 decoration-double underline-offset-8">Typography Title 2</h2>
            <h3 className="text-xl line-through decoration-red-700">Typography Title 3</h3>
            <p className="text-base">A regular typography paragraph</p>
            <p className="text-sm italic">A descriptive typography paragraph</p>
            <p className="text-xs overline capitalize note">A little typography Note</p>
            <p style={{ width: '400px' }} className="truncate">this is a very long sentence that will explain what truncate is and will truncate this line. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet, adipisci!</p>
            <br /><br />
        </>
    )
}

export default Typography
