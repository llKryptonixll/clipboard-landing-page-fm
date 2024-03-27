import SectionHeader from "../SectionHeader"

const ClipboardManagement = () => {
  return (
    <section className="grid place-items-center gap-12 px-main_px">
      <SectionHeader 
        h2Content="Keep track of your snippets"
        pContent="Clipboard instantly stores any item you copy in the cloud, meaning you can access your snippets immediately on all your devices. Our Mac and iOS apps will help you organize everything."
      />
      <div className="grid lg:grid-cols-2 lg:gap-6 gap-12 w-full items-center justify-items-center">
        <img className="relative 2xl:right-0 lg:right-12" src="images/image-computer.png" alt="apple computer image" />
        <ul className="2xl:w-auto lg:w-full grid gap-12">
          <li className="lg:text-left text-center grid sm:gap-0 gap-4">
            <h3 className="text-dark_grayish_blue font-semibold text-2xl">Quick Search</h3>
            <p className="max-w-[380px] text-grayish_blue">
              Easily search your snippets by content, category, web address, application, and more.
            </p>
          </li>
          <li className="lg:text-left text-center grid sm:gap-0 gap-4">
            <h3 className="text-dark_grayish_blue font-semibold text-2xl">iCloud Sync</h3>
            <p className="max-w-[380px] text-grayish_blue">
              Instantly saves and syncs snippets across all your devices.
            </p>
          </li>
          <li className="lg:text-left text-center grid sm:gap-0 gap-4">
            <h3 className="text-dark_grayish_blue font-semibold text-2xl">Complete History</h3>
            <p className="max-w-[380px] text-grayish_blue">
              Retrieve any snippets from the first moment you started using the app.
            </p>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default ClipboardManagement