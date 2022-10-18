import { Container } from "components/Modules";
import { DOT_DECOR } from "constants/content.constant";
import React from "react";
import AboutStats from "./AboutStats";

const AboutUs = () => {
  return (
    <section
      name='about'
      id='about-us'
      className='my-20 sm:my-0 sm:py-20 scroll-mt-24 sm:scroll-mt-10'
    >
      <Container>
        <div className='max-w-[1360px] mx-auto'>
          <div className='flex flex-col md:flex-row  gap-x-20 gap-y-14'>
            <div className='flex-[1] '>
              <div className='text-text-secondary text-[14px] font-semibold '>
                WHO ARE WE
              </div>
              <h1 className='text-[24px] md:text-[32px] leading-[2rem] md:leading-[2.5rem] font-semibold my-3'>
                We are technology-oriented solution provider & consultants
              </h1>
              <div className=''>
                <p className='text-text-primary text-[14px] leading-[1.5rem] '>
                  An IT Consulting and solution provider company. It is based in
                  Regina, Canada and has specialized in Software Development
                  Projects, Telecom Solutions Integrator (CRM & Billing) and
                  Data Warehousing. CASTechnology is fully committed to provide
                  first class IT and consultancy services around the globe.
                </p>
                <p className='text-text-primary mt-[8px] text-[14px] leading-[1.5rem]'>
                  {" "}
                  We are lorem ipsum dolor sit amet, consectetur adipiscing
                  elit. In ex ipsum, rhoncus sed sollicitudin eget, cursus
                  ultricies magna. Vestibulum porttitor, ante nec vulputate
                  bibendum, ante lectus scelerisque tellus, nec accumsan tortor
                  ex in lorem{" "}
                </p>
                <p className='text-text-primary mt-[8px] text-[14px] leading-[1.5rem]'>
                  {" "}
                  From designing next generation server architecture,
                  installing/upgrading a small network or building a complete
                  end-to-end solution for small-to-enterprise business is
                  welcome.
                </p>
              </div>
            </div>
            <div className='relative h-fit flex-[1] w-full'>
              <img
                height={350}
                src='https://firebasestorage.googleapis.com/v0/b/ass-2-c90ee.appspot.com/o/team.jpg?alt=media&token=352fe997-5f89-4847-8307-6d6662db9d8d'
                srcSet='https://firebasestorage.googleapis.com/v0/b/ass-2-c90ee.appspot.com/o/team-small.jpg?alt=media&token=1ddf9704-48ee-4cfe-8825-d891ce12ca8a 650w, https://firebasestorage.googleapis.com/v0/b/ass-2-c90ee.appspot.com/o/team-medium.jpg?alt=media&token=b697f904-9c3f-438e-a49f-5c41fc480a11 768w, https://firebasestorage.googleapis.com/v0/b/ass-2-c90ee.appspot.com/o/team-large.jpg?alt=media&token=470c2a97-a55b-4f10-a713-858d6ef5d8ff 1440w'
                alt='groupimage'
                className='rounded-[40px] w-[100%] md:rounded-[80px] md:min-h-[350px] object-cover'
              />
              <div className='absolute right-[-55px] bottom-[-55px] -z-10'>
                <img src={DOT_DECOR} alt='dots' height={92} width={194} />
              </div>
            </div>
          </div>

          <AboutStats />
        </div>
      </Container>
    </section>
  );
};

export default AboutUs;
