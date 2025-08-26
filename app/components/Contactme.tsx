import ModuleTitle from "./ModuleTitle"
import Button from "./Button"


const Contactme = () => {
  return (
    <section className="flex flex-col items-center py-8 gap-6 font-mono">
      <ModuleTitle
        title="Contact"
        Para="I'm currently available for freelance work"
        className="text-center flex flex-col items-center gap-6"
      />
      <div className="w-full max-w-xs mb-4">
        <div className="border-2 border-[#12F7D6] rounded-tl-[32px] rounded-br-[32px] px-4 py-2 text-[#12F7D6] text-xl font-bold text-center mb-6">
          Send Me A Message
        </div>
        <form className="flex flex-col gap-9">
          <div className="flex gap-4">
            <div className="flex flex-col w-1/2">
              <label className="text-[#12F7D6] text-sm mb-1">Your name *</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="bg-transparent border-b border-[#12F7D6] text-white py-1 outline-none"
              />
            </div>
            <div className="flex flex-col w-1/2">
              <label className="text-[#12F7D6] text-sm mb-1">Your email *</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-transparent border-b border-[#12F7D6] text-white py-1 outline-none"
              />
            </div>
          </div>
          <div className="flex flex-col">
            <label className="text-[#12F7D6] text-sm mb-1">Your message *</label>
            <input
              type="text"
              placeholder="Enter your needs"
              className="bg-transparent border-b border-[#12F7D6] text-white py-1 outline-none"
            />
          </div>
          <Button className="bg-[#12F7D6] text-[#23272f] w-full mt-4 justify-center" icon="icon-send.svg">
            Send Message
          </Button>
        </form>
      </div>
      <div className="w-full border-b border-[#43454D] my-4"></div>
      
     
    </section>
  )
}
export default Contactme;