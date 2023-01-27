import Image from "next/image"

export const ContactForm = () => {
    return (
        <section className="flex flex-col">
            <div id="contactWrapper" className="flex flex-row gap-6">
                <Image width="68" height="68" src="/contacts.png" alt="contactIcon" />
                <div id="texts">
                    <h2 className="text-4xl text-left">Formularz kontaktowy</h2>
                    <p className="text-lg">Skorzystaj z niego, aby zostawić nam wiadomość, pamiętaj, że nie służy on do umawiania na wizytę</p>
                </div>
            </div>
            
        </section>
    )
}