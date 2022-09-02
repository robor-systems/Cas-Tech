import React from "react";
import { useMediaQuery } from "react-responsive";
const photo =
  "https://robor-team.s3.eu-central-1.amazonaws.com/cas-tech/career_photo.jpg";
const dot_Square =
  "https://robor-team.s3.eu-central-1.amazonaws.com/cas-tech/dots-square.svg";

const Career = () => {
  const isSm = useMediaQuery({ query: "(max-width: 620px)" });
  return (
    <section id="career">
      {isSm ? (
        <div className="pt-[50px] flex flex-col  gap-[1rem]  justify-between mx-[10px]  px-[22px] ">
          <div>
            <div className="text-text-secondary text-[14px]  mt-[50px] md:mt-[0px] ">
              WHY JOIN US
            </div>
            <div>
              <h1 className="text-[24px] md:text-[32px] leading-[2rem] md:leading-[2.5rem] mb-[12px] font-semibold w-[18rem] md:w-[36rem]">
                We value or people and their cultures lorem ipsum.
              </h1>
            </div>
            <p className="text-text-primary text-[14px] leading-[1.5rem]">
              We in CASTechnology Inc. believe those employees are asset of
              organization. We <br /> care them and do whatever is possible to
              train and retain them. We maintain a <br /> policy of
              non-discrimination towards all employees and applicants for
              employment. <br />
              All aspects of employment with CASTechnology Inc. are governed by
              merit, <br /> competence, suitability and qualifications, and will
              not be influenced in any manner
              <br /> by gender, age, race, color, religion, national origin or
              disability
            </p>
            <p className="text-text-primary text-[14px] leading-[2rem]">
              Want to be a part of our team? Send your resumé for future opening
              at
            </p>
            <p className="text-text-secondary text-[14px] hover:underline cursor-pointer font-semibold">
              admin_hr@CASTechnology.ca
            </p>
          </div>
          <div className="relative ">
            <img
              src={photo}
              alt="groupimage"
              className="w-[312px] md:w-[496px] h-[239px] md:h-[380px]   rounded-[35px] md:rounded-[80px] relative z-10 "
            />
            <div className="absolute left-[-3%] md:left-[-15%] bottom-[-11%] md:bottom-[28%] xl:bottom-[-8%] ">
              <img
                src={dot_Square}
                alt="dots"
                className="h-[52px] md:h-[auto]"
              />
            </div>
          </div>
        </div>
      ) : (
        <div className="pt-[100px] flex flex-col md:flex-row md:justify-around gap-[1rem] md:gap-[5rem] justify-between mx-[10px] md:mx-0  px-[22px] md:px-[100px] lg:px-[100px] xl:px-[200px] 3xl:px-[600px]">
          <div className="relative ">
            <img
              src={photo}
              alt="groupimage"
              className="w-[312px] md:w-[496px] h-[239px] md:h-[380px]   rounded-[35px] md:rounded-[80px] relative z-10 "
            />
            <div className="absolute left-[-3%] md:left-[-15%] bottom-[-11%] md:bottom-[28%] xl:bottom-[-8%] ">
              <img
                src={dot_Square}
                alt="dots"
                className="h-[52px] md:h-[auto]"
              />
            </div>
          </div>
          <div>
            <div className="text-text-secondary text-[14px]  mt-[50px] md:mt-[0px] ">
              WHY JOIN US
            </div>
            <div>
              <h1 className="text-[24px] md:text-[32px] leading-[2rem] md:leading-[2.5rem] mb-[12px] font-semibold w-[18rem] md:w-[36rem]">
                We value or people and their cultures lorem ipsum.
              </h1>
            </div>
            <p className="text-text-primary text-[14px] leading-[1.5rem]">
              We in CASTechnology Inc. believe those employees are asset of
              organization. We <br /> care them and do whatever is possible to
              train and retain them. We maintain a <br /> policy of
              non-discrimination towards all employees and applicants for
              employment. <br />
              All aspects of employment with CASTechnology Inc. are governed by
              merit, <br /> competence, suitability and qualifications, and will
              not be influenced in any manner
              <br /> by gender, age, race, color, religion, national origin or
              disability
            </p>
            <p className="text-text-primary text-[14px] leading-[2rem]">
              Want to be a part of our team? Send your resumé for future opening
              at
            </p>
            <p className="text-text-secondary text-[14px] hover:underline cursor-pointer font-semibold">
              admin_hr@CASTechnology.ca
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Career;
