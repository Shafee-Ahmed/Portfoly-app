import Image from "next/image"
const page = () => {
  return (
    <>
      <div className="flex items-center gap-4 px-10 py-9">
        <div className="relative w-20 h-20 ">
          <Image
            src='/assets/logo.svg'
            alt=""
            fill
          >

          </Image>
        </div>
        
        <div className="text-[#12f7d6] text-sm font-mono sm:text-xl md:text-2xl lg:text-2xl llg:text-3xl">
          ShafeeAhmed
        </div>
      </div>


    </>
  )
}

export default page
