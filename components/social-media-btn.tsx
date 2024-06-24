interface config {
  icon: string;
  hoverBgColor: string;
}

const SocialMediaBtn: React.FC<config> = (props) => {
  return (
    <button className='flex items-center justify-center text-white'>
      <i
        className={`fab ${props.icon} text-2xl text-secondary-color ${props.hoverBgColor} transition-all`}
      ></i>
    </button>
  );
};

export default SocialMediaBtn;
