import { useEffect, useRef } from 'react';
import Typed from 'typed.js';

export const WhatWeDo = () => {

  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
        strings:['Celiaklia', 'Zaburzenia odżywiania', 'Cukrzyca', 'Insulinoopornośc', 'Prowadzenie sportowców', 'Hashimoto', 'Zaburzenia pracy tarczycy'],
        // startDelay: 300,
        // typeSpeed: 300,
        // backDelay: 150,
        // backSpeed: 150,
        // smartBackspace: true,
        // showCursor: false,
        // loop: true
        typeSpeed: 300,
        backSpeed: 300,
        showCursor: false,
        loop: true,
    })
  }, [])

    return (
        <div className="bg-gray-200  text-center mx-auto p-12 h-60">
            <section className="max-w-7xl font-lato mx-auto flex flex-col gap-10">
                <h2 className="text-4xl leading-normal font-thin ">Jakimi dolegliwościami się zajmujemy?</h2>
                <p className="text-6xl text-violet"><span className='font-sans' ref={el}></span></p>
            </section>
        </div>
    )
}