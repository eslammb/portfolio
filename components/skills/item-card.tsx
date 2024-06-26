import Image from 'next/image';

interface config {
  img: string;
  name: string;
}

const ItemCard: React.FC<config> = (props) => {
  return (
    <div className='bg-[#3d3e42] w-40 h-40 p-2 flex flex-col gap-4 items-center justify-center rounded-xl border-solid border-2 border-secondary-color/10'>
      <Image
        src={`/skills-logos/${props.img}.svg`}
        alt='HTML5'
        width={100}
        height={120}
        className='flex-1'
      />
      <p className='text-secondary-color text-xl justify-end h-7 min-h-7 max-h-7'>
        {props.name}
      </p>
    </div>
  );
};

export default ItemCard;
