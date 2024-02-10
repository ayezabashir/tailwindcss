const DesignSystem = () => {
    return (
        <>
            <div>
                <h1>This is a title</h1>
                <h2>This is subtitle</h2>
                <p>This is a paragraph</p>
                <a href="#">This is an anchor</a>
                <div className="my-4">
                    <button className="btn btn-primary">Primary button</button>
                </div>
                <div className="my-4">
                    <button className="btn btn-secondary">Secondary button</button>
                </div>
                <div className="my-4">
                    <button disabled className="btn" >Disabled button</button>
                </div>
                <div>
                    <input type="text" placeholder="email" />
                </div>
                <div>
                    <input type="text" disabled placeholder="email" />
                </div>
                <div>
                    <input type="date" />
                </div>
                <div className="my-2">
                    <input type="checkbox" name="check" id="check" />
                    <label htmlFor="check">Checkbox</label>
                </div>

            </div>
        </>
    )
}

export default DesignSystem
