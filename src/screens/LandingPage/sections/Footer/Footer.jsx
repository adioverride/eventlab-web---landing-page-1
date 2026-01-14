import { SocialIcons } from "../../../../components/SocialIcons";

export const Footer = () => {
  return (
    <footer className="absolute top-[2081px] left-[147px] w-[1147px] h-[502px] flex flex-col bg-transparent">
      <div className="ml-[401px] w-[367px] h-[73px] relative">
        <div className="absolute w-[367px] h-[73px] top-0 left-0 flex justify-center">
          <div className="w-[369px] ml-0.5 flex justify-center">
            <div className="flex items-center justify-center w-[367px] h-[73px] -ml-0.5 [font-family:'Poppins',Helvetica] font-semibold text-[#66497b] text-base text-center tracking-[0] leading-4">
              Kontakty
            </div>
          </div>
        </div>

        <img
          className="absolute top-[29px] left-[119px] w-5 h-[15px]"
          alt="Vrstva"
          src="https://c.animaapp.com/eEKKbWZp/img/vrstva-1-3.svg"
        />
      </div>

      <div className="inline-flex -ml-px h-[60px] w-[825px] self-center relative mt-8 items-start gap-[51px]">
        <div className="relative w-60 h-[59px]">
          <img
            className="absolute top-0 left-0 w-[61px] h-[59px]"
            alt="Group"
            src="https://c.animaapp.com/eEKKbWZp/img/group-30@2x.png"
          />

          <div className="absolute top-8 left-[calc(50.00%_-_41px)] h-5 flex items-center justify-center [font-family:'Poppins',Helvetica] font-light text-[#b094bb] text-[13px] tracking-[0] leading-[19.5px] whitespace-nowrap">
            Po-Pá: 9:00 - 17:00
          </div>

          <p className="absolute top-2 left-[calc(50.00%_-_43px)] h-[27px] flex items-center justify-center [font-family:'Poppins',Helvetica] font-normal text-white text-lg tracking-[0] leading-[27px] whitespace-nowrap">
            <span className="[font-family:'Poppins',Helvetica] font-normal text-white text-lg tracking-[0] leading-[27px]">
              +420
            </span>

            <span className="font-semibold"> 604 798 753</span>
          </p>
        </div>

        <div className="relative w-[233px] h-[59px]">
          <img
            className="absolute top-0 left-0 w-[61px] h-[59px]"
            alt="Group"
            src="https://c.animaapp.com/eEKKbWZp/img/group-29@2x.png"
          />

          <input
            className="absolute top-4 left-[calc(50.00%_-_40px)] h-[27px] flex items-center justify-center [font-family:'Poppins',Helvetica] font-normal text-white text-lg tracking-[0] leading-[27px] whitespace-nowrap [background:transparent] border-[none] p-0"
            placeholder="info@eventlab.cz"
            type="email"
          />
        </div>

        <div className="relative w-64 h-[60px] bg-[#fe3163] rounded-[20px]">
          <div className="relative top-[18px] left-11 w-[162px] h-[25px] flex">
            <SocialIcons
              className="!h-[24.59px] ![position:unset] !left-[unset] !w-[24.59px] !top-[unset]"
              color="negative"
              platform="instagram"
              platformInstagram="https://c.animaapp.com/eEKKbWZp/img/social-icons-2.svg"
            />
            <SocialIcons
              className="!h-[24.59px] !ml-[21.4px] ![position:unset] !left-[unset] !w-[24.59px] !top-[unset]"
              color="negative"
              platform="facebook"
              platformFacebook="https://c.animaapp.com/eEKKbWZp/img/social-icons.svg"
            />
            <SocialIcons
              className="!h-[24.59px] !ml-[20.4px] ![position:unset] !left-[unset] !w-[24.59px] !top-[unset]"
              color="negative"
              platform="linked-in"
              platformLinkedin="https://c.animaapp.com/eEKKbWZp/img/social-icons-3.svg"
            />
            <SocialIcons
              className="!h-[24.59px] !ml-[21.4px] ![position:unset] !left-[unset] !w-[24.59px] !top-[unset]"
              color="negative"
              platform="x-twitter"
              platformXTwitter="https://c.animaapp.com/eEKKbWZp/img/social-icons-1.svg"
            />
          </div>
        </div>
      </div>

      <div className="inline-flex w-[1145px] h-[175px] relative mt-11 items-center gap-[18px]">
        <div className="w-[272px] relative h-[175px]">
          <div className="absolute top-0 left-0 w-[270px] h-[175px] bg-[#482d5d80] rounded-[70px_0px_70px_0px] border-[0.5px] border-solid border-[#715588]" />

          <p className="absolute top-[34px] left-[107px] w-[133px] h-[111px] flex items-center justify-center [font-family:'Poppins',Helvetica] font-normal text-white text-lg tracking-[0] leading-[27px]">
            <span className="font-bold">
              EventLab s.r.o.
            </span>
            <br />
            <span className="[font-family:'Poppins',Helvetica] font-normal text-white text-lg tracking-[0] leading-[27px]">
              Růžová 970/7
              <br />
              110 01 Praha 1
            </span>
          </p>

          <img
            className="absolute top-[53px] left-[23px] w-[65px] h-[70px]"
            alt="Vrstva"
            src="https://c.animaapp.com/eEKKbWZp/img/vrstva-1.svg"
          />
        </div>

        <div className="w-[209px] relative h-[175px]">
          <div className="absolute top-0 left-0 w-[207px] h-[175px] bg-[#482d5d80] rounded-[70px_0px_70px_0px] border-[0.5px] border-solid border-[#715588]" />

          <div className="absolute top-[34px] left-9 w-[152px] h-[111px] flex items-center justify-center [font-family:'Poppins',Helvetica] font-normal text-[#b59dbe] text-lg tracking-[0] leading-[27px]">
            IČO: 28925441
            <br />
            DIČ: CZ28925441
          </div>
        </div>

        <div className="w-[309px] relative h-[175px]">
          <div className="absolute top-0 left-0 w-[307px] h-[175px] bg-[#482d5d80] rounded-[70px_0px_70px_0px] border-[0.5px] border-solid border-[#715588]" />

          <p className="absolute top-[42px] left-[37px] w-[248px] [font-family:'Poppins',Helvetica] font-normal text-transparent text-base tracking-[0] leading-6">
            <span className="font-bold text-white">
              Mgr. Michaela Blažková, Ph.D.
              <br />
            </span>

            <span className="text-[#896e94]">
              jednatelka
              <br />
            </span>

            <span className="text-[#d2c3d8]">
              &nbsp;&nbsp;&nbsp;&nbsp; +420 604 798 753
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp; michaela@eventlab.cz
            </span>
          </p>

          <img
            className="absolute top-[120px] left-[34px] w-5 h-[15px]"
            alt="Vrstva"
            src="https://c.animaapp.com/eEKKbWZp/img/vrstva-1-2.svg"
          />

          <img
            className="absolute w-[4.53%] h-[8.00%] top-[54.43%] left-[11.73%]"
            alt="Icon"
            src="https://c.animaapp.com/eEKKbWZp/img/icon-1.svg"
          />
        </div>

        <div className="w-[309px] mr-[-2.00px] relative h-[175px]">
          <div className="absolute top-0 left-0 w-[307px] h-[175px] bg-[#482d5d80] rounded-[70px_0px_70px_0px] border-[0.5px] border-solid border-[#715588]" />

          <p className="absolute top-[42px] left-[37px] w-[200px] [font-family:'Poppins',Helvetica] font-normal text-transparent text-base tracking-[0] leading-6">
            <span className="font-bold text-white">
              Michal Falta
              <br />
            </span>

            <span className="text-[#896e95]">
              obchodní manažer
              <br />
            </span>

            <span className="text-[#d2c3d8]">
              &nbsp;&nbsp;&nbsp;&nbsp; +420 776 035 744
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp; obchod@eventlab.cz
            </span>
          </p>

          <img
            className="absolute w-[4.53%] h-[8.00%] top-[54.43%] left-[12.38%]"
            alt="Icon"
            src="https://c.animaapp.com/eEKKbWZp/img/icon-1.svg"
          />

          <img
            className="absolute top-[120px] left-9 w-5 h-[15px]"
            alt="Vrstva"
            src="https://c.animaapp.com/eEKKbWZp/img/vrstva-1-2.svg"
          />
        </div>
      </div>

      <p className="flex items-center justify-center h-[21px] w-[325px] self-center mt-[97px] [font-family:'Poppins',Helvetica] font-normal text-[#8e719f] text-sm tracking-[0] leading-[21px] whitespace-nowrap">
        EventLab, s.r.o. 2020, všechna práva vyhrazena
      </p>
    </footer>
  );
};
