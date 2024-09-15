import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
  return (
    <footer className="bg-white p-10">
      <div className="container mx-auto px-4">
        {/* First Row */}
        <div className="flex flex-wrap justify-between border-b pb-8">
          
          {/* Left Column */}
          <div className="w-full sm:w-1/2 md:w-1/4 lg:w-[30%] mb-8 mr-6">
            <h3 className="text-lg font-bold mb-4">UpperHand Market</h3>
            <ul>
              <li className="mb-1 text-xs">+1 302-803-5506</li>
              <li className="mb-1 text-xs">sales@UpperHandmarket.com</li>
              <li className="mb-4 text-xs">press@UpperHandarket.com</li>
            </ul>
            {/* Social Icons */}
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 h-8 flex justify-center items-center w-8 rounded-full bg-gray-200 hover:text-black">
                <i className="fab fa-linkedin text-lg"></i>
              </a>
              <a href="#" className="text-gray-500 h-8 flex justify-center items-center w-8 rounded-full bg-gray-200 hover:text-black">
                <i className="fab fa-youtube text-lg"></i>
              </a>
              <a href="#" className="text-gray-500 h-8 flex justify-center items-center w-8 rounded-full bg-gray-200 hover:text-black">
                <i className="fab fa-instagram text-lg"></i>
              </a>
              <a href="#" className="text-gray-500 h-8 flex justify-center items-center w-8 rounded-full bg-gray-200 hover:text-black">
                <i className="fab fa-facebook text-lg"></i>
              </a>
              <a href="#" className="text-gray-500 h-8 flex justify-center items-center w-8 rounded-full bg-gray-200 hover:text-black">
                <i className="fab fa-x text-lg"></i>
              </a>
            </div>
            {/* Certification */}
            <div className="space-y-2 flex mt-6 flex-col">
              <a href="#" className="inline-block bg-gray-100 px-4 py-2 rounded-md text-sm">
                <img src="https://via.placeholder.com/50" alt="HubSpot Partner" className="inline-block mr-2" />
                HubSpot Partner
              </a>
              <a href="#" className="inline-block bg-gray-100 px-4 py-2 rounded-md text-sm">
                <img src="https://via.placeholder.com/50" alt="Google Partner" className="inline-block mr-2" />
                Google Partner
              </a>
              <a href="#" className="inline-block bg-gray-100 px-4 py-2 rounded-md text-sm">
                <img src="https://via.placeholder.com/50" alt="BIMI Certified" className="inline-block mr-2" />
                BIMI Certified
              </a>
            </div>
          </div>

          {/* Second Column: What we do */}
          <div className="w-full sm:w-1/2 md:w-1/4 lg:w-[15%] mb-8">
            <div className='h-fit'>
              <h4 className="text-sm font-bold">What we do</h4>
              <ul className="space-y-1">
                <li><a href="#" className="hover:text-yellow-400 text-xs">Appointment setting</a></li>
                <li><a href="#" className="hover:text-yellow-400 text-xs">Lead nurturing</a></li>
                <li><a href="#" className="hover:text-yellow-400 text-xs">Lead research</a></li>
                <li><a href="#" className="hover:text-yellow-400 text-xs">Pricing</a></li>
                <li><a href="#" className="hover:text-yellow-400 text-xs">Switch to Upper Hand Market</a></li>
              </ul>
            </div>

            <div className='mt-5'>
              <h4 className="text-sm font-bold">Resources</h4>
              <ul className="space-y-1">
                <li><a href="#" className="hover:text-yellow-400 text-xs">Appointment setting</a></li>
                <li><a href="#" className="hover:text-yellow-400 text-xs">Lead nurturing</a></li>
                <li><a href="#" className="hover:text-yellow-400 text-xs">Lead research</a></li>
                <li><a href="#" className="hover:text-yellow-400 text-xs">Pricing</a></li>
                <li><a href="#" className="hover:text-yellow-400 text-xs">Switch to Upper Hand Market</a></li>
              </ul>
            </div>
          </div>

          {/* Third Column: Meet the Team */}
          <div className="w-full sm:w-1/2 md:w-1/4 lg:w-[15%] mb-8">
            <div className='h-fit'>
              <h4 className="text-sm font-bold">Meet The Team</h4>
              <ul className="space-y-1">
                <li><a href="#" className="hover:text-yellow-400 text-xs">Account manager</a></li>
                <li><a href="#" className="hover:text-yellow-400 text-xs">Content writer</a></li>
                <li><a href="#" className="hover:text-yellow-400 text-xs">Lead research specialist</a></li>
                <li><a href="#" className="hover:text-yellow-400 text-xs">Sales development representative</a></li>
                <li><a href="#" className="hover:text-yellow-400 text-xs">Email specialist</a></li>
              </ul>
            </div>

            <div className='mt-5'>
              <h4 className="text-sm font-bold">Company</h4>
              <ul className="space-y-1">
                <li><a href="#" className="hover:text-yellow-400 text-xs">About us</a></li>
                <li><a href="#" className="hover:text-yellow-400 text-xs">Careers</a></li>
                <li><a href="#" className="hover:text-yellow-400 text-xs">Affiliate program</a></li>
                <li><a href="#" className="hover:text-yellow-400 text-xs">News & press</a></li>
                <li><a href="#" className="hover:text-yellow-400 text-xs">Awards</a></li>
                <li><a href="#" className="hover:text-yellow-400 text-xs">Contact us</a></li>
              </ul>
            </div>
          </div>

          {/* Fourth Column: Customer Success */}
          <div className="w-full sm:w-1/2 md:w-1/4 lg:w-[15%] mb-8">
            <div className='h-fit'>
              <h4 className="text-sm font-bold">Customer Success</h4>
              <ul className="space-y-1">
                <li><a href="#" className="hover:text-yellow-400 text-xs">Case studies</a></li>
                <li><a href="#" className="hover:text-yellow-400 text-xs">Reviews & testimonials</a></li>
                <li><a href="#" className="hover:text-yellow-400 text-xs">ROI calculator</a></li>
                <li><a href="#" className="hover:text-yellow-400 text-xs">Industries</a></li>
              </ul>
            </div>

            <div className='mt-5'>
              <h4 className="text-sm mb-3 font-bold">Upper Hand Products</h4>
              <ul className="space-y-1">
                <li>
                  <a href="#" className="hover:text-yellow-400 text-xs flex items-center">
                    <img src="https://via.placeholder.com/25" alt="Folderly" className="inline-block mr-2" />
                    Folderly
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-yellow-400 text-xs flex items-center">
                    <img src="https://via.placeholder.com/25" alt="Charge" className="inline-block mr-2" />
                    Charge
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="mt-8 border-t pt-4 text-center">
          <p className="text-sm text-gray-500">&copy; 2024 UpperHand Market Inc. All rights reserved.</p>
          <div className="flex justify-center space-x-4 text-xs mt-2">
            <a href="#" className="text-gray-500 hover:text-black">Cookie Policy</a>
            <a href="#" className="text-gray-500 hover:text-black">Terms of Use</a>
            <a href="#" className="text-gray-500 hover:text-black">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
