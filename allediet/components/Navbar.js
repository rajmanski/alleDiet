import Image from "next/image"
import Link from "next/link"

export const Navbar = () => {
    return (
        <>
            <nav className="py-3 fixed top-0 left-0 right-0 bottom-auto shadow-sm font-lato z-20 bg-white opacity-95">
                <div className="flex flex-row items-center mx-auto justify-around text-center max-w-7xl">
                <Link href="/">
                    <div id="logo" className="flex flex-row gap-2 items-center ">
                        <Image width="48" height="48" src="/eggplant2.png" alt="eggplant" />
                        <p className="text-5xl hover:scale-100 font-moja">alle diet</p>
                    </div></Link>
                    <div id="right-section" className="flex flex-row gap-5 items-center font-light">
                        <p className="hover:text-violet text-lg">O mnie</p>
                        <Link href="/articles"><p className="hover:text-violet text-lg">Artykuły</p></Link>
                        <p className="hover:text-violet text-lg">Cennik</p>
                        <p className="hover:text-violet text-lg">Kontakt</p>
                        <p className="hover:text-violet hover:text-xl text-lg border p-2 border-solid border-violet rounded-2xl text-violet">Umów wizytę</p>
                    </div>
                </div>
                
            </nav>
        </>
    )
}