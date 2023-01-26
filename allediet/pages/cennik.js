import { Navbar } from "@/components/Navbar";

export default function PriceList() {
    return (
        <>
            <Navbar/>
            <section id="pricelist" className="flex flex-col max-w-7xl items-center justify-center mx-auto mt-32 mb-20 font-lato font-thin">
                <h1 className="text-6xl text-violet">Cennik</h1>
            </section>
        </>
    )
}