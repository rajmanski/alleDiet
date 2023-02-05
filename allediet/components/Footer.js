import Image from "next/image"

export const Footer = () => {
    return (
        <footer className="bg-violet text-white">
            <section className="flex flex-row max-w-7xl items-center justify-evenly font-lato text-center mx-auto font-thin gap-x-10 py-2   text-lg h-auto">
                <div id="adress">
                    <h3 className="text-6xl pb-2 font-moja">alle.diet</h3>
                    <p>ul. Ładna 29</p>
                    <p>05-840 Parzniew</p>
                </div>
                <div id="contact">
                    <div id="contactRow" className="flex flex-row gap-4">
                        <Image width="28" height="28" src="/phone.png" alt="phoneIcon" />
                        <p>+48 123 456 789</p>
                    </div>
                    <div id="contactRow" className="flex flex-row gap-4">
                        <Image width="28" height="28" src="/mail.png" alt="mailIcon" />
                        <p>kontakt@allediet.pl</p>
                    </div>
                    <div id="contactRow" className="flex flex-row gap-4">
                        <Image width="28" height="28" src="/ig.png" alt="instagramIcon" />
                        <p>alle_diet</p>
                    </div>
                </div>
            </section>
        </footer>
    )
}