
interface Bprops {
    desc: string
    to?: string
}

const Button = ({desc,to}:Bprops) => {
  return (
        <button className="bg-ratata bg-myGradient md:px-9 px-6 py-2 text-xl rounded-md hover:bg-coral  hover:bg-none">
            <a href={to}>{desc}</a>
        </button>
  )
}

export default Button