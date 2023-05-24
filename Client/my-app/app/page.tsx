import Image from 'next/image'

export default function Home() {
  return (
    <div className='text-2xl subpixel-antialiased'>
      {/* nav bar */}
      <div className="flex flex-row gap-3 bg-sky-200 p-6 justify-between sticky drop-shadow-xl">
        <div className='flex flex-row justify-start'>
          <Image src='' alt="logo" loading='lazy'/>
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
          <button className='p-3'>Sign Up</button>
        </div>

          {/* mobile nav toggler */}
     <div className="flex sm:flex md:hidden lg:hidden xl:hidden">Toggle Icon</div>
      </div>
    
      {/* main Body */}
       <main className="bg-white min-h-screen pt-1 pl-3 sm:pt-2 lg:p-16 md:pt-16">

        {/*  body section one*/}
        <div className='grid  grid-flow-col grid-rows-2 md:grid-rows-1 lg:grid-rows-1 xl:grid-rows-1 justify-between gap-6'>
          {/* first column */}
          <div className='p-2 tracking-wide mt-2 sm:mt-2 md:mt-32 lg:mt-32 sm:p-2 md:p-6 lg:p-6'>
            <h1>Online scheduler for offering the best consultations</h1>
            <p className="pb-6 whitespace-normal ">Our user interface auto-Customizes for  your industry,<br/>
              meaning you feel right at home. Say hello to start scheduling!
            </p>
            <button className="p-3 mt-16 rounded-xl text-white bg-sky-700">Sign up for Free <span>	&gt;</span></button>
          </div>
          {/* second column */}
          <div className='text-center'> 
            <Image
              loading="lazy" 
          width={1400} 
          height={700} 
          src="https://d57439wlqx3vo.cloudfront.net/iblock/03c/03c3f81942edbe28e073436c1e47b227/64c181f8554dc9a0e27e654be545e45d.png?1684744464261" 
          alt="task image"/> 
          </div>
        </div>
        {/* body sectoion twos */}
        <h1 className="text-center tracking-2xl   md:text-7xl font-light  p-8 md:tracking-widest sm:text-lg sm:tracking-2xl">Say hello to smart <br/> appointment scheduling </h1>
        <div className="grid grid-rows-6 md:grid-rows-2 lg:grid-rows-2 sm:grid-rows-6 grid-flow-col p-1 gap-3">
          <div className="p-2 card drop-shadow-2xl">
            <ul className="text-center">
              <li>Icon</li>
              <li>Sync your calenders</li>
              <li>Wether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.</li>
            </ul>
          </div>
          <div className="p-2 card drop-shadow-2xl">
            <ul className="text-center">
            <li>Icon</li>
              <li>set up buffer times</li>
              <li>dd buffer times to your schedule to allow yourself preparatory time before and after each appointment</li>
            </ul>
          </div>
          <div className="p-2 card drop-shadow-2xl">
            <ul className="text-center card">
              <li>Icon</li>
              <li>Manage your team with reports</li>
              <li>Measure what matters with titled easy to use reports. You can filter , export and drilldown on the data in a couple of clicks.</li>
            </ul>
          </div>
          <div className="p-2 card drop-shadow-2xl">
            <ul className="text-center card">
              <li>Icon</li>
              <li>Plain work and break times</li>
              <li></li>
            </ul>
          </div>
          <div className="p-2 card drop-shadow-2xl">
            <ul className="text-center">
              <li>Icon</li>
              <li>Connect to tools you already use</li>
              <li></li>
            </ul>
          </div>
          <div className="p-2 card drop-shadow-2xl">
            <ul className='text-center'>
              <li>Icon</li>
              <li>Our people make the difference</li>
              <li></li>
            </ul>
            </div>
        </div>

      </main>
    </div>
 
  )
}
