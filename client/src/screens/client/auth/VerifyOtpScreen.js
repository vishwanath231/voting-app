import React,{ useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import LOGO from '../../../assets/img/logo.jpg';
import { connect } from 'react-redux';
import { userVerifyOTP } from '../../../redux/actions/authActions';
import Loader from '../../../components/Loader';
import Message from '../../../components/Message';

const VerifyOtpScreen = ({ verifyOtp, userVerifyOTP }) => {

    const navigate = useNavigate();

    const [verifyData, setVerifyData] = useState({
        pin: ''
    })


    const { loading, info, error } = verifyOtp;


    const handleChange = e => {
        const { name, value } = e.target;

        setVerifyData({
            ...verifyData,
            [name]: value
        })
    }

    useEffect(() => {
      
        if (info) {
            navigate('/home')
        }

    }, [info, navigate])


    const handleSubmit = (e) => {
        e.preventDefault();

        userVerifyOTP(verifyData);
    }
   

    return (
        <main className='screen__height'>
        <div className='px-4 max-w-3xl my-9 mx-auto'>
            <div className='flex justify-center items-center mb-14'>
                <Link to='/' className='text-center'>
                    <img src={LOGO} alt="logo" className='w-40' />
                </Link>
            </div>
            {loading && <Loader />}
            <div className='text-4xl font-light uppercase mb-7'>Verification OTP</div>
            {error && <Message error msg={error} />}
            <form onSubmit={handleSubmit}>
                <div className="mb-6">
                    <label htmlFor="pin" className="block mb-2 text-sm font-medium text-gray-900">OTP<span className='text-red-500 text-base'>*</span></label>
                    <input 
                        type="number" 
                        id="pin" 
                        name='pin' 
                        onChange={handleChange}
                        value={verifyData.pin}
                        placeholder="2de3"
                        className="shadow-sm lowercase bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"  
                    />
                </div>
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Verify</button>
            </form>
        </div>
    </main>
    )
}

const mapStateToProps = (state) => ({
    verifyOtp: state.verifyOtp
})

export default connect( mapStateToProps, { userVerifyOTP })(VerifyOtpScreen);