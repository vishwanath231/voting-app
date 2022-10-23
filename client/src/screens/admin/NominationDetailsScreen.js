import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { getNominationDetails } from '../../redux/actions/adminActions';
import Loader from '../../components/Loader';
import Message from '../../components/Message';

const NominationDetailsScreen = ({ getNominationDetails, nominationDetails }) => {

    const { id } = useParams();

    useEffect(() => {
        if (id) {
            getNominationDetails(id)
        }
    }, [getNominationDetails, id])

    const { loading, nomination:user, error } = nominationDetails;

    
    return (
        <div className='w-full bg-gray-100 min-h-screen'>
            <div className='px-4 max-w-screen-xl mx-auto'>
                <div className='py-10'>
                    <Link to='/admin/nominationList' className='block w-fit bg-[#34508D] shadow-lg rounded px-4 py-2 text-white text-sm'>BACK</Link>
                    { loading ? <Loader /> : error ? <Message error msg={error} /> : (
                        <>
                            <div className='flex justify-between items-center flex-col mb-4 relative' >
                                <div>
                                    { user && user.profile && <img src={user.profile} alt='profile' className='w-60 bg-white p-4 shadow rounded-full' /> }
                                </div>
                                { user && user.name && <div className=' my-4 text-center text-xl md:text-3xl'>{ user.name }</div> }
                            </div>
                            <div className='grid lg:grid-cols-3 grid-cols-1 lg:gap-x-4 gap-y-4'>
                                <div className='w-full p-4 bg-white shadow-md rounded'>
                                    <div className='uppercase mb-4 px-4 text-xl text-[#dc143c] font-bold'>Party details</div>
                                    <div className='p-4 text-center'>
                                        <div className='flex justify-center items-center'>
                                            { user && user.party_logo && <img src={user.party_logo} alt='party logo' className='w-60 bg-gray-200 p-4 shadow rounded-full' /> }
                                        </div>
                                        { user && user.party_name && <div className='mt-5'><span className='font-bold text-[#34508D]'>PARTY NAME :</span> { user.party_name}</div> }
                                    </div>
                                </div>
                                <div className='col-span-2 p-4 bg-white shadow-md rounded'>
                                    <div className='uppercase mb-4 px-4 text-xl text-[#dc143c] font-bold'>peronal details</div>
                                    <div className='grid lg:grid-cols-2 grid-cols-1  gap-4'>
                                        <div className='p-4'>
                                            { user && user._id && <div className='py-1'><span className='font-bold text-[#34508D]'>ID :</span> { user._id }</div>} 
                                            { user && user.reg_no && <div className='py-1'><span className='font-bold text-[#34508D]'>REG NO :</span> { user.reg_no }</div> }
                                            { user && user.name && <div className='py-1'><span className='font-bold text-[#34508D]'>NAME :</span> { user.name }</div> }
                                            { user && user.email && <div className='py-1'><span className='font-bold text-[#34508D]'>EMAIL :</span> { user.email }</div> } 
                                            { user && user.phone_no && <div className='py-1'><span className='font-bold text-[#34508D]'>PHONE :</span> { user.phone_no }</div> }
                                        </div>
                                        <div className='p-4'>
                                            { user && user.birth_date && <div className='py-1'><span className='font-bold text-[#34508D]'>BIRTH DATE :</span> { user.birth_date }</div> }
                                            { user && user.blood_group && <div className='py-1'><span className='font-bold text-[#34508D]'>BLOOD GROUP :</span> { user.blood_group }</div> }
                                            { user && user.community && <div className='py-1'><span className='font-bold text-[#34508D]'>COMMUNITY :</span> { user.community }</div> }
                                            { user && user.gender && <div className='py-1'><span className='font-bold text-[#34508D]'>GENDER :</span> { user.gender }</div> }
                                            { user && user.parent_name && <div className='py-1'><span className='font-bold text-[#34508D]'>PARENT NAME :</span> { user.parent_name }</div> }
                                        </div>
                                    </div>
                                </div>
                                <div className='w-full p-4 bg-white shadow-md rounded'>
                                    <div className='uppercase mb-4 px-4 text-xl text-[#dc143c] font-bold'>location details</div>
                                    <div className='p-4'>
                                        { user && user.address && user.address.street && <div className='py-1'><span className='font-bold text-[#34508D]'>STREET :</span> { user.address.street }</div> }
                                        { user && user.address && user.address.city && <div className='py-1'><span className='font-bold text-[#34508D]'>CITY :</span> { user.address.city }</div> }
                                        { user && user.address && user.address.post && <div className='py-1'><span className='font-bold text-[#34508D]'>POST :</span> { user.address.post }</div> } 
                                        { user && user.address && user.address.taluk && <div className='py-1'><span className='font-bold text-[#34508D]'>TALUK :</span> { user.address.taluk }</div> }
                                        { user && user.address && user.address.district && <div className='py-1'><span className='font-bold text-[#34508D]'>DISTRICT :</span> { user.address.district }</div> }
                                        { user && user.address && user.address.pincode && <div className='py-1'><span className='font-bold text-[#34508D]'>PINCODE :</span> { user.address.pincode }</div> }
                                    </div>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    nominationDetails: state.nominationDetails
})

export default connect(mapStateToProps, { getNominationDetails })(NominationDetailsScreen);