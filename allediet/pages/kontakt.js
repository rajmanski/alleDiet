import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import Head from "next/head";

export default function Contact() {

    
    return (
        <>
            <Head>
                <title>Kontakt | alle diet</title>
                <link rel="icon" href="/eggplant2.png"></link>
            </Head>
            <Navbar />
            <section className="flex flex-col max-w-7xl items-center justify-center mx-auto mt-32 mb-20 font-lato font-thin">
                <h1 className="text-center text-5xl pb-10 leading-normal font-thin">Masz pytanie? Zadzwoń!</h1>
                <div className="bg-gray-200  text-center mx-auto p-12 h-30 mb-20 md:p-6 text-5xl font-thin text-violet w-full">
                    <h2 className="md:text-3xl">+48 123 456 678</h2>
                </div>

                <div id="form">
                    <ContactForm/>
                </div>
            </section>
            <Footer/>
        </>
    )
}