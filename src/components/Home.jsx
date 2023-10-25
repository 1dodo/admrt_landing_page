import React from 'react'

const Home = () => {
  return (
    <div className='max-w-screen-xl mx-auto'>
        <div className='py-3 md:py-10'>
          <h1 className='text-center  text-3xl md:text-6xl font-semibold '>
              Be the First to Access a Revolutionary Ad Buying and Selling Experience
          </h1>
        </div>
        <div className='py-3 px-3'>
            <h1 className='text-sm md:text-xl font-normal'>
               Are you an influencer looking to monetize your space? Or are you seeking the perfect platform to promote your brand through powerful ad placements? You're in the right place! Join our waitlist for exclusive early access to the AdMrt Marketing Platform, a game-changer in the world of advertising.
            </h1>
        </div>

        <div class="mb-6 mt-0 p-3">
         <label class="mb-2 text-xl font-medium text-gray-900 ">Email address</label>
         <input type="email" class="bg-gray-50 border mt-2 py-4 border-gray-300 text-gray-900 text-base rounded-lg  focus:border-blue-500  w-full p-1 md:p-2.5   dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john.doe@company.com" />
       </div> 

       <h1 className='mt-10 text-xl font-medium flex justify-center items-center'>What type of ad space are you:</h1>
<div className='grid grid-cols-3 gap-5 text-center mt-4 pb-0'>
       <div class="flex flex justify-center items-center items-center mb-4">
    <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600  " />
    <label for="default-checkbox" class="ml-2 text-sm md:text-xl font-medium text-gray-900 ">Social media</label>
</div>
<div class="flex justify-center items-center flex items-center mb-4">
    <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600  " />
    <label for="default-checkbox" class="ml-2 text-sm md:text-xl font-medium text-gray-900 ">Web/entertainment</label>
</div>

<div class="flex justify-center items-center flex items-center mb-4">
    <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600  " />
    <label for="default-checkbox" class="ml-2 text-sm md:text-xl font-medium text-gray-900 ">Physical</label>
</div>
</div>

<div class="md:text-lg text-xs py-8">
        
             
        <div className='mt-0 text-center w-full px-2 mx-auto py-3 text-white bg-[#007AFF] rounded-md hover:bg-[#312ECB]'>
     <button className=''>Join the Waitlist</button>
     </div>

</div>

        <div className='text-center '>
            <h1 className=' text-xl font-medium'>Why Join the Waitlist:</h1>
        </div>
    
        <div className='p-3'>
            <h1 className='text-sm md:text-xl'> <span className='font-medium'>Be a Pioneer: </span>  Get a head start in the world of advertising by being among the first to experience AdMrt's revolutionary features. 
                Monetize Your <br />
                <span className='font-medium'>Space: </span> AdMrt opens up new opportunities to maximize your revenue by hosting ads on your space. <br />
                <span className='font-medium'>Targeted Advertising: </span> Advertisers can connect with the right ad space hosts to reach their target audience effectively. <br />
                <span className='font-medium'>Streamlined Process: </span> Say goodbye to intermediaries and enjoy a simplified ad buying and selling process. <br />
                <span className='font-medium'>Exclusive Updates: </span> Get the latest news, announcements, and sneak peeks delivered directly to your inbox.
            </h1>
        </div>

    

    

       <div className='p-3'>
            <h1 className=' text-xl font-medium text-center'>Who Should Join:</h1>
            <p className='md:text-xl text-sm'>
            <span className='font-medium'>Influencers and other adspace hosts:</span> If you own a platform with advertising space (social media, website, billboard, newsletter etc.), AdMrt offers you a new way to earn money by hosting ads.<br></br>
            <span className='font-medium'>Advertisers:</span>  If you're looking to promote your brand through strategic ad placements, AdMrt connects you with ideal ad space hosts.<br></br>

            <span className='font-medium'>How to join: </span>
            It's easy! Just enter your email address below, and we'll keep you in the loop with exclusive updates, early access, and more.
            </p>
        </div>
    




    </div>
  )
}

export default Home