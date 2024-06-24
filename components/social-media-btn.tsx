interface config {
  icon: string;
  hoverBgColor: string;
  link: string;
}

const SocialMediaBtn: React.FC<config> = (props) => {
  return (
    <a
      className='flex items-center justify-center text-white'
      href={props.link}
      target='_blank'
    >
      <i
        className={`${props.icon} text-2xl text-secondary-color ${props.hoverBgColor} transition-all`}
      ></i>
    </a>
  );
};

export default SocialMediaBtn;
