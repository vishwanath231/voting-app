import React,{ useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import LOGO from '../../../assets/img/logo.jpg';
// import Loader from '../../../components/Loader';
// import Message from '../../../components/Message';

const UserGenerateOtpScreen = () => {

    const [contactInfo, setContactInfo] = useState('email')

    const [loginData, setLoginData] = useState({
        email: '',
        phone_no: '',
        pin: '',
    });


    const handleChange = e => {
        const { name, value } = e.target;

        setLoginData({
            ...loginData,
            [name]: value
        })
    }
    

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(loginData);
    }

    const contactInfoHandler = (e) => {

        setContactInfo(e.target.value)
    }


    return (
        <main className='screen__height'>
            <div className='px-4 max-w-3xl my-9 mx-auto'>
                <div className='flex justify-center items-center mb-14'>
                    <Link to='/' className='text-center'>
                        <img src={LOGO} alt="logo" className='w-40' />
                    </Link>
                </div>
                <div className='text-4xl font-light uppercase mb-7'>Generate OTP</div>
                
                <form onSubmit={handleSubmit}>

                    <div className='flex md:items-center flex-col md:flex-row mb-5'>
                        <div className="flex items-center mr-0 mb-3 md:mr-6 md:mb-0">
                            <input 
                            id="default-radio-1" 
                            type="radio" 
                            value="email" 
                            name="contact" 
                            onChange={contactInfoHandler}
                            checked={ contactInfo === 'email' }
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500" />
                            <label htmlFor="default-radio-1" className="ml-1 text-sm font-medium text-gray-900"> Email</label>
                        </div>
                        <div className="flex items-center">
                            <input 
                            id="default-radio-2" 
                            type="radio" 
                            value="phone" 
                            name="contact"
                            onChange={contactInfoHandler}
                            checked={ contactInfo === 'phone' }
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500" />
                            <label htmlFor="default-radio-2" className="ml-1 text-sm font-medium text-gray-900">Phone</label>
                        </div>
                    </div>

                    {
                        contactInfo === 'email' &&
                        <div>
                            <div className="mb-6">
                                <label htmlFor="email" className="block mb-2 text-md font-medium text-gray-900">Verification Email <span className='text-red-500 text-base'>*</span></label>
                                <input 
                                    type="email" 
                                    id="email" 
                                    name='email' 
                                    onChange={handleChange}
                                    value={loginData.reg_no}
                                    placeholder="example@support.com"
                                    className="shadow-sm lowercase bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"  
                                />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="pin" className="block mb-2 text-md font-medium text-gray-900">Generate Pin only two digits <span className='text-red-500 text-base'>*</span></label>
                                <input 
                                    type="number" 
                                    id="pin" 
                                    name='pin' 
                                    onChange={handleChange}
                                    value={loginData.password}
                                    placeholder="*****"
                                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"  
                                />
                            </div>
                        </div>
                    }



{
                        contactInfo === 'phone' &&
                        <div>
                            <div className="mb-6">
                                <label htmlFor="phone_no" className="block mb-2 text-md font-medium text-gray-900">Phone No <span className='text-red-500 text-base'>*</span></label>
                                <input 
                                    type="number" 
                                    id="phone_no" 
                                    name='phone_no' 
                                    onChange={handleChange}
                                    value={loginData.reg_no}
                                    placeholder="1234567890"
                                    className="shadow-sm lowercase bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"  
                                />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="pin" className="block mb-2 text-md font-medium text-gray-900">Generate Pin only two digits<span className='text-red-500 text-base'>*</span></label>
                                <input 
                                    type="number" 
                                    id="pin" 
                                    name='pin' 
                                    onChange={handleChange}
                                    value={loginData.password}
                                    placeholder="*****"
                                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"  
                                />
                            </div>
                        </div>
                    }
                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Submit</button>
                </form>
            </div>
        </main>
    )
}

export default UserGenerateOtpScreen;