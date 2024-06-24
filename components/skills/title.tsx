interface config {
  title: string;
}

const Title: React.FC<config> = (props) => {
  return (
    <h3 className='text-main-color text-center text-xl m-2'>{props.title}</h3>
  );
};

export default Title;
