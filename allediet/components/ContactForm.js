import { TextField } from "@mui/material";
import { styled } from "@mui/system";
import Image from "next/image";
import { useState } from "react";

export const ContactForm = () => {
  //Styling MUI textfield on active for a violet color
  const style = {
    "& label.Mui-focused": {
      color: "#6874e8",
    },
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused fieldset": {
        borderColor: "#6874e8",
      },
    },
  };

  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [number, setNumber] = useState(null);
  const [msg, setMsg] = useState(null);

  //Function that goes after click on the button - in the future it will send a mail to a dietetician
  const handleClick = () => {
    console.log(`name: ${name}; email: ${email}; number: ${number} msg: ${msg}`)
  }

  return (
    <section className="flex flex-col">
      <div id="contactWrapper" className="flex flex-row gap-6 mb-16">
        <Image width="68" height="68" src="/contacts.png" alt="contactIcon" className="md:w-32 sm:w-64"/>
        <div id="texts">
          <h2 className="text-4xl text-left md:text-3xl sm:text-2xl">Formularz kontaktowy</h2>
          <p className="text-lg">
            Skorzystaj z niego, aby zostawić nam wiadomość, pamiętaj, że nie
            służy on do umawiania na wizytę
          </p>
        </div>
      </div>
      <div
        id="form"
        className="flex flex-col items-center justify-center text-center"
      >
        <div id="inputsWrapper" className="w-4/6 flex flex-col gap-6">
          <TextField fullWidth id="outlined-required" label="Imie" sx={style} onChange={(e) => setName(e.target.value)}/>
          <TextField
            fullWidth
            id="outlined-required"
            label="Email"
            sx={style}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            fullWidth
            id="outlined-required"
            label="Numer telefonu"
            sx={style}
            inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
            onChange={(e) => setNumber(e.target.value)}
          />
          <div id="bigTextField" className="h-60">
            <TextField
              fullWidth
              id="outlined-required"
              label="Wiadomość do dietetyka"
              multiline
              rows={6}
              sx={style}
              onChange={(e) => setMsg(e.target.value)}
            />
          </div>
        </div>
        <button className="text-white bg-violet border rounded-2xl py-2 px-12 text-2xl font-thin hover:bg-hoverViolet" onClick={handleClick}>Wyślij wiadomość</button>
      </div>
    </section>
  );
};
