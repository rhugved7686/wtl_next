 import React from 'react'

    const contact = () => {
      return (
            <div>
        <section className="relative py-20 bg-center bg-cover breadcrumb-area" style={{ backgroundImage: 'url(/images/hero-bg.jpg)' }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container relative z-10 px-4 mx-auto">
            <div className="flex items-center justify-between">
            <div className="w-full lg:w-1/2">
                <div className="breadcrumb-content">
                <div className="section-heading">
                    <h2 className="text-3xl font-semibold text-white">Contact Us</h2>
                </div>
                </div>
            </div>
            <div className="w-full text-right lg:w-1/2">
                <div className="breadcrumb-list">
                <ul className="flex justify-end space-x-4 text-white">
                    <li>
                    <a href="/" className="transition duration-300 hover:text-gray-300">Home</a>
                    </li>
                </ul>
                </div>
            </div>
            </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 bread-svg-box">
            <svg className="w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 10" preserveAspectRatio="none">
            <polygon points="100 0 50 10 0 0 0 10 100 10" />
            </svg>
        </div>
        </section>


        

            {/* Contact Form Section */}
            <section className="py-12 contact-area">
                <div className="container px-4 mx-auto">
                <div className="flex flex-wrap">
                    <div className="w-full lg:w-2/3">
                    <div className="p-8 bg-white rounded-lg shadow-lg form-box">
                        <div className="form-content">
                        <div className="contact-form-action">
                            <form method="post" className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                            <div className="input-box">
                                <label className="text-sm label-text">Your Name</label>
                                <div className="relative form-group">
                                <span className="absolute text-gray-500 left-3 top-3">🧑</span>
                                <input
                                    className="w-full py-2 pl-10 border border-gray-300 rounded-md form-control"
                                    type="text"
                                    name="text"
                                    placeholder="Your name"
                                />
                                </div>
                            </div>
                            <div className="input-box">
                                <label className="text-sm label-text">Your Email</label>
                                <div className="relative form-group">
                                <span className="absolute text-gray-500 left-3 top-3">📧</span>
                                <input
                                    className="w-full py-2 pl-10 border border-gray-300 rounded-md form-control"
                                    type="email"
                                    name="email"
                                    placeholder="Email address"
                                />
                                </div>
                            </div>
                            <div className="w-full">
                                <div className="input-box">
                                <label className="text-sm label-text">Message</label>
                                <div className="relative form-group">
                                    <span className="absolute text-gray-500 left-3 top-3">✍️</span>
                                    <textarea
                                    className="w-full py-2 pl-10 border border-gray-300 rounded-md message-control form-control"
                                    name="message"
                                    placeholder="Write message"
                                    ></textarea>
                                </div>
                                </div>
                            </div>
                            <div className="w-full">
                                <div className="mt-4 btn-box">
                                <button type="button" className="px-6 py-2 text-white transition bg-blue-600 rounded-md theme-btn hover:bg-blue-800">Send Message</button>
                                </div>
                            </div>
                            </form>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="w-full mt-8 lg:w-1/3 lg:mt-0">
                    <div className="p-8 bg-white rounded-lg shadow-lg form-box">
                        <div className="form-content">
                        <div className="address-book">
                            <ul className="space-y-6 list-items contact-address">
                            <li className="flex items-start">
                                <i className="mr-3 text-xl text-blue-600 la la-map-marker"></i>
                                <div>
                                <h5 className="text-gray-800 title font-size-16">Address</h5>
                                <p className="text-gray-600 map__desc">
                                    Office No. 009, wing-A Downtown CityVista, Kharadi, Pune-411014
                                </p>
                                </div>
                            </li>
                            <li className="flex items-start">
                                <i className="mr-3 text-xl text-blue-600 la la-phone"></i>
                                <div>
                                <h5 className="text-gray-800 title font-size-16">Phone</h5>
                                <p className="text-gray-600 map__desc">Mobile: +91 9130030054</p>
                                <p className="text-gray-600 map__desc">Mobile: +91 2041295329</p>
                                </div>
                            </li>
                            </ul>
                            <ul className="flex justify-center mt-6 space-x-4 social-profile">
                            <li><a href="#" className="text-blue-600 hover:text-blue-800"><i className="lab la-facebook-f"></i></a></li>
                            <li><a href="https://x.com/world_trip_link" className="text-blue-600 hover:text-blue-800"><i className="lab la-twitter"></i></a></li>
                            <li><a href="#" className="text-blue-600 hover:text-blue-800"><i className="lab la-instagram"></i></a></li>
                            <li><a href="#" className="text-blue-600 hover:text-blue-800"><i className="lab la-linkedin-in"></i></a></li>
                            <li><a href="#" className="text-blue-600 hover:text-blue-800"><i className="lab la-youtube"></i></a></li>
                            </ul>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </section>
            <footer className="bg-[#f5f7fc] py-8">
        <div className="container flex items-center justify-between px-4 mx-auto">
            {/* Left Side (Copyright & Text) */}
            <div className="text-center lg:text-left">
            <div className="mt-2 term-box">
                <p className="text-sm text-gray-600">
                &copy; Copyright WTL 2023 Made with
                <span className="text-red-500"> ❤️ </span> by
                <a href="https://www.cobaztech.com/" className="text-blue-600 transition duration-300 hover:text-blue-800">cobaztech</a>
                </p>
            </div>
            </div>

            {/* Right Side (Social Media Links) */}
            <div className="text-center">
            <ul className="flex justify-center space-x-6">
                <li>
                <a
                    href="https://www.facebook.com/profile.php?id=61554946222967&mibextid=ZbWKwL"
                    className="text-[#3b5998] text-xl hover:text-blue-700 transition duration-300"
                >
                    <i className="lab la-facebook-f"></i>
                </a>
                </li>
                <li>
                <a
                    href="https://x.com/world_trip_link"
                    className="text-[#1da1f2] text-xl hover:text-blue-500 transition duration-300"
                >
                    <i className="lab la-twitter"></i>
                </a>
                </li>
                <li>
                <a
                    href="https://www.instagram.com/worldtriplink/"
                    className="text-[#e1306c] text-xl hover:text-pink-600 transition duration-300"
                >
                    <i className="lab la-instagram"></i>
                </a>
                </li>
                <li>
                <a
                    href="https://www.linkedin.com/in/world-trip-link9562762a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                    className="text-[#0077b5] text-xl hover:text-blue-800 transition duration-300"
                >
                    <i className="lab la-linkedin-in"></i>
                </a>
                </li>
            </ul>
            </div>
        </div>
        </footer>

            </div>
            
     )
    }
 export default contact