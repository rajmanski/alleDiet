import { ContactForm } from "@/components/ContactForm";
import { Navbar } from "@/components/Navbar";

export default function Contact() {
    return (
        <>
            <Navbar />
            <section className="flex flex-col max-w-7xl items-center justify-center mx-auto mt-32 mb-20 font-lato font-thin">
                <h1 className="text-center text-4xl pb-10 leading-normal">Masz jakieś pytania? Zadzwoń!</h1>
                <div className="bg-gray-200  text-center mx-auto p-12 h-30 mb-20 md:p-6 text-5xl font-thin text-violet w-full">
                    <h2>+48 123 456 678</h2>
                </div>

                <div id="form">
                    <ContactForm/>
                </div>
            </section>
        </>
    )
}