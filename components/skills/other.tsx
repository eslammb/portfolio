import ItemCard from './item-card';
import Title from './title';

const Other = () => {
  return (
    <div>
      <Title title='Other' />
      <div className='w-full items-center justify-center flex flex-wrap gap-4'>
        <ItemCard img='git' name='Git' />
        <ItemCard img='typescript' name='TypeScript' />
        <ItemCard img='cypress' name='Cypress' />
        <ItemCard img='jest' name='Jest' />
        <ItemCard img='photoshop' name='Photoshop' />
      </div>
    </div>
  );
};

export default Other;
