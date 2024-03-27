import Button from "../Button"

const Header = () => {
    return (
        <header className="font-bai_jamjuree text-base_font_size min-h-screen grid justify-items-center content-center gap-12 text-center sm:bg-[url('/public/images/bg-header-desktop.png')] bg-[url('/public/images/bg-header-mobile.png')] bg-no-repeat bg-cover bg-top px-main_px py-main_py">
            <img src="images/logo.svg" alt="company-logo" />
            <h1 className="sm:text-5xl text-3xl font-bold text-dark_grayish_blue">A history of everything you copy</h1>
            <p className="block max-w-[680px] sm:text-xl text-base text-grayish_blue">
                Clipboard allows you to track and organize everything you
                copy. Instantly access your clipboard on all your devices.
            </p>
            <div className="sm:space-x-4 space-y-6">
                <Button
                    textContent="Download for iOS"
                    bgColor={"btn-cyan"}
                />
                <Button
                    textContent="Download for Mac"
                    bgColor={"btn-blue"}
                />
            </div>
        </header>
    )
}

export default Header