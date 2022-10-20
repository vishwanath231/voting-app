import React from 'react';
import { Link } from 'react-router-dom';
import './main.css';
import { FiHome, FiPackage } from 'react-icons/fi';
import { TbDashboard } from 'react-icons/tb';
import { MdOutlineDeliveryDining } from 'react-icons/md';
import { BiLogOutCircle } from 'react-icons/bi';
import { connect } from 'react-redux';
import { logout } from '../../../redux/actions/authActions';


const MenuItem = ({ logout }) => {

    const logoutHandler = () => {
        logout()
    }

    return (
        <div className='mt-7 md:mt-0'>

            <div className='mb-3'>
                <Link to='/admin/dashboard' className="block py-2 px-4 hover:bg-gray-100">
                    <div className='flex items-center'>
                        <TbDashboard className='text-xl text-[#34508D] mr-1' />
                        <p>Dashboard</p>
                    </div>
                </Link>
            </div>

            <div className='mb-3'>
                <Link to='/admin/orderList' className="block py-2 px-4 hover:bg-gray-100">
                    <div className='flex items-center'>
                        <MdOutlineDeliveryDining className='text-xl text-[#34508D] mr-1' />
                        <p>Vote</p>
                    </div>
                </Link>
            </div>

            <div className='mb-3'>
                <Link to='/admin/productList' className="block py-2 px-4 hover:bg-gray-100">
                    <div className='flex items-center'>
                        <FiPackage className='text-xl text-[#34508D] mr-1' />
                        <p>Users</p>
                    </div>
                </Link>
            </div>

            <div className='mb-3'>
                <Link to='/admin/orderList' className="block py-2 px-4 hover:bg-gray-100">
                    <div className='flex items-center'>
                        <MdOutlineDeliveryDining className='text-xl text-[#34508D] mr-1' />
                        <p>Nomination</p>
                    </div>
                </Link>
            </div>

            <div className='mb-3'>
                <Link to='/admin/orderList' className="block py-2 px-4 hover:bg-gray-100">
                    <div className='flex items-center'>
                        <MdOutlineDeliveryDining className='text-xl text-[#34508D] mr-1' />
                        <p>Analysis</p>
                    </div>
                </Link>
            </div>

            <div className='mb-3'>
                <button onClick={logoutHandler} className="block py-2 px-4 hover:bg-gray-100">
                    <div className='flex items-center'>
                        <BiLogOutCircle className='text-xl text-[#34508D] mr-1' />
                        <p>Logout</p>
                    </div>
                </button>
            </div>
        </div>
    )
}

export default connect(null, { logout })(MenuItem);