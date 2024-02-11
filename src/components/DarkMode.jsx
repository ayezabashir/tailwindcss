const DarkMode = () => {
    return (
        <div className="p-4 bg-white text-black dark:bg-slate-900 dark:text-white">
            {/* sb sy pehly tailwind.config.js file me add krni hai 
            dark mode ki class, or app.jsx me add krni hai class "dark" */}
            <h1>This is a title</h1>
            <h2>This is subtitle</h2>
            <p>This is a paragraph</p>
            <a href="#">This is an anchor</a>
            <div className="my-4">
                <button className="btn btn-primary">Primary button</button>
            </div>
        </div>

    )
}

export default DarkMode
