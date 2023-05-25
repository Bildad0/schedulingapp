

export default function NavBar() {
    return (
      <div className="flex flex-row gap-3 bg-sky-200 p-6 justify-between sticky drop-shadow-xl">
        <div className='flex flex-row justify-start'>
          <h1 className='font-bold text-black'>A sync</h1>
        </div>
        {/* navbar items */}
        <div className='hidden sm:hidden md:flex lg:flex'>
          <ul className='flex flex-row gap-6 justify-center'>
            <li>Features</li>
            <li>Solution</li>
            <li>Resources</li>    
            <li>Prices</li>
          </ul>
        </div>
        {/* Sign up and login Button */}
        <div className='hidden sm:hidden md:flex lg:flex  flex-row gap-3 justify-end'>
          <button className='p-3'>Login</button>
          <button className='p-3' >Sign Up</button>
        </div>                                                                                                                                                                                                                                                                                                                                                                           

          {/* mobile nav toggler */}
     <div className="flex sm:flex md:hidden lg:hidden xl:hidden">Toggle Icon</div>
      </div>
    )
}