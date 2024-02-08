const DesignSystem = () => {
    return (
        <>
            <div>
                <h1>This is a title</h1>
                <h2>This is subtitle</h2>
                <p>This is a paragraph</p>
                <a href="#">This is an anchor</a>

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
                <div>
                    <select name="" id="">
                        <option value="">Option 1</option>
                        <option value="">Option 2</option>
                    </select>
                </div>
                <h1>This is a title</h1>
                <h2>This is subtitle</h2>
            </div>
        </>
    )
}

export default DesignSystem
