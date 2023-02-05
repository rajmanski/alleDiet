import Image from "next/image"

export const HeroSection = () => {
    return (
        <section className="flex flex-row max-w-7xl items-center justify-center mx-auto mt-40 mb-20 font-lato  lg:flex-wrap xl:mx-10">
            <div id="rigth" className="flex flex-col justify-center items-start gap-10 w-3/6  font-light pr-14 xl:w-5/6 sm:w-full lg:items-center lg:pr-0 lg:text-center" >
                <h1 className="text-6xl leading-normal lg:text-4xl">Dietetyk, który wie jak o Ciebie zadbać!</h1>
                <p className="text-xl leading-normal tracking-wide">W alle.diet zajmujemy się kompleksowym doradzctwem żywieniowym, pomocą w różnych dolegliwościach zdrowotnych i rozpisywaniem diet. Podchodzimy do pacjenta w sposób holistyczny, skupiając się na przyczynach złego samopoczucia.</p>
                <button className="text-white bg-violet border rounded-2xl py-2 px-8 text-xl font-medium">Zapisz się na wizytę już teraz!</button>
            </div>
            <div id="left">
                <Image width="600" height="600" src="/heroimage.png" alt="heroImage" className="md:w-full"/>
            </div>
            
        </section>
    )
}