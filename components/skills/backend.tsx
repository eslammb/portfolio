import ItemCard from './item-card';
import Title from './title';

const Backend = () => {
  return (
    <div>
      <Title title='Back-end' />
      <div className='w-full items-center justify-center flex flex-wrap gap-4'>
        <ItemCard img='node' name='Node Js' />
        <ItemCard img='firebase' name='Firebase' />
      </div>
    </div>
  );
};

export default Backend;
