import { ArrowRight } from "../../../../components/ArrowRight";

export const Header = () => {
  return (
    <header className="absolute w-[1440px] h-[920px] top-0 left-0 bg-transparent">
      <img
        className="absolute top-0 left-0 w-[1440px] h-[899px]"
        alt="Header background"
        src="https://c.animaapp.com/eEKKbWZp/img/header-background.png"
      />

      <div className="top-[159px] w-[1006px] h-[664px] absolute left-36">
        <p className="absolute top-0 left-0 w-[1002px] [font-family:'Jomhuria',Helvetica] font-normal text-transparent text-[160px] tracking-[0] leading-[95px]">
          <span className="text-white">
            Jedinečná
            <br />
            receptura
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;{" "}
          </span>

          <span className="text-[#fe3163]">Váš event</span>
        </p>

        <div className="inline-flex items-center gap-8 absolute top-[353px] left-1">
          <div className="relative w-32 h-[108px]">
            <div className="absolute top-0 left-0 w-[124px] h-[108px] rounded-[35px] border border-solid border-[#fe316375] bg-[linear-gradient(180deg,rgba(254,49,99,0.31)_0%,rgba(254,49,99,0)_67%)]" />

            <div className="absolute top-6 left-0 w-[124px] h-[54px] flex items-center justify-center [font-family:'Poppins',Helvetica] font-black text-white text-[40px] text-center tracking-[0] leading-[100px] whitespace-nowrap">
              17
            </div>

            <div className="absolute top-[65px] left-3.5 w-[95px] h-8 flex items-center justify-center [font-family:'Poppins',Helvetica] font-medium text-white text-base text-center tracking-[0] leading-[100px] whitespace-nowrap">
              let na trhu
            </div>

            <img
              className="absolute top-2 left-[53px] w-[18px] h-[18px]"
              alt="Vrstva"
              src="https://c.animaapp.com/eEKKbWZp/img/vrstva-1-9.svg"
            />
          </div>

          <div className="relative w-32 h-[108px]">
            <div className="absolute top-0 left-0 w-[124px] h-[108px] rounded-[35px] border border-solid border-[#fe316375] bg-[linear-gradient(180deg,rgba(254,49,99,0.31)_0%,rgba(254,49,99,0)_67%)]" />

            <div className="absolute top-6 left-0 w-[124px] h-[54px] flex items-center justify-center [font-family:'Poppins',Helvetica] font-black text-white text-[40px] text-center tracking-[0] leading-[100px] whitespace-nowrap">
              98
            </div>

            <div className="absolute top-[65px] left-[30px] w-[65px] h-8 flex items-center justify-center [font-family:'Poppins',Helvetica] font-medium text-white text-base text-center tracking-[0] leading-[100px] whitespace-nowrap">
              klientů
            </div>

            <img
              className="absolute top-[9px] left-[53px] w-[19px] h-[17px] aspect-[1.08]"
              alt="Vrstva"
              src="https://c.animaapp.com/eEKKbWZp/img/vrstva-1-10.svg"
            />
          </div>

          <div className="relative w-32 h-[108px] mr-[-4.00px]">
            <div className="absolute top-0 left-0 w-[124px] h-[108px] rounded-[35px] border border-solid border-[#fe316375] bg-[linear-gradient(180deg,rgba(254,49,99,0.31)_0%,rgba(254,49,99,0)_67%)]" />

            <div className="absolute top-6 left-0 w-[123px] h-[54px] flex items-center justify-center [font-family:'Poppins',Helvetica] font-black text-white text-[40px] text-center tracking-[0] leading-[100px] whitespace-nowrap">
              365
            </div>

            <div className="absolute top-[65px] left-7 w-[66px] h-8 flex items-center justify-center [font-family:'Poppins',Helvetica] font-medium text-white text-base text-center tracking-[0] leading-[100px] whitespace-nowrap">
              eventů
            </div>

            <img
              className="absolute top-2 left-[54px] w-[17px] h-[18px] aspect-[0.92]"
              alt="Vrstva"
              src="https://c.animaapp.com/eEKKbWZp/img/vrstva-1-11.svg"
            />
          </div>
        </div>

        <img
          className="absolute top-[179px] left-[470px] w-[27px] h-[27px]"
          alt="Vrstva"
          src="https://c.animaapp.com/eEKKbWZp/img/vrstva-1-12.svg"
        />

        <div className="absolute top-[198px] left-[3px] w-[85px] h-[53px]">
          <div className="absolute top-0.5 left-0 w-[83px] h-[51px] bg-[#4a206a8f] rounded-[30px] border border-solid border-[#5f2989]" />

          <div className="absolute top-0 left-px w-[81px] h-[51px] flex items-center justify-center [font-family:'Poppins',Helvetica] font-normal text-[#9559c0] text-[25px] text-center tracking-[0] leading-[100px] whitespace-nowrap">
            pro
          </div>
        </div>

        <p className="absolute top-[280px] left-[3px] w-[561px] h-[73px] flex items-center justify-center [font-family:'Poppins',Helvetica] font-normal text-white text-[22px] tracking-[0] leading-[22px]">
          <span className="font-bold">Fullservis</span>

          <span className="[font-family:'Poppins',Helvetica] font-normal text-white text-[22px] tracking-[0] leading-[22px]">
            {" "}
            v oblasti eventů a marketingu.
          </span>
        </p>

        <div className="absolute top-[564px] left-0 w-[212px] h-[100px]">
          <div className="absolute top-[25px] left-0 w-[210px] h-[51px] bg-[#fe3163] rounded-[30px]" />

          <ArrowRight
            className="!h-3.5 !bg-[unset] !absolute !bg-[unset] !left-[154px] !w-3.5 !top-11"
            property1="linear"
          />
          <div className="absolute top-0 left-10 [font-family:'Poppins',Helvetica] font-semibold text-white text-base tracking-[0] leading-[100px] whitespace-nowrap">
            Napište nám
          </div>
        </div>

        <div className="absolute top-[564px] left-[229px] w-[212px] h-[100px]">
          <div className="absolute top-[25px] left-0 w-[210px] h-[51px] rounded-[30px] border border-solid border-[#fe3163]" />

          <ArrowRight
            className="!h-3.5 !bg-[unset] !absolute !bg-[unset] !left-[143px] !w-3.5 !top-11"
            property1="linear"
          />
          <div className="absolute top-0 left-[52px] [font-family:'Poppins',Helvetica] font-semibold text-[#fe3163] text-base tracking-[0] leading-[100px] whitespace-nowrap">
            Reference
          </div>
        </div>
      </div>

      <div className="absolute w-[659px] h-[424px] top-[496px] left-[646px]">
        <div className="absolute w-[59.16%] h-[71.50%] top-0 left-[40.84%]">
          <div className="absolute w-[98.22%] h-[67.70%] top-[32.30%] left-0 bg-[#fe3163c2] rounded-[9px_0px_98px_9px]" />

          <img
            className="absolute w-[5.33%] h-[6.85%] top-[30.02%] left-[94.67%]"
            alt="Vrstva"
            src="https://c.animaapp.com/eEKKbWZp/img/vrstva-1-13.svg"
          />

          <div className="absolute w-[90.41%] h-[57.58%] top-[35.82%] left-[4.28%]">
            <div className="absolute w-[30.76%] h-[11.89%] top-0 left-0 flex items-center justify-center [font-family:'Poppins',Helvetica] font-light text-[#ffa0ba] text-xs tracking-[0] leading-[100px] whitespace-nowrap">
              Event:
            </div>

            <div className="absolute w-[93.60%] h-[17.83%] top-[15.78%] left-0 [font-family:'Poppins',Helvetica] font-bold text-white text-[28px] tracking-[0] leading-7 whitespace-nowrap">
              Allianz Trade
            </div>

            <div className="absolute w-[93.60%] h-[21.14%] top-[27.81%] left-0 flex items-center justify-center [font-family:'Poppins',Helvetica] font-light text-[#ffabc1] text-[17px] tracking-[0] leading-[100px] whitespace-nowrap">
              08/2024
            </div>

            <p className="absolute w-[96.51%] h-[30.37%] top-[48.36%] left-0 [font-family:'Poppins',Helvetica] font-light text-white text-[12.5px] tracking-[0] leading-[15.0px]">
              Výroční konference a školení Allianz pro 1500 nejlepších
              obchodníků na téma Karlík a továrna na čokoládu.
            </p>

            <div className="absolute w-[49.39%] h-[14.90%] top-[85.10%] left-0">
              <ArrowRight
                className="!h-[48.78%] !bg-[unset] !absolute !bg-[unset] !left-[83.91%] !w-[7.29%] !top-[27.51%]"
                property1="linear"
              />
              <div className="absolute w-[88.13%] h-[62.08%] top-[26.92%] left-[7.47%] [font-family:'Poppins',Helvetica] font-medium text-white text-[11px] tracking-[0] leading-[13.2px]">
                Prohlédnout Fotoreport
              </div>

              <div className="absolute w-[98.85%] h-full top-0 left-0 rounded-[50px] border-[0.5px] border-solid border-white" />
            </div>
          </div>

          <div className="absolute top-0 left-0.5 w-[364px] h-[98px] bg-[url(https://c.animaapp.com/eEKKbWZp/img/image-2@2x.png)] bg-[100%_100%]" />
        </div>

        <img
          className="absolute top-[382px] left-[calc(50.00%_-_329px)] w-[149px] h-[42px]"
          alt="Carousel option"
          src="https://c.animaapp.com/eEKKbWZp/img/carousel-option@2x.png"
        />
      </div>

      <div className="absolute top-1.5 left-36 w-[1149px] h-[85px]">
        <img
          className="absolute top-[18px] left-0 w-[163px] h-[34px]"
          alt="Logo"
          src="https://c.animaapp.com/eEKKbWZp/img/logo-1.svg"
        />

        <img
          className="absolute top-[52px] left-[747px] w-[52px] h-px object-cover"
          alt="Line"
          src="https://c.animaapp.com/eEKKbWZp/img/line-1.svg"
        />

        <div className="inline-flex items-center gap-[22px] absolute top-[calc(50.00%_-_42px)] left-[752px]">
          <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-bold text-[#fe3163] text-[15px] tracking-[0] leading-[85px] whitespace-nowrap">
            úvod.
          </div>

          <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-medium text-white text-[15px] tracking-[0] leading-[85px] whitespace-nowrap">
            o nás.
          </div>

          <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-medium text-white text-[15px] tracking-[0] leading-[85px] whitespace-nowrap">
            co děláme.
          </div>

          <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-medium text-white text-[15px] tracking-[0] leading-[85px] whitespace-nowrap">
            reference.
          </div>

          <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-medium text-white text-[15px] tracking-[0] leading-[85px] whitespace-nowrap">
            kontakt.
          </div>
        </div>
      </div>
    </header>
  );
};
