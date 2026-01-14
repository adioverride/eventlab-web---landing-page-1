import { ArrowRight } from "../../components/ArrowRight";
import { Footer } from "./sections/Footer";
import { Header } from "./sections/Header";
import { HomepageContent } from "./sections/HomepageContent";
import { StripLine } from "./sections/StripLine";

export const LandingPage = () => {
  return (
    <div
      className="bg-[#310842] w-full min-w-[1440px] min-h-[2680px] relative lg:min-w-[1440px] md:min-w-[768px] sm:min-w-[402px]"
      data-model-id="0:3"
    >
      <img
        className="absolute top-0 left-0 w-[1440px] h-[2380px]"
        alt="Background stars"
        src="https://c.animaapp.com/eEKKbWZp/img/background-stars.png"
      />

      <Footer />
      <HomepageContent />
      <div className="absolute top-[1300px] left-[147px] w-[1149px] h-[180px]">
        <img
          className="absolute top-[73px] left-[41px] w-[1070px] h-[107px]"
          alt="Partners"
          src="https://c.animaapp.com/eEKKbWZp/img/partners.svg"
        />

        <div className="top-0 left-[405px] absolute w-[367px] h-[73px]">
          <div className="absolute w-[367px] h-[73px] top-0 left-0 flex justify-center">
            <div className="w-[369px] ml-0.5 flex justify-center">
              <div className="flex items-center justify-center w-[367px] h-[73px] -ml-0.5 [font-family:'Poppins',Helvetica] font-semibold text-[#66497b] text-base text-center tracking-[0] leading-4">
                Naši Klienti
              </div>
            </div>
          </div>

          <img
            className="absolute top-[29px] left-[117px] w-3.5 h-3.5"
            alt="Vrstva"
            src="https://c.animaapp.com/eEKKbWZp/img/vrstva-1-8.svg"
          />
        </div>

        <div className="absolute top-[105px] left-[1120px] w-[29px] h-[43px] flex bg-[#3f3c4040] rounded-[10px] border border-solid border-[#684184]">
          <ArrowRight
            className="!h-[16.27px] !mt-[13.9px] !ml-[5.8px] !bg-[unset] ![position:unset] !bg-[unset] !left-[unset] !w-[16.27px] !top-[unset]"
            property1="linear"
          />
        </div>

        <div className="absolute top-[105px] left-px w-[29px] h-[43px] flex bg-[#3f3c4040] rounded-[10px] border border-solid border-[#684184] rotate-180">
          <ArrowRight
            className="!h-[16.27px] !mt-[12.8px] !ml-[5.8px] !bg-[unset] ![position:unset] !-rotate-180 !left-[unset] !bg-[unset] !w-[16.27px] !top-[unset]"
            property1="linear"
          />
        </div>
      </div>

      <StripLine />
      <Header />
    </div>
  );
};
