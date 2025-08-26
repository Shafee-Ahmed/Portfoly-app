import Link from "next/link"
import SearchBar from "./SearchBar";
import Image from "next/image";
const HeaderItem = () => {

  const link = [
    { icon: "/assets/insta-cyan.svg", title: "Instagram" },
    { icon: "/assets/discord-cyan.svg", title: "Discord" },
    { icon: "/assets/github-cyan.svg", title: "Github" }
  ];
  return (
    <nav className="flex gap-4 items-center ">
      
      <div className="">
        <SearchBar />
      </div>
      <div className="hidden sm:flex items-center 
      
      ">
        {link.map(({ icon, title }, idx) => (
          <Link href="#" key={idx} className="mx-2 flex items-center gap-2">
            <Image src={icon} alt={title} width={24} height={24} />
            <span className="hidden md:inline hover:text-[#12F7D6]">{title}</span>
          </Link>
        ))}
      </div>
    </nav>
  )
}

export default HeaderItem
