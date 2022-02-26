import React from "react";

//Images
import StepOne from "../../assets/step_1.svg";
import StepTwo from "../../assets/step_2.svg";
import StepThree from "../../assets/step_3.svg";
import StepFour from "../../assets/step_4.svg";
import Star from "../../assets/star.svg";
import PlayStore from "../../assets/play_store.svg";
import AppStore from "../../assets/app_store.svg";
import { ReactComponent as IPhone } from "../../assets/iphone.svg";

function DownloadSection() {
  return (
    <section id="download-section" className="bg-[#F6F8F9] mt-24 border">
      <div
        id="download-section-content"
        className="mt-24 w-11/12 my-0 mx-auto flex flex-row bg-grey"
      >
        <div className="download-text lg:flex-[50%] w-full">
          <div className="download-header text-2xl font-medium mb-2">
            Duis aute irure dolor in reprehenderit in voluptate
          </div>
          <div className="download-sub-header font-light mb-10">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            <br /> officia deserunt mollit anim id est laborum.
          </div>
          <div className="download-steps flex flex-col gap-y-5">
            <div className="step-1 flex gap-x-4">
              <div className="flex justify-center items-center">
                <img src={StepOne} alt="step_one" />
              </div>
              <span>Sagittis vitae et leo duis ut diam quam nulla.</span>
            </div>
            <div className="step-2 flex gap-x-4">
              <div className="flex justify-center items-center">
                <img src={StepTwo} alt="step_two" />
              </div>
              <span>
                Faucibus pulvinar elementum integer enim neque volutpat ac
                tincidunt vitae.
              </span>
            </div>
            <div className="step-3 flex gap-x-4">
              <div className="flex justify-center items-center">
                <img src={StepThree} alt="step_three" />
              </div>
              <span>
                Viverra adipiscing at in tellus integer feugiat scelerisque
                varius.
              </span>
            </div>
            <div className="step-4 flex gap-x-4">
              <div className="flex justify-center items-center">
                <img src={StepFour} alt="step_four" />
              </div>
              <span>Elementum curabitur vitae nunc.</span>
            </div>
          </div>
          <hr className="my-4" />
          <div className="star-area">
            <div className="stars flex gap-x-2 mb-2">
              <img src={Star} alt="star" />
              <img src={Star} alt="star" />
              <img src={Star} alt="star" />
              <img src={Star} alt="star" />
              <img src={Star} alt="star" />
            </div>
            <div className="star-text mb-4">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui.
            </div>
          </div>
          <div className="download-btns flex pb-10">
            <img src={PlayStore} alt="android" className="max-w-100" />
            <img src={AppStore} alt="iphone" className="p-2 max-w-100" />
          </div>
        </div>
        <div className="download-picture lg:flex lg:flex-[50%] lg:justify-end invisible lg:visible relative">
          <IPhone className="iPhone absolute h-[150%] top-[-60px]"></IPhone>
        </div>
      </div>
    </section>
  );
}

export default DownloadSection;
