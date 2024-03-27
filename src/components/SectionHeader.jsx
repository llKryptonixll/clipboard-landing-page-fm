const SectionHeader = ({h2Content, pContent}) => {
    return (
        <header className="text-center grid gap-6">
            <h2 className="sm:text-4xl text-3xl font-bold text-dark_grayish_blue">{h2Content}</h2>
            <p className="max-w-[700px] text-base text-grayish_blue">{pContent}</p>
        </header>
    )
}

export default SectionHeader