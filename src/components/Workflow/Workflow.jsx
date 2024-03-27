import SectionHeader from "../SectionHeader"

const Workflow = () => {
    return (
        <section className="grid gap-20 place-items-center px-main_px pt-main_py">
            <SectionHeader
                h2Content="Supercharge your workflow"
                pContent="We’ve got the tools to boost your productivity."
            />
            <ul className="flex xl:justify-between justify-center items-center max-w-[1200px] w-full gap-y-20 gap-x-6 flex-wrap">
                <li className="max-w-[360px] min-h-[150px] grid gap-6 place-items-center text-center">
                    <img src="images/icon-blacklist.svg" alt="Blacklist icon" />
                    <h3 className="text-dark_grayish_blue text-2xl font-semibold">Create blacklists</h3>
                    <p className="text-base text-grayish_blue">Ensure sensitive information never makes its way to your clipboard by excluding certain sources.</p>
                </li>
                <li className="max-w-[360px] min-h-[150px] grid gap-6 place-items-center text-center">
                    <img src="images/icon-text.svg" alt="Letter A icon" />
                    <h3 className="text-dark_grayish_blue text-2xl font-semibold">Plain text snippets</h3>
                    <p className="text-base text-grayish_blue">Remove unwanted formatting from copied text for a consistent look.</p>
                </li>
                <li className="max-w-[360px] min-h-[150px] grid gap-6 place-items-center text-center">
                    <img src="images/icon-preview.svg" alt="Eye icon" />
                    <h3 className="text-dark_grayish_blue text-2xl font-semibold">Sneak preview</h3>
                    <p className="text-base text-grayish_blue">Quick preview of all snippets on your Clipboard for easy access.</p>
                </li>
            </ul>
            <ul className="flex sm:flex-row flex-col flex-wrap lg:justify-between justify-center items-center max-w-[1200px] w-full gap-x-6 gap-y-20">
                <li>
                    <img src="images/logo-google.png" alt="Google logo" />
                </li>
                <li>
                    <img src="images/logo-ibm.png" alt="IBM logo" />
                </li>
                <li>
                    <img src="images/logo-microsoft.png" alt="Microsoft logo" />
                </li>
                <li>
                    <img src="images/logo-hp.png" alt="Hewlett Packard Enterprise logo" />
                </li>
                <li>
                    <img src="images/logo-vector-graphics.png" alt="Vector Graphics logo" />
                </li>
            </ul>
        </section>
    )
}

export default Workflow