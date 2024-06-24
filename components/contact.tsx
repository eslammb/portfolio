import Image from 'next/image';

const Contact = () => {
  return (
    <div className='flex flex-row gap-16'>
      <div className='flex-1'>
        <form action='' className='flex flex-col gap-8'>
          <input
            className='p-5 block w-full rounded-md bg-bg-color border-solid border-2 border-main-color focus:outline-none focus:border-secondary-color text-secondary-color'
            type='text'
            name='name'
            placeholder='Your Name'
          />
          <input
            className='p-5 block w-full rounded-md bg-bg-color border-solid border-2 border-main-color focus:outline-none focus:border-secondary-color text-secondary-color'
            type='email'
            name='mail'
            placeholder='Your Email'
          />
          <textarea
            rows={5}
            className='p-5 block w-full rounded-md bg-bg-color border-solid border-2 border-main-color focus:outline-none focus:border-secondary-color text-secondary-color'
            name='message'
            placeholder='Your Message'
          ></textarea>
          <input
            className='self-end bg-main-color py-4 px-8 rounded-md cursor-pointer text-bg-lighter-color font-semibold'
            type='submit'
            value='Send Message'
          />
        </form>
      </div>
      <div className='basis-60 flex flex-col'>
        <h4 className='uppercase text-main-color text-xl font-semibold mb-6'>
          get in touch
        </h4>
        <div className='flex items-center justify-start gap-2 ml-4 mb-4'>
          <Image
            src={'/egypt-flag.svg'}
            alt='Egypt Flag'
            width={25}
            height={25}
            className='rounded-full'
          />
          <span className='text-secondary-color text-lg'>
            +2 011 24 1111 31
          </span>
        </div>
        <div className='flex items-center justify-start gap-2 ml-4'>
          <Image
            src={'/cyprus-flag.svg'}
            alt='Cyprus Flag'
            width={25}
            height={25}
            className='rounded-full'
          />
          <span className='text-secondary-color text-lg'>+357 99 763 034</span>
        </div>
      </div>
    </div>
  );
};

export default Contact;
