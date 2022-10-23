import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { postNomination }  from '../redux/actions/adminActions';
import axios from 'axios';
const useNominationForm = () => {

    const dispatch = useDispatch()
    
    const [step, setStep] = useState(1)
    const [progress, setProgress] = useState(0)

    const [profile, setProfile] = useState({})
    const [partyLogo, setPartyLogo] = useState({})

    const [values, setValues] = useState({
        reg_no: '',
        name: '',
        email: '',
        phone_no: '',
        gender: '',
        birth_date: '',
        parent_name: '',
        community: '',
        door_no: '',
        street: '',
        city: '',
        taluk: '',
        post: '',
        district: '',
        pincode: '',
        party_name: '',
    })

    const [errors, setErrors] = useState({});

    const handleProfileClick = () => {
        document.getElementById("profile").click()
    }

    const handlePartyLogoClick = () => {
        document.getElementById("party_logo").click()
    }

    const handleProfile = e => {
        if (e.target.files[0]){

            const reader = new FileReader();

            reader.addEventListener("load", (e) => {
                document.getElementById('placeholder').setAttribute('src', e.target.result)
            })

            reader.readAsDataURL(e.target.files[0])
        }

        console.log(URL.createObjectURL(e.target.files[0]))

       setProfile((e.target.files[0].path))
    }



    const handlePartyLogo = e => {
        
        if (e.target.files[0]){

            const reader = new FileReader();

            reader.addEventListener("load", (e) => {
                document.getElementById('logo').setAttribute('src', e.target.result)
            })

            reader.readAsDataURL(e.target.files[0])
        }

        setPartyLogo(e.target.files[0])
    }


    const handleChange = e => {
        const { name, value } = e.target;

        setValues({
            ...values,
            [name] : value
        })

    }

    const stepOneCheck = () => {
    
        let error = {};
        
        if (!values.profile) {
            error.profile = "Profile is required!"
        }else if (!values.profile.name.match(/.(jpg|jpeg|png)$/i)) {
            error.profile = "File type is not supported!"
        }else  if (!values.name) {
            error.name = "Name is required!"
        }else {
         
            setStep(step + 1)
            setProgress(progress + 25)
        }
          
        setErrors(error)
       
    }
    
    
    
    const stepTwoCheck = () => {
    
        let error = {};

        var mob = /^[1-9]{1}[0-9]{9}$/;
        
        if(!values.reg_no){
            error.reg_no = "Register number is required!"
        }else if (!values.email) {
            error.email = "Email is required!" 
        }else if (!/\S+@\S+\.\S+/.test(values.email)){
            error.email = "Email address is invalid!"
        }else if (!values.phone_no) {
            error.phone_no = "Mobile number is required!"
        }else if (mob.test(values.phone_no) === false) {
            error.phone_no = "Please enter valid mobile number!"
        }else if (!values.gender){
            error.gender = "Gender is required!"
        }else {
            setStep(step + 1)
            setProgress(progress + 25)
        }
    
        setErrors(error);
       
    }
    
    
    
    const stepThreeCheck = () => {
    
        let error = {}; 
        
        if(!values.birth_date){
            error.birth_date = "Birth date is required!"
        }else if (!values.community) {
            error.community = "Community is required!" 
        }else if (!values.parent_name) {
            error.parent_name = "Parent name is required!"
        }else {
            setStep(step + 1)
            setProgress(progress + 25)
        }
    
        setErrors(error);
    }
    
    
    const stepFourCheck = () => {
    
        let error = {}; 
        
        var code = /^[1-9]{1}[0-9]{5}$/;
        
        if(!values.door_no){
            error.door_no = "Door number is required!"
        }else if (!values.street) {
            error.street = "Street is required!" 
        }else if (!values.city) {
            error.city = "City is required!"
        }else if (!values.taluk) {
            error.taluk = "Taluk is required!"
        }else if (!values.post) {
            error.post = "Post is required!"
        }else if (!values.district) {
            error.district = "District is required!"
        }else if (!values.pincode) {
            error.pincode = "Parent name is required!"
        }else if (code.test(values.pincode) === false){
            error.pincode = "Please enter valid pincode!"
        }else {
            setStep(step + 1)
            setProgress(progress + 25)
        }
    
        setErrors(error);
    }
    
    
  

    const handleSubmit = (e) => {
        e.preventDefault();
    //    let error = {}; 

    //     if (!values.party_logo) {
    //     error.party_logo = "Party logo is required!"
    //     }else if (!values.party_logo.name.match(/.(jpg|jpeg|png)$/i)) {
    //         error.party_logo = "File type is not supported!"
    //     }else if (!values.party_name) {
    //         error.party_name = "Party name is required!"
    //     }else {
            
    //         if (Object.keys(errors).length === 0) {
            
                const formData = new FormData();
                formData.append('profile', profile);
                formData.append('name', values.name);
                // formData.append('reg_no', values.reg_no);
                // formData.append('email', values.email);
                // formData.append('phone_no', values.phone_no);
                // formData.append('gender', values.gender);
                // formData.append('birth_date', values.birth_date);
                // formData.append('community', values.community);
                // formData.append('parent_name', values.parent_name);
                // formData.append('door_no', values.door_no);
                // formData.append('street', values.street);
                // formData.append('city', values.city);
                // formData.append('taluk', values.taluk);
                // formData.append('post', values.post);
                // formData.append('district', values.district);
                // formData.append('pincode', values.pincode);
                // formData.append('party_logo',partyLogo);
                // formData.append('party_name', values.party_name);
                    
                axios.post(`http://localhost:5000/api/admin/nomination/add`, {
                    name: values.name,
                    profile: profile
                })
                .then((res) => {
                    console.log(res);
                } )
                .catch((err) => {
                    console.log(err);
                })
            //    dispatch(postNomination(formData))
            //    console.log(formData)
               
        //     }
        // }

        // setErrors(error);
    };
    
    
    const prevStep = () => {
        setStep(step - 1)
        setProgress(progress - 25)
    }


    return {
        step,
        stepOneCheck,
        stepTwoCheck,
        stepThreeCheck,
        stepFourCheck,
        prevStep,
        handleSubmit,
        progress,
        handleProfileClick,
        handleProfile,
        handlePartyLogoClick,
        handlePartyLogo,
        handleChange,
        values,
        errors
    }
}




export default useNominationForm;