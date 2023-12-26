import React from 'react'
import './Main.css'
import { HiArrowLongRight } from "react-icons/hi2";
import { IoMdContacts } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { TiCloudStorage } from "react-icons/ti";
import { TiTick } from "react-icons/ti";
const Main = () => {
    return (
        <div className='main'>
            <h4 className='haedmain'>Choose a plan that's just right for you !</h4>
            <div className='row cardmain'>
                <div className='col-md-4'>
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title"><strong>Basic</strong></h5>
                            <h5 class="card-text">$ 9.99/mo</h5>
                            <a href="#" class="btn btn_one">Get Started <span><HiArrowLongRight /></span></a>
                            <hr />
                            <p className='text-start'>what you'll get:</p>
                            <div className='row'>
                                <div className='col-1 '>
                                    <IoMdContacts />
                                </div>
                                <div className='col '>
                                    <p className='text-start'> Upto 25 Users</p>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-1 '>
                                    <TiCloudStorage />
                                </div>
                                <div className='col '>
                                    <p className='text-start'> Upto 25gb Storage</p>
                                </div>
                            </div>

                            <div className='row'>
                                <div className='col-1 '>
                                    <MdEmail />
                                </div>
                                <div className='col '>
                                    <p className='text-start'> Email Support</p>
                                </div>
                            </div>
                            <h6 className='text-start text-my-own-color'><a href="#">EXPLORE FEATURES</a>
                            </h6>

                        </div>
                    </div>
                </div>
                <div className='col-md-4'>
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title "><strong>Standard</strong></h5>
                            <h5 class="card-text ">$ 9.99/mo</h5>
                            <a href="#" class="btn btn_two">Get Started <span><HiArrowLongRight /></span></a>
                            <hr />
                            <p className='text-start'>what you'll get:</p>
                            <div className='row'>
                                <div className='col-1 '>
                                    <IoMdContacts />
                                </div>
                                <div className='col '>
                                    <p className='text-start'> Upto 25 Users</p>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-1 '>
                                    <TiCloudStorage />
                                </div>
                                <div className='col '>
                                    <p className='text-start'> Upto 25gb Storage</p>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-1 '>
                                    <MdEmail />
                                </div>
                                <div className='col '>
                                    <p className='text-start'> Email Support</p>
                                </div>
                            </div>

                            <h6 className='text-start text-dark -own-color'><a href="#">EXPLORE FEATURES</a>
                            </h6>

                        </div>
                    </div>
                </div>
                <div className='col-md-4'>
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title"><strong>Premium</strong></h5>
                            <h5 class="card-text">$ 9.99/mo</h5>
                            <a href="#" class="btn btn_three">Get Started <span><HiArrowLongRight /></span></a>
                            <hr />
                            <p className='text-start'>what you'll get:</p>
                            <div className='row'>
                                <div className='col-1 '>
                                    <IoMdContacts />
                                </div>
                                <div className='col '>
                                    <p className='text-start'> Upto 25 Users</p>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-1 '>
                                    <TiCloudStorage />
                                </div>
                                <div className='col '>
                                    <p className='text-start'> Upto 25gb Storage</p>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-1 '>
                                    <MdEmail />
                                </div>
                                <div className='col '>
                                    <p className='text-start'> Email Support</p>
                                </div>
                            </div>

                            <h6 className='text-start text-my-own-color'><a href="#">EXPLORE FEATURES</a>
                            </h6>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row cardmaintwo">
                <div class="col-md-6">
                    <div class="card  ">
                        <div class="card-body">
                            <div className='row'>
                                <div className='col-6'>
                                    <a href="#" class="btn btn_four btn_shape"> Free Forever</a>
                                    <h5 class="card-title p-2"><strong>Free Starter</strong></h5>
                                    <p class="card-text"><strong>The quickest and easiest way to try Protocols with basic functionalities</strong></p>
                                    <a href="#" class="btn btn_four">Get Started <span><HiArrowLongRight /></span></a>
                                </div>
                                <div className='col-6'>
                                    <p className='text-start'>what you'll get:</p>
                                    <div className='row'>
                                        <div className='col-1 '>
                                            <IoMdContacts />
                                        </div>
                                        <div className='col '>
                                            <p className='text-start'> Upto 25 Users</p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='col-1 '>
                                            <TiCloudStorage />
                                        </div>
                                        <div className='col '>
                                            <p className='text-start'> Upto 25gb Storage</p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='col-1 '>
                                            <MdEmail />
                                        </div>
                                        <div className='col '>
                                            <p className='text-start'> Email Support</p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='col-1 '>
                                            <TiTick />
                                        </div>
                                        <div className='col '>
                                            <p className='text-start'>Basic of Documents, Team management </p>
                                        </div>
                                    </div>


                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="card  ">
                        <div class="card-body">
                            <div className='row'>
                                <div className='col-6'>
                                    <a href="#" class="btn btn_five btn_shape">Let's Connect</a>
                                    <h5 class="card-title p-2"><strong>Enterprise Plan</strong></h5>
                                    <p class="card-text" style={{ fontSize: '14px' }}>
                                        <strong>Effortlessly customize and fine-tune services as your needs shifts,ensuring the perfect tools for sucesss</strong>
                                    </p>
                                    <a href="#" class="btn btn_five">Contact Us <span><HiArrowLongRight /></span></a>
                                </div>
                                <div className='col-6'>
                                    <p className='text-start'>what you'll get:</p>
                                    <div className='row'>
                                        <div className='col-1 '>
                                            <IoMdContacts />
                                        </div>
                                        <div className='col '>
                                            <p className='text-start'> More than 75 Users</p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='col-1 '>
                                            <TiCloudStorage />
                                        </div>
                                        <div className='col '>
                                            <p className='text-start'> Upto 100gb Storage</p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='col-1 '>
                                            <MdEmail />
                                        </div>
                                        <div className='col '>
                                            <p className='text-start'> Email+Chat+Whatsapp Support</p>
                                        </div>
                                    </div>
                                    <h6 className='text-start text-my-own-color'><a href="#">EXPLORE FEATURES</a>
                                    </h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
<p className='text-primary text-end p-3'>*some unique features are provided as add-ons with individual plans for each features</p>
        </div>
    )
}

export default Main