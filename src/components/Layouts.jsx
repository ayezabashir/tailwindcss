const Layouts = () => {
    return (
        <div className="h-screen text-white bg-slate-500">
            {/* container class */}
            <div className="container px-2 bg-red-300">
                This is a container. And we use mx-auto to center it
                but if we do not want to write the mx-auto class we can go
                to tailwind.config file and write center:true
            </div>
            {/* columns-[value] class */}
            <div className="container columns-3 px-2">
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium magnam quo non sed eveniet quam eligendi porro qui corporis laboriosam.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum itaque quibusdam soluta, eos repellat reprehenderit dolore vitae fuga quam placeat natus consequuntur temporibus architecto, reiciendis explicabo commodi tempore? Minus nesciunt dicta quas?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore possimus harum nemo repudiandae quae ullam iste deserunt deleniti!</p>
            </div>
            {/* columns but with images, it will resize the images itslef
                on all screen sizes
            */}
            <div className="container px-2 columns-2">
                <img src="https://images.unsplash.com/photo-1705650065370-656dafd3e20d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                <img src="https://images.unsplash.com/photo-1703702756941-3504879af434?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHx8fA%3D%3D" alt="" />
                <img src="https://images.unsplash.com/photo-1705471162553-d8e200c4cbaa?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                <img src="https://images.unsplash.com/photo-1705600196560-9e58cc3e18f4?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNXx8fGVufDB8fHx8fA%3D%3D" alt="" />
            </div>
            {/* float left right */}
            <div className="container px-2">
                <img className="w-64  h-52 float-left" src="https://images.unsplash.com/photo-1705471162553-d8e200c4cbaa?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis cum minima id tempora at! Sed, molestias. Atque harum animi odio.</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero deserunt sint est cumque nihil quos, tempore facilis, laborum harum dolore, possimus ipsam asperiores impedit id aspernatur similique! Id, quos quis?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis cum minima id tempora at! Sed, molestias. Atque harum animi odio.</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero deserunt sint est cumque nihil quos, tempore facilis, laborum harum dolore, possimus ipsam asperiores impedit id aspernatur similique! Id, quos quis?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis cum minima id tempora at! Sed, molestias. Atque harum animi odio.</p>
            </div>
            <br />
            {/* positions */}
            <div className="relative h-32 w-32 p-8 bg-rose-800 rounded-lg">
                <div className="absolute -top-2 left-0 h-24 w-24 bg-lime-300 rounded-2xl"></div>
            </div>
            {/* Visiblity */}
            <div className="grid grid-cols-3 gap-4">
                <div className="bg-teal-300 h-4"></div>
                <div className="bg-teal-400 h-4 invisible"></div>
                <div className="bg-teal-900 h-4"></div>
            </div>
            {/* Object positioning */}
            <div className="container">
                {/* object-none will center the image inside the square */}
                <img className="object-none w-64 h-64" src="https://images.unsplash.com/photo-1703702756941-3504879af434?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHx8fA%3D%3D" alt="" />
                {/* will align the image from right bottom */}
                <img className="object-none object-right-bottom w-64 h-64" src="https://images.unsplash.com/photo-1703702756941-3504879af434?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHx8fA%3D%3D" alt="" />
            </div>
        </div>
    )
}

export default Layouts
