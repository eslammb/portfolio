import ItemCard from './item-card';
import Title from './title';

const Database = () => {
  return (
    <div>
      <Title title='Database' />
      <div className='w-full items-center justify-center flex flex-wrap gap-4'>
        <ItemCard img='oracle' name='Oracle' />
        <ItemCard img='sqlserver' name='Ms SQL Server' />
        <ItemCard img='mysql' name='My SQL' />
        <ItemCard img='mongodb' name='Mongo DB' />
      </div>
    </div>
  );
};

export default Database;
