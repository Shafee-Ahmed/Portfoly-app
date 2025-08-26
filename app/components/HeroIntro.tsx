import Image from "next/image"


const HeroIntro = () => {
  return (
    <section className="flex flex-col items-center px-6 py-10 gap-8 font-mono text-white
    md:flex-row
    md:justify-between
    md:w-full
    md:max-w-6xl
   ">
      <div className="md:flex-col">
        <h1 className="text-2xl md:text-4xl font-bold leading-tight">
          Hey<br />
          I’m <span className="text-[#12F7D6]">Shafee</span>,<br />
          Full-stack developer
        </h1>
        <p className="text-base md:text-lg max-w-xs md:max-w-lg md:text-start">
          I help business grow by crafting amazing web experiences. If you’re looking for a developer that likes to get stuff done,
        </p>
        <div className="flex items-center gap-2 text-[#12F7D6] text-2xl font-bold
        md:mt-2
        ">
          Let’s Talk
          <span className="bg-[#23272f] rounded-full p-2">
            <Image src="/assets/icon-mail.svg" alt="mail" width={24} height={24} />
          </span>
        </div>
      </div>

      <div className="bg-[#23272f] rounded-[48px] px-8 py-10 flex flex-col gap-8 w-[260px] mt-4 shadow-lg">
        <div className="flex items-center gap-4">
          <span className="text-[#12F7D6] text-3xl font-bold">4</span>
          <span className="text-base">Programming<br />Language</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-[#12F7D6] text-3xl font-bold">6</span>
          <span className="text-base">Development<br />Tools</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-[#12F7D6] text-3xl font-bold">8</span>
          <span className="text-base">Years of<br />Experience</span>
        </div>
      </div>
    </section>
  )
}

export default HeroIntro
