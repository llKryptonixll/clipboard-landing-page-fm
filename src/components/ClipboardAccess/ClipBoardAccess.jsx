import SectionHeader from "../SectionHeader"

const ClipBoardAccess = () => {
  return (
    <section className="pt-main_py px-main_px grid place-items-center text-center gap-12">
      <SectionHeader 
        h2Content="Access Clipboard anywhere"
        pContent="Whether you’re on the go, or at your computer, you can access all your Clipboard snippets in a few simple clicks."
      />
      <img src="images/image-devices.png" alt="iphone and ipad image" />
    </section>
  )
}

export default ClipBoardAccess