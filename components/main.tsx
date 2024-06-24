import SocialMediaBtns from './social-media-btns';

const MainSection = () => {
  return (
    <main className='flex flex-row h-main-section-height'>
      <div className='flex flex-col flex-1 items-start justify-center'>
        <h1 className={'text-main-color text-5xl font-bold mb-6'}>
          <span className='text-secondary-color text-2xl font-normal'>
            I'm{' '}
          </span>
          Eslam Mohamed Bahgat
        </h1>
        <h2 className='text-secondary-color text-2xl leading-10 my-8'>
          Senior Frontend Engineer passionate about high-performance
          applications. I thrive on using JavaScript, React, React Native, and
          Next.js to build dynamic and efficient web solutions.
        </h2>
        <div className='mt-8 self-end'>
          <SocialMediaBtns />
        </div>
      </div>
      <div className='flex-1'></div>
    </main>
  );
};

export default MainSection;
