import Button from './Button'

interface props {
    icon:string,
    product:string,
    description:string,
    bdesc:string,
    picture:string
    link:string
}

const ProjectCard = ({icon, product, description,bdesc,picture,link}:props) => {
  return (
    <div className='flex flex-col gap-7'>
        <div className='flex justify-center'>
            <img className='w-56' src={icon} alt="" />
        </div>
        <div className='flex flex-col-reverse md:flex-row w-full items-center gap-10'>
            <div className='flex flex-col gap-6 md:w-1/2'>
                <h1 className='font-pirulen text-4xl'>{product}</h1>
                <p>{description}</p>
                <a href={link} target='blank'><div><Button desc={bdesc}/></div></a>
            </div>
            <div className='md:w-1/2 max-md:w-[300px]'>
                <img src={picture} alt="" />
            </div>  
        </div>
    </div>
  )
}

export default ProjectCard