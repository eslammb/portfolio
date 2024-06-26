import Link from 'next/link';

interface config {
  id: number;
  title: string;
  subTitle: string;
  image: string;
  hasGithub?: boolean;
}

const ProjectCard: React.FC<config> = (props) => {
  return (
    <article className='flex flex-col rounded-md border-solid border-2 border-main-color'>
      <img
        alt={props.title}
        src={props.image}
        className='w-full rounded-t-md'
      />
      <div className='flex flex-col my-4 px-4'>
        <h1 className='text-main-color text-xl font-medium'>{props.title}</h1>
        <p className='text-secondary-color my-4'>{props.subTitle}</p>
        <div
          className={`flex flex-row items-center ${
            props.hasGithub === true ? 'justify-between' : 'justify-end'
          } ju w-full h-8`}
        >
          {props.hasGithub === true && (
            <Link href={props.id.toString()}>
              <i
                className={`fab fa-github text-2xl text-secondary-color hover:text-main-color transition-all`}
              ></i>
            </Link>
          )}
          <Link href={props.id.toString()}>
            <i
              className={`fa-solid fa-arrow-right text-2xl text-secondary-color hover:text-main-color transition-all`}
            ></i>
          </Link>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
