import Image from "next/image"

export const HeroSection = () => {
    return (
        <section className="flex flex-row max-w-7xl items-center justify-center mx-auto mt-40 font-lato">
            <div id="rigth" className="flex flex-col justify-center items-start gap-10 w-3/6  font-light pr-14" >
                <h1 className="text-6xl leading-normal">Dietetyk, który wie w jaki sposób o Ciebie zadbać!</h1>
                <p className="text-xl leading-normal tracking-wide">W alle diet zajmujemy się kompleksowym doradzctwem żywieniowym, pomocą w różych dolegliwościach zdrowotnych, rozpisywaniem diet. Podchodzimy do pacjenta w sposób holistyczny, skupiając się na przyczynach złego samopoczucia.</p>
                <button className="text-white bg-violet border rounded-2xl py-2 px-8 text-xl font-medium">Zapisz się na wizytę już teraz!</button>
            </div>
            <div id="left">
                <Image width="600" height="600" src="/heroimage.png" alt="heroImage" className=""/>
            </div>
            
        </section>
    )
}