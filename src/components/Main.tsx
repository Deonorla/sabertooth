import Button from "./Button"

const Main = () => {
  return (
    <div className='wrapper flex flex-col gap-5 items-center max-w-5xl'>
        <p className='text-base'>Sabertooth Group</p>
        <h1 className="font-pirulen text-[3.5rem] leading-none text-center">BUILDING TOMORROW'S <span className="text-crimson text-shadow-pulse">INNOVATION</span></h1>
        <p className="text-center text-xl">We’re shaping Web 3’s future, tackling real-world challenges from concept to launch with community-driven, decentralized solutions.</p>
        <Button desc={"Explore"} to={'#projects'}/>
    </div>
  )
}

export default Main
