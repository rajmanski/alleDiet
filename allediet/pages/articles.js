import { Navbar } from "@/components/Navbar";
import Image from "next/image";

export default function Articles() {
    return (
        <>
            <Navbar/>
            <section id="container" className="flex flex-col max-w-7xl items-center justify-center mx-auto mt-32 mb-20 font-lato">
                <div className="w-5/6">
                    <h1 className="text-6xl text-center text-violet mb-8">Baza wiedzy</h1>
                    <hr />
                    <div id="article" className="my-10 flex flex-row gap-10 font-thin">
                        <div id="imageSection" className="w-1/4 h-auto">
                            <Image width="600" height="600" src="/mieta.jpg" alt="mieta" className="h-full"/>
                        </div>
                        <div id="articleInfo" className="w-3/4 flex flex-col items-start gap-4">
                            <h2 className="text-violet text-3xl hover:underline cursor-pointer">Właściwości lecznicze mięty</h2>
                            <div id="dateAndAuthorWrapper" className="flex flex-row gap-6">
                                <p>22 listopada 2022</p>
                                <span className="font-normal">autor: Aleksandra Dublas</span>
                            </div>
                            <p>Mięta pieprzowa, znana i popularna szczególnie latem, nie tylko zdobi nasze szklanki z wodą i cytryną dając nutę orzeźwienia w niesamowitym upale, ale także ma wiele właściwości zdrowotnych. Liście tego przepięknie pachnącego zioła mogą pływać w szkle praktycznie o każdej porze roku.</p>
                            <button className="px-6 py-3 bg-violet text-white rounded-2xl text-md hover:bg-hoverViolet">Czytaj więcej</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}