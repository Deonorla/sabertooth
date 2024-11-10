interface props {
  image: string;
  name: string;
  role: string;
}

const PersonelCard = ({ image,name,role }: props) => {
  return (
    <div className="flex flex-col gap-2 items-center">
      <img className="w-[250px] h-[263px]" src={image} alt="" />
      <h1 className="font-ishimura text-3xl">{name}</h1>
      <p className="text-base">{role}</p>
    </div>
  );
};

export default PersonelCard;
