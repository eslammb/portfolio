import ItemCard from './item-card';
import Title from './title';

const Frontend = () => {
  return (
    <div>
      <Title title='Front-end' />
      <div className='w-full items-center justify-center flex flex-wrap gap-4'>
        <ItemCard img='html' name='HTML' />
        <ItemCard img='css' name='CSS' />
        <ItemCard img='js' name='JavaScript' />
        <ItemCard img='react' name='React' />
        <ItemCard img='redux' name='Redux' />
        <ItemCard img='next' name='Next Js' />
        <ItemCard img='vue' name='Vue Js' />
        <ItemCard img='tailwind' name='Tailwind CSS' />
        <ItemCard img='sass' name='SASS' />
      </div>
    </div>
  );
};

export default Frontend;
