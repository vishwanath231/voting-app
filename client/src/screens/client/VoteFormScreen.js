import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import { BiHomeAlt } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const VoteFormScreen = () => {
    return (
        <>
            <Navbar />
            <div className='pt-28 pb-10 bg-gray-100 min-h-screen'>
                <div className='max-w-screen-lg px-10 my-0 mx-auto'>
                     <Link to='/home' className='block flex items-center w-fit bg-[#34508D] hover:bg-black duration-700 shadow-lg rounded px-4 py-2 text-white text-sm'>
                     <BiHomeAlt className='mr-1' />Home
                     </Link>
                </div>
                <div className='max-w-lg my-0 mx-auto px-10'>
                     <form className='shadow p-10 rounded-md shadow-white bg-white'>
                     <div className='text-center text-2xl font-medium mb-6'>Vote Form</div>
                          <div className='w-full mb-4'>
                <label htmlFor="reg_no" className="block mb-2 text-sm font-medium text-gray-900">Register No<span className='text-red-500 text-base'>*</span></label>
                <input
                    type='text'
                    name='reg_no'
                    id='reg_no'
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                />
            </div>
            <div className='w-full mb-4'>
                <label htmlFor="vote" className="block mb-2 text-sm font-medium text-gray-900">Vote <span className='text-red-500 text-base'>*</span></label>
                <select 
                	id="vote" 
                	name='vote' 
                	className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                >
                    <option value="">vote</option>	
                    <option value="Pen">Pen</option>
                    <option value="Pencil">Pencil</option>
                </select>
            </div>
                     <button type='submit' className='uppercase w-full duration-700 hover:bg-[#34508D] bg-black text-white text-sm text-center p-2.5 rounded shadow mt-8'>submit</button>
                     </form>
                </div>
            </div>
        </>
    )
}

export default VoteFormScreen;
