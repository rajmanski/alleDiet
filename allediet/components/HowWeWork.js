import Image from "next/image";

export const HowWeWork = () => {
  return (
    <section className="flex flex-col mx-auto max-w-7xl items-center justify-center font-thin mb-40 font-lato xl:mx-10">
      <div className="flex flex-col mx-auto">
        <h1 className="text-center text-4xl pb-10 leading-normal">
          Jak działamy?
        </h1>
        <div id="boxWrapper" className="flex flex-row gap-10 lg:block lg:mx-auto lg:w-3/6 md:w-4/6 sm:w-5/6">
          <div id="box" className="flex flex-col justify-between gap-8 lg:mb-8">
            <div className="flex-col gap-4 flex">
              <Image
                width="48"
                height="48"
                src="/calendar.png"
                alt="eggplant"
              />
              <h3 className="text-3xl text-violet">
                Umawiasz się na wizytę
              </h3>
            </div>
            <p>
              Przy umówieniu na wizytę wybierasz dogodny dal siebie termin oraz
              zaznaczasz z jaką dolegliwością sie do nas zgłaszasz, w celu
              rzetelnego pyrzgotowania się do wizyty.
            </p>
          </div>
          <div id="box" className="flex flex-col justify-between  gap-8 lg:mb-8">
            <div className="flex-col flex gap-4">
              <Image
                width="48"
                height="48"
                src="/stethoscope.png"
                alt="eggplant"
              />
              <h3 className="text-3xl text-violet">Odbywasz wizytę</h3>
            </div>
            <p>
              Wizyty odbywają się zarówno zdalnie jak i na miejscu. Na wizycie
              pacjent może w pełni poinformować dietetyka o swoich
              dolegliwościach. W większosć przypadków pacjent kierowany jest na
              diagonostyczne badania krwi w celu diagnostycznym.
            </p>
          </div>
          <div id="box" className="flex flex-col justify-between  gap-8">
            <div className="flex-col flex gap-4">
              <Image
                width="48"
                height="48"
                src="/doctorsbag.png"
                alt="eggplant"
              />
              <h3 className="text-3xl text-violet">
                Pojawiasz się z wynikami badań u dietetyka
              </h3>
            </div>
            <p>
              Ostatnim etapem diagnostycznym jest weryfikacji badań lekarskich,
              które powinny powiedzieć dietetykowi, jakie są przyczyny złego
              samopoczucia. Dietetyk postawi rzetelną diagnozę, pokieruje
              pacjenta w jakis sposób powinien zająć się swoimi dolegliwosciami
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
