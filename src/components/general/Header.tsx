import Logo from '../../assets/logo.svg'

function Header() {

    return (
        <header className="bg-green-200 mb-5">
            <nav className=" inline-flex items-center justify-center lg:justify-start my-2 mx-3 gap-x-3 ">
                <div>
                    <img src={Logo} alt="" className='w-14 h-14' />
                </div>
                <div className=' text-black'>
                    <h3 className='lg:text-4xl text-2xl  uppercase'>Tasktify</h3>
                    <p className='text-base'>Create your task with ease</p>
                </div>

            </nav>
        </header>
    )
}

export default Header
