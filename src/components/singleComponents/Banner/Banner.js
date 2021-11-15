import React from 'react';
import bike from "../../../img/banner.png"

const Banner = () => {
    return (
        <div>
            <div className='container mx-auto'>
                <div className='flex flex-col md:flex-row items-center'>
                    <div className='md:w-3/5 mx-4'>
                        <div className='md:text-5xl text-3xl font-bold'>
                            <h2>
                                <span className='text-primary'>Forget</span>{" "}
                                Everything
                            </h2>
                            <h2>
                                AND{" "}
                                <span className='text-primary'>Ride</span>
                            </h2>
                        </div>
                        <div className='py-8 md:pr-24 '>
                            <p className="mb-2">
                                Riding bike is an best feeling and if you are in depression or feeling lonely then take your bike pull the throttle and go for ride
                            </p>
                            <p>
                                It will make you feel free and riding with person we love its a different feeling.
                            </p>
                        </div>
                        <div>
                            <button className='bg-yellow-200 text-black px-2 py-1 rounded font-semibold'>
                                Check Our Bikes
                            </button>
                        </div>
                    </div>
                    <div className='w-2/5 bg-yellow-100 rounded-l-full'>
                        <img className='mx-auto py-8' src={bike} alt='' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;