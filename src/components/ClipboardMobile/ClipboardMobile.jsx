import SectionHeader from "../SectionHeader"
import Button from "../Button"

const ClipboardMobile = () => {
    return (
        <section className="grid gap-6 place-items-center px-main_px pt-main_py">
            <SectionHeader
                h2Content="Clipboard for iOS and Mac OS"
                pContent="Available for free on the App Store. Download for Mac or iOS, sync with iCloud and you’re ready to start adding to your clipboard."
            />
            <div className="sm:space-x-4 space-y-6 sm:block grid">
                <Button
                    textContent="Download for iOS"
                    bgColor={"btn-cyan"}
                />
                <Button
                    textContent="Download for Mac"
                    bgColor={"btn-blue"}
                />
            </div>
        </section>
    )
}

export default ClipboardMobile