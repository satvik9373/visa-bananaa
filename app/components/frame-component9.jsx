import PropTypes from "prop-types";

const FrameComponent8 = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center pt-0 pb-[107.8px] pr-[25px] pl-5 box-border max-w-full ${className}`}
    >
      <div className="w-[1534px] rounded-11xl bg-white flex flex-row items-start justify-start pt-[25px] px-[23px] pb-[26px] box-border gap-[61px] max-w-full z-[1] mq450:gap-[15px] mq925:gap-[30px] mq1825:flex-wrap">
        <div className="h-[167px] w-[1534px] relative rounded-11xl bg-white hidden max-w-full" />
        <div className="w-[901px] rounded-3xl box-border flex flex-row items-start justify-start py-[17px] px-[15px] gap-[32px] min-w-[901px] max-w-full z-[1] border-[1px] border-solid border-gray-300 mq450:flex-wrap mq450:gap-[16px] mq1350:min-w-full mq1825:flex-1">
          <div className="h-[116px] w-[901px] relative rounded-3xl box-border hidden max-w-full border-[1px] border-solid border-gray-300" />
          <img
            className="h-[78px] w-[76px] relative object-cover z-[1]"
            alt=""
            src="/image-45@2x.png"
          />
          <input
            className="w-[252px] [border:none] [outline:none] bg-[transparent] h-[57px] flex flex-col items-start justify-start pt-[21px] px-0 pb-0 box-border font-poppins font-medium text-13xl text-gray-100"
            placeholder="Where to go?"
            type="text"
          />
        </div>
        <div className="w-[475px] flex flex-col items-start justify-start pt-[9px] px-0 pb-0 box-border min-w-[475px] max-w-full mq925:min-w-full mq1825:flex-1">
          <div className="self-stretch h-[93px] flex flex-row items-start justify-start relative z-[1]">
            <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px]">
              <img
                className="absolute h-full top-[0px] bottom-[0px] left-[0px] max-h-full w-[286px] object-cover"
                alt=""
                src="/image-45-1@2x.png"
              />
              <img
                className="absolute h-full top-[0px] bottom-[0px] left-[246px] max-h-full w-[229px] object-cover z-[1]"
                loading="lazy"
                alt=""
                src="/image-46@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent8.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent8;
