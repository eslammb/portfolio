interface config {
  title: string;
  subTitle?: string;
}

const SectionTitle: React.FC<config> = (props) => {
  return (
    <div className='mb-16'>
      <h2 className='text-9xl font-bold text-center tracking-tighter text-secondary-color drop-shadow-md'>
        {props.title}
      </h2>
      {props.subTitle && <p>{props.subTitle}</p>}
    </div>
  );
};

export default SectionTitle;
