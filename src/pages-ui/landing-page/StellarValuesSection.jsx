import React from "react";
import Image from "next/image";
import DoctorImg1 from "@/assets/images/landing-page/about-img.png";
import DoctorImg2 from "@/assets/images/landing-page/doctor2.png";
import DoctorImg3 from "@/assets/images/landing-page/doctor3.png";

const StellarValues = () => {
  return (
    <div className=" bg-white  ">
      <div className="container mx-auto h-full py-[130px] px-5">
        <div className="lg:w-[70%] mx-auto">
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* images box for values*/}
          <div className=" hidden md:grid grid-cols-1  md:grid-cols-2 gap-6">
            <div className="flex flex-col items-center gap-4 mt-[-50px]">
              <Image
                src={DoctorImg1}
                alt="Doctor"
                width={600}
                height={400}
                className=" w-[80%] md:w-full rounded-xl h-[320px] md:h-[250px] "
              />
              <Image
                src={DoctorImg3}
                alt="Doctor"
                width={600}
                height={300}
                className="w-full rounded-xl h-[250px] "
              />
            </div>
            <div className="flex flex-col gap-4">
              <Image
                src={DoctorImg3}
                alt="Doctor"
                width={600}
                height={300}
                className="w-full rounded-xl h-[250px] "
              />
              <Image
                src={DoctorImg1}
                alt="Doctor"
                width={600}
                height={300}
                className="w-full rounded-xl h-[250px] "
              />
            </div>
          </div>

          {/* box for text values */}
          <div className="text-gray-700 flex justify-end ">
              <div className="text-container lg:w-[80%]">
              <h4 className="text-sm font-semibold text-blue-500 mb-2">
              Integrity
            </h4>
            <h2 className="text-3xl font-bold text-[#234A6B] mb-4">
              Our Stellar Values
            </h2>
            <p className="text-sm mb-6">
              The cornerstone of our establishment is making the benefits of
              exceptional medical services reach the people without
              discrimination. We aspire to live up to this philosophy through
              our stellar values, that are the pillars of every service that we
              offer under the banner of our prestigious hospital.
            </p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-md shadow">
              Contact Us
            </button>
              </div>
            
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default StellarValues;
