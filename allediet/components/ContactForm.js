import { TextField } from "@mui/material";
import { styled } from "@mui/system";
import Image from "next/image";

export const ContactForm = () => {

    //Styling MUI textfield on active for a violet color
    const style = {
        "& label.Mui-focused": {
          color: "#6874e8"
        },
        "& .MuiOutlinedInput-root": {
          "&.Mui-focused fieldset": {
            borderColor: "#6874e8"
          }
        }
      } 

  return (
    <section className="flex flex-col">
      <div id="contactWrapper" className="flex flex-row gap-6 mb-16">
        <Image width="68" height="68" src="/contacts.png" alt="contactIcon" />
        <div id="texts">
          <h2 className="text-4xl text-left">Formularz kontaktowy</h2>
          <p className="text-lg">
            Skorzystaj z niego, aby zostawić nam wiadomość, pamiętaj, że nie
            służy on do umawiania na wizytę
          </p>
        </div>
      </div>
      <div id="form" className="flex flex-col items-center justify-center text-center">
        <div id="inputsWrapper" className="w-4/6 flex flex-col gap-6">
        <TextField
          fullWidth
          id="outlined-required"
          label="Imię"
          defaultValue="Twoje imię"
          sx={style}
        />
        <TextField
          fullWidth
          id="outlined-required"
          label="Imię"
          defaultValue="Twoje imię"
        />
        
        </div>
        
      </div>
    </section>
  );
};
