import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import Image from "next/image";

export default function PriceList() {
    return (
        <>
            <Navbar/>
            <section id="pricelist" className="flex flex-col max-w-7xl items-center justify-center mx-auto mt-32 mb-20 font-lato font-thin">
                <h1 className="text-6xl text-violet mb-20 ">Cennik</h1>
                <div id="pricelistWrapper" className="flex flex-wrap flex-row justify-center gap-10">
                    <div id="box" className="flex flex-col justify-between gap-10 border w-3/12 lg:w-4/6 md:w-5/6 shadow-md">
                        <div id="titleWrapper">
                            <h1 id="title" className="text-3xl bg-violet text-white p-6 text-center">Konsultacja</h1>
                        </div>
                        <div id="list" className="px-3 flex flex-col gap-3">
                            <div id="row" className="flex flex-row items-center gap-3">
                                <Image width="40" height="40" src="/right.png" alt="calendar" />
                                <p>Omówienie problemu pacjenta</p>
                            </div>
                            <div id="row" className="flex flex-row items-center gap-3">
                                <Image width="40" height="40" src="/right.png" alt="calendar" />
                                <p>Ustalenie celów dietetycznych</p>
                            </div>
                            <div id="row" className="flex flex-row items-center gap-3">
                                <Image width="40" height="40" src="/right.png" alt="calendar" />
                                <p>Zapoznanie się z zaleceniami</p>
                            </div>
                            <div id="row" className="flex flex-row items-center gap-3">
                                <Image width="40" height="40" src="/right.png" alt="calendar" />
                                <p>Analiza wyników badań pacjenta</p>
                            </div>
                            <div id="row" className="flex flex-row items-center gap-3">
                                <Image width="40" height="40" src="/right.png" alt="calendar" />
                                <p>Fachowa porada</p>
                            </div>
                            <div id="row" className="flex flex-row items-center gap-3">
                                <Image width="40" height="40" src="/right.png" alt="calendar" />
                                <p>Analiza składu oraz masy ciała</p>
                            </div>
                        </div>
                        <p id="price" className="text-center flex justify-center"><span className="text-white bg-violet text-center py-3 px-20 mb-4 text-xl">200zł</span></p>
                    </div>
                    <div id="box" className="flex flex-col justify-between gap-10 border shadow-md w-3/12 lg:w-4/6 md:w-5/6">
                        <div id="titleWrapper">
                            <h1 id="title" className="text-3xl text-center bg-violet text-white p-6">Wizyta kontrolna</h1>
                        </div>
                        <div id="list" className="px-3 flex flex-col gap-3">
                            <div id="row" className="flex flex-row items-center gap-3">
                                <Image width="40" height="40" src="/right.png" alt="calendar" />
                                <p>Podsumowanie przemian w organizmie pacjenta</p>
                            </div>
                            <div id="row" className="flex flex-row items-center gap-3">
                                <Image width="40" height="40" src="/right.png" alt="calendar" />
                                <p>Wyznaczenie kolejnych celów</p>
                            </div>
                            <div id="row" className="flex flex-row items-center gap-3">
                                <Image width="40" height="40" src="/right.png" alt="calendar" />
                                <p>Ewentualnie korekty względem oczekiwań pacjenta</p>
                            </div>
                            <div id="row" className="flex flex-row items-center gap-3">
                                <Image width="40" height="40" src="/right.png" alt="calendar" />
                                <p>Praca nad trudnymi elementami</p>
                            </div>
                            <div id="row" className="flex flex-row items-center gap-3">
                                <Image width="40" height="40" src="/right.png" alt="calendar" />
                                <p>Kontrola badań</p>
                            </div>
                            <div id="row" className="flex flex-row items-center gap-3">
                                <Image width="40" height="40" src="/right.png" alt="calendar" />
                                <p>Nowy jadłospis</p>
                            </div>
                        </div>
                        <p id="price" className="text-center flex justify-center"><span className="text-white bg-violet text-center py-3 px-20 mb-4 text-xl">200zł</span></p>
                    </div>
                    <div id="box" className="flex flex-col justify-between gap-10 border shadow-md w-3/12 lg:w-4/6 md:w-5/6">
                        <div id="titleWrapper">
                            <h1 id="title" className="text-3xl text-center bg-violet text-white p-6">Dieta</h1>
                        </div>
                        <div id="list" className="px-3 flex flex-col gap-3">
                            <div id="row" className="flex flex-row items-center gap-3">
                                <Image width="40" height="40" src="/right.png" alt="calendar" />
                                <p>Ustalenie z pacjentem jakie są jego cele</p>
                            </div>
                            <div id="row" className="flex flex-row items-center gap-3">
                                <Image width="40" height="40" src="/right.png" alt="calendar" />
                                <p>Analiza budowy i składu ciała</p>
                            </div>
                            <div id="row" className="flex flex-row items-center gap-3">
                                <Image width="40" height="40" src="/right.png" alt="calendar" />
                                <p>Ocena braków mikro i makroskładników w diecie</p>
                            </div>
                            <div id="row" className="flex flex-row items-center gap-3">
                                <Image width="40" height="40" src="/right.png" alt="calendar" />
                                <p>Ustalenie zapotrzebowania kalorycznego</p>
                            </div>
                            <div id="row" className="flex flex-row items-center gap-3">
                                <Image width="40" height="40" src="/right.png" alt="calendar" />
                                <p>Ułożenie diety spełniajacej oczekiwania klienta</p>
                            </div>
                        </div>
                        <p id="price" className="text-center flex justify-center"><span className="text-white bg-violet text-center py-3 px-20 mb-4 text-xl">200zł</span></p>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    )
}