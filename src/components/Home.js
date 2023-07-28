import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../css/Navbar.css';
import { useEffect, useState } from 'react';
import { FaRupeeSign } from "react-icons/fa";
import {AiOutlineCloseCircle} from "react-icons/ai";
import { toast } from 'react-toastify';
// import { carobjects } from './cars';
import axios from 'axios';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";



export function Home() {

    const [signupFormData, setSignupFormData] = useState({
        name: '',
        email: '',
        password: '',
      });
    
      const [signinFormData, setSigninFormData] = useState({
        email: '',
        password: '',
      });
    
      // Function to handle changes in the signup form fields
  const handleSignupChange = (e) => {
    const { name, value } = e.target;
    setSignupFormData({
      ...signupFormData,
      [name]: value,
    });
  };

  // Function to handle changes in the signin form fields
  const handleSigninChange = (e) => {
    const { name, value } = e.target;
    setSigninFormData({
      ...signinFormData,
      [name]: value,
    });
  };
      // Function to handle signup form submission
      const handleSignupSubmit = (e) => {
        e.preventDefault();
    
        axios.post(`${process.env.REACT_APP_BASE_URL}/auth/signup`, signupFormData)
          .then((response) => {
            console.log(response.data);
            // Show success message or perform any other action on successful signup
          })
          .catch((error) => {
            console.error(error);
            // Show error message or perform any other action on signup failure
          });
      };
    
      // Function to handle signin form submission
      const handleSigninSubmit = async (e) => {
  e.preventDefault();
  console.log(signinFormData); // Add this line to check the signinFormData before sending the request
  try {
    const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/auth/signin`, { ...signinFormData });
    console.log(response);
    toast.success('SignedIn successfully');
    if (response.data) {
      localStorage.setItem("token", response.data);
      
    }
  } catch (err) {
    console.log(err);
    toast.error('Please provide a valid email address and password.');
  }
};


    const [car, setCar] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/car.json")
            .then(res => res.json())
            .then(data => setCar(data))
    }, [])

    const [bType, setBType] = useState("");
    const [lType, setLType] = useState("");

    const bSearch = (cars) => {
        return cars.filter(value => value.type.includes(bType));
    }

    const lSearch = (cars) => {
        return cars.filter(value => value.type.includes(lType));
    }

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    function buttoncloseRegister() {
        let closeRegisterForm = document.getElementById("registerFORM");
        closeRegisterForm.style.display = "none";
    }

    function buttoncloseLogin(){
        let closeRegisterForm = document.getElementById("loginFORM");
        closeRegisterForm.style.display = "none";
    }


    return (<>
        <div className="container-fluid homepage">
            <div className='back-ground'>
                <div className="registerloginform">
                    <div className='registerFORM' id="registerFORM">
                        <div className="registerForm" id="registerform" >
                            <div className="mb-3 icondiv">
                                 <AiOutlineCloseCircle className="closeicon" onClick={buttoncloseRegister}></AiOutlineCloseCircle>
                            </div>
                            <form onSubmit={handleSignupSubmit}>
                                <div class="mb-3">
                                    <label for="name" class="form-label">Name</label>
                                    <input
                                    type='text'
                                     className='form-control'
                                     id='name'
                                     name='name'
                                     placeholder='Enter your name'
                                     value={signupFormData.name}
                                     onChange={handleSignupChange}
                                     />
                                </div>
                                <div class="mb-3">
                                    <label for="email" class="form-label">Email </label>
                                    <input
                                    type='email'
                                    className='form-control'
                                     id='email'
                                    name='email'
                                    placeholder='Enter your email'
                                    aria-describedby='emailHelp'
                                    value={signupFormData.email}
                                    onChange={handleSignupChange}
                    />
                                </div>
                                
                                <div class="mb-3">
                                    <label for="password" class="form-label">Password</label>
                                    <input
                                    type='password'
                                    className='form-control'
                                    name='password'
                                    id='password'
                                    placeholder='Enter your password'
                                    value={signupFormData.password}
                                    onChange={handleSignupChange}
                                    />
                                </div>
                                

                                <button type="submit" class="btn btn-primary">Submit</button>
                            </form>
                        </div>
                    </div>
                    <div className='loginFORM' id="loginFORM">
                        <div className="registerForm" id="loginform" >
                            <div className="mb-3 icondiv">
                                 <AiOutlineCloseCircle className="closeicon" onClick={buttoncloseLogin}></AiOutlineCloseCircle>
                            </div>
                            <form onSubmit={handleSigninSubmit}>
                                <div class="mb-3">
                                <label for="email" class="form-label">Email </label>
                                <input
                                type='email'
                                className='form-control'
                                id='email'
                                name='email'
                                placeholder='Enter your email'
                                aria-describedby='emailHelp'
                                value={signinFormData.email}
                                onChange={handleSigninChange}
                               />
                                </div>
                                <div class="mb-3">
                                    <label for="password" class="form-label">Password</label>
                                    <input
                                    type='password'
                                    className='form-control'
                                    name='password'
                                    id='password'
                                    placeholder='Enter your password'
                                    value={signinFormData.password}
                                    onChange={handleSigninChange}
                                     />
                                </div>
                                <button type="submit" class="btn btn-primary">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='container p-4'>

            {/* <div><h2 className='text-white'>Here is your budjet list </h2></div>
            <div className="d-flex flex-row typeButton mt-4">
                    <button className="typebutton" onClick={e => setLType(e.target.value)}>ALL cars</button>
                    <button className="typebutton" value={"HATCHBACK"} onClick={e => setLType(e.target.value)}>HATCHBACK</button>
                    <button className="typebutton" value={"SEDAN"} onClick={e => setLType(e.target.value)}>SEDAN</button>
                    <button className="typebutton" value={"SUV"} onClick={e => setLType(e.target.value)}>SUV</button>
                    <button className="typebutton" value={"MUV"} onClick={e => setLType(e.target.value)}>MUV</button>
                </div>

            <div className="mt-5">
                <Slider {...settings}>
                    {
                        bSearch(car).map((value, index) => (
                            value.endPrice < 2000001 ?
                                <div className="card cardCarousel1">
                                    <img className="d-block carouselImage" src={value.image} alt="First slide" />
                                    <div className="card-body">
                                        <h5 className="card-title">{value.name}&nbsp;{value.model}</h5>
                                        <p className="card-text"><FaRupeeSign className="icons"></FaRupeeSign>{value.startPrice / 100000} - {value.endPrice / 100000} lakh*</p>
                                        <a href={value.source} target="blank" className="btn btn-primary">Check here</a>
                                    </div>
                                </div> : " "
                        ))
                    }
                </Slider>
            </div> */}
            {/* <div className='mt-5'>
                <div><h2 className='text-white'>Here is your Luxury list </h2></div>
                <div className="d-flex flex-row typeButton mt-4">
                    <button className="typebutton" onClick={e => setLType(e.target.value)}>ALL cars</button>
                    <button className="typebutton" value={"HATCHBACK"} onClick={e => setLType(e.target.value)}>HATCHBACK</button>
                    <button className="typebutton" value={"SEDAN"} onClick={e => setLType(e.target.value)}>SEDAN</button>
                    <button className="typebutton" value={"SUV"} onClick={e => setLType(e.target.value)}>SUV</button>
                    <button className="typebutton" value={"MUV"} onClick={e => setLType(e.target.value)}>MUV</button>
                </div>
                <div className="mt-5">
                    <Slider {...settings}>
                        {
                            lSearch(car).map((value, index) => (
                                value.startPrice > 2000000 ?
                                    <div className="card cardCarousel1">
                                        <img className="d-block carouselImage" src={value.image} alt="First slide" />
                                        <div className="card-body">
                                            <h5 className="card-title">{value.name}&nbsp;{value.model}</h5>
                                            <p className="card-text"><FaRupeeSign className="icons"></FaRupeeSign>{value.startPrice / 100000} - {value.endPrice / 100000} lakh*</p>
                                            <a href={value.source} target="blank" className="btn btn-primary">Check here</a>
                                        </div>
                                    </div> : " "
                            ))
                        }
                    </Slider>
                </div>
            </div> */}
            <div className="offerscroll">&nbsp;</div>
            <div className='row mt-5 p-3 '>
                <h1 className="text-white">Offers and discounts</h1>
                <div className="col-lg-4 mt-3">
                    <div class="card offerCard">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSixoVmYF2N36rXvyztLkznQ5xP6mT9gcyz7Q&usqp=CAU" height="230px" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Today offer</h5>
                            <p class="card-text">We providing extra 1 year waranty for your bikes</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 mt-3">
                    <div class="card offerCard">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBuRlsRoK0qRnxzYDx8gUsQIx-ZMngBdkzhQ&usqp=CAU" height="230px" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Limited time offer</h5>
                            <p class="card-text">10% discount for your bike accessories</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 mt-3">
                    <div class="card offerCard">
                        <img src="https://png.pngtree.com/png-vector/20190629/ourlarge/pngtree-25-off-discount-and-sale-promotion-banner-png-image_1517601.jpg" height="230px" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Limited time offer</h5>
                            <p class="card-text">25% discount for your bike insurance</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
    );
}