import Image from "next/image";

const Header = () => {
    return (    
        <div className='flex flex-row items-center justify-between p-6'>
            <p className='text-xl lg:text-3xl text-primary font-extrabold'>
                <strong>Dynamic Dashboard</strong>
            </p>
            <Image src={'/logo.svg'} alt="Logo" width={200} height={100}/>
        </div>
    )
}
export default Header;