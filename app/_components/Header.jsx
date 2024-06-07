import PropTypes from "prop-types";

const FrameComponent9 = ({ className = "" }) => {
  return (
    <header
      className={`self-stretch flex flex-row items-start justify-center pt-0 pb-[145.3px] pr-[25px] pl-5 box-border max-w-full text-center text-lg-5 text-black font-matter ${className}`}
    >
      <div className="w-[1534px] flex flex-row items-start justify-between gap-[20px] max-w-full">
        <div className="w-[153.5px] flex flex-col items-start justify-start pt-[1.2px] px-0 pb-0 box-border">
          <img
            className="self-stretch h-[45px] relative max-w-full overflow-hidden shrink-0 object-cover"
            loading="lazy"
            alt=""
            src="/group-606@2x.png"
          />
        </div>
        <div className="flex flex-row items-start justify-start gap-[60px] max-w-full mq450:gap-[15px] mq925:gap-[30px]">
          <div className="w-[76.7px] flex flex-col items-start justify-start pt-[9.1px] px-0 pb-0 box-border">
            <div className="self-stretch flex flex-col items-end justify-start gap-[9.3px]">
              <div className="self-stretch flex flex-row items-start justify-end py-0 pr-[3px] pl-[5px]">
                <b className="h-[27.8px] flex-1 relative leading-[100%] font-bold flex items-end justify-center">
                  Home
                </b>
              </div>
              <img
                className="self-stretch h-[2.6px] relative max-w-full overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src="/line-5.svg"
              />
            </div>
          </div>
          <div className="w-[110px] flex flex-col items-start justify-start pt-[9px] px-0 pb-0 box-border">
            <div className="self-stretch h-7 relative leading-[100%] font-medium flex items-end justify-center shrink-0">
              Destinations
            </div>
          </div>
          <div className="flex flex-col items-start justify-start pt-1.5 px-0 pb-0 text-left text-base text-gray-800">
            <div className="flex flex-row items-start justify-start gap-[10.3px]">
              <img
                className="self-stretch w-[33.5px] relative max-h-full min-h-[41px]"
                loading="lazy"
                alt=""
                src="/group-9428.svg"
              />
              <div className="flex flex-col items-start justify-start">
                <u className="w-[74px] relative [text-decoration:underline] leading-[19px] flex items-end whitespace-nowrap">
                  On Time
                </u>
                <b className="relative text-lg-5 [text-decoration:underline] leading-[22px] font-semibold text-black inline-block min-w-[91px] z-[1]">
                  Guarantee
                </b>
              </div>
            </div>
          </div>
          <button className="cursor-pointer [border:none] pt-[14.4px] pb-[13.1px] pr-3 pl-[13px] bg-black w-[145px] rounded-sm flex flex-row items-start justify-start box-border hover:bg-darkslategray-100">
            <div className="h-[54px] w-[145px] relative rounded-sm bg-black hidden" />
            <b className="h-[26.5px] flex-1 relative text-lg-5 leading-[100%] font-semibold font-matter text-white text-center flex items-center justify-center z-[1]">
              Login
            </b>
          </button>
        </div>
      </div>
    </header>
  );
};

FrameComponent9.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent9;
