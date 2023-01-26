export const HowWeWork = () => {
  return (
    <section className="flex flex-col mx-auto max-w-7xl items-center justify-center font-thin mb-40">
      <div className="flex flex-col mx-auto">
        <h1 className="text-center text-4xl pb-10 leading-normal">Jak działamy?</h1>
        <div id="boxWrapper" className="flex flex-row gap-10">
          <div id="box" className="flex flex-col justify-around gap-10">
            <h3 className="text-3xl text-violet">1. Umawiasz się na wizytę</h3>
            <p>
              Przy umówieniu na wizytę wybierasz dogodny dal siebie termin oraz
              zaznaczasz z jaką dolegliwością sie do nas zgłaszasz, w celu
              rzetelnego pyrzgotowania się do wizyty.
            </p>
          </div>
          <div id="box" className="flex flex-col justify-around  gap-10">
            <h3 className="text-3xl text-violet">2. Odbywasz wizytę</h3>
            <p>
              Wizyty odbywają się zarówno zdalnie jak i na miejscu. Na wizycie
              pacjent może w pełni poinformować dietetyka o swoich
              dolegliwościach. W większosć przypadków pacjent kierowany jest na
              diagonostyczne badania krwi w celu diagnostycznym.
            </p>
          </div>
          <div id="box" className="flex flex-col justify-around  gap-10">
            <h3 className="text-3xl text-violet">3. Pojawiasz się z wynikami badań u dietetyka</h3>
            <p>
              Ostatnim etapem diagnostycznym jest weryfikacaj badań lekarskich,
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
