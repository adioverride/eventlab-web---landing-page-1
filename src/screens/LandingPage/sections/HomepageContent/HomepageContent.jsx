import { ArrowRight } from "../../../../components/ArrowRight";

export const HomepageContent = () => {
  return (
    <div className="top-[1583px] w-[1148px] h-[449px] absolute left-36">
      <div className="inline-flex items-start gap-4 absolute top-0 left-0">
        <div className="relative w-[583px] h-[449px]">
          <div className="absolute top-0 left-[calc(50.00%_-_292px)] w-[581px] h-[399px] bg-[#58286c] rounded-[0px_0px_0px_100px]" />

          <img
            className="absolute top-[30px] left-[calc(50.00%_-_248px)] w-[253px] h-[53px]"
            alt="Logo"
            src="https://c.animaapp.com/eEKKbWZp/img/logo.svg"
          />

          <p className="absolute top-[108px] left-11 w-[376px] [font-family:'Poppins',Helvetica] font-normal text-transparent text-[15px] text-justify tracking-[0] leading-[21.0px]">
            <span className="text-[#d0c7d5]">EventLab je </span>

            <span className="font-bold text-white">
              butikovou agenturou se širokým záběrem v oblasti marketingu
            </span>

            <span className="font-bold text-[#d0c7d5]">.</span>

            <span className="text-[#d0c7d5]">
              {" "}
              Z původně čistě fullservisové eventové agentury jsme se stali
              agenturou specializovanou na různé oblasti marketingového mixu.
              Mezi naše služby patří{" "}
            </span>

            <span className="font-bold text-white">
              budování značky, koučink a trénink podpory prodeje, marketingové
              výzkumy, analýza dat nebo projektové řízení.
            </span>

            <span className="text-[#d0c7d5]">
              {" "}
              Našim klientům také pomáháme nastavovat služby pro zákazníky a
              poskytujeme designové služby a mapování zákaznických cest.
            </span>
          </p>

          <div className="absolute top-[349px] left-[219px] w-[212px] h-[100px]">
            <div className="absolute top-[25px] left-0 w-[210px] h-[51px] bg-[#fe3163] rounded-[30px]" />

            <ArrowRight
              className="!h-3.5 !bg-[unset] !absolute !bg-[unset] !left-[154px] !w-3.5 !top-11"
              property1="linear"
            />
            <div className="absolute top-0 left-10 [font-family:'Poppins',Helvetica] font-semibold text-white text-base tracking-[0] leading-[100px] whitespace-nowrap">
              Napište nám
            </div>
          </div>
        </div>

        <div className="relative w-[551px] h-[399px] bg-[#3f1d4d]">
          <div className="absolute top-[21px] left-[68px] w-[229px] h-[79px]">
            <div className="absolute top-0 left-0 w-[227px] [font-family:'Jomhuria',Helvetica] font-normal text-white text-[90px] text-justify tracking-[0] leading-[90px] whitespace-nowrap">
              naše vize
            </div>

            <img
              className="absolute w-[5.40%] h-[15.70%] top-[24.05%] left-[86.90%]"
              alt="Vector"
              src="https://c.animaapp.com/eEKKbWZp/img/vector.svg"
            />
          </div>

          <div className="absolute w-[478px] h-[235px] top-[108px] left-[68px] flex flex-col gap-[9px]">
            <div className="w-[440px] flex gap-[11px]">
              <img
                className="mt-[11px] w-[22px] h-[22px]"
                alt="Vrstva"
                src="https://c.animaapp.com/eEKKbWZp/img/vrstva-1-7.svg"
              />

              <p className="w-[405px] h-[52px] [font-family:'Poppins',Helvetica] font-normal text-[#d0c7d5] text-[15px] tracking-[0] leading-[21.0px]">
                Rozmanité oblasti marketingu  propojujeme
                <br />
                do harmonického celku
              </p>
            </div>

            <div className="w-[440px] flex gap-[11px]">
              <img
                className="mt-[11px] w-[22px] h-[22px]"
                alt="Vrstva"
                src="https://c.animaapp.com/eEKKbWZp/img/vrstva-1-5.svg"
              />

              <p className="w-[405px] h-[52px] [font-family:'Poppins',Helvetica] font-normal text-[#d0c7d5] text-[15px] tracking-[0] leading-[21.0px]">
                Zajišťujeme komplexní marketingové služby šité
                <br />
                na míru potřebám klientů
              </p>
            </div>

            <div className="w-[440px] flex gap-[11px]">
              <img
                className="mt-[11px] w-[22px] h-[22px]"
                alt="Vrstva"
                src="https://c.animaapp.com/eEKKbWZp/img/vrstva-1-6.svg"
              />

              <p className="w-[405px] h-[52px] [font-family:'Poppins',Helvetica] font-normal text-[#d0c7d5] text-[15px] tracking-[0] leading-[21.0px]">
                Kreativita a inovace se odráží ve všech našich projektech
              </p>
            </div>

            <div className="w-[480px] flex gap-[11px]">
              <img
                className="mt-[11px] w-[22px] h-[22px]"
                alt="Vrstva"
                src="https://c.animaapp.com/eEKKbWZp/img/vrstva-1-4.svg"
              />

              <p className="w-[445px] h-[52px] [font-family:'Poppins',Helvetica] font-normal text-[#d0c7d5] text-[15px] tracking-[0] leading-[21.0px]">
                Profesionalita a serióznost jsou pro nás klíčové, nezapomínáme
                však ani na humor a potřebný nadhled
              </p>
            </div>
          </div>
        </div>
      </div>

      <img
        className="absolute top-[11px] left-[420px] w-[245px] h-[424px] aspect-[0.58] object-cover"
        alt="Mascot"
        src="https://c.animaapp.com/eEKKbWZp/img/mascot@2x.png"
      />
    </div>
  );
};
