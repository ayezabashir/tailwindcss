const Customization = () => {
    return (
        <>
            <p className="text-xs sm:text-base md:text-lg lg:text-3xl">
                First you have to define in the config file yourbreakpoints
                text-xs will be applied to all the screen sizes lower
                than lg-screen
            </p>
            <p className="p-4 mt-6">
                spacing is also customized in tailwind.config.js file
                By default the spacing scale is inherited
                by the padding, margin, width, minWidth,
                maxWidth, height, minHeight, maxHeight,
                gap, inset, space, translate, scrollMargin, and
                scrollPadding core plugins.
            </p>
            <p className="bg-[#4251a4] p-[100px]">
                If we do not want to add customization in the
                tailwind.config.js file, we can directly add it here too
                in the [] brackets
            </p>
        </>
    )
}

export default Customization
