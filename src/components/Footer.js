
import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col w-full mx-auto">
      <a href="#">
        <div className="flex bg-[#485769] hover:bg-[#546479] justify-center">
          <p className="text-white text-xs py-4">Back to top</p>
        </div>
      </a>

      <div className="w-full bg-[#37475a] text-xs sm:text-base text-white border-gray-500 py-10 border-b-2">
        <div className="max-w-6xl mx-auto">
          <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-4 place-items-center items-start">
            <div className="text-white ">
              <h3 className="font-bold mb-3">Get to Know Us</h3>
              <ul className="flex flex-col gap-2 text-sm">
                <li className="hover:underline">
                  <a href="/">About Us</a>
                </li>
                <li className="hover:underline">
                  <a href="/">Careers</a>
                </li>
                <li className="hover:underline">
                  <a href="/">Press Releases</a>
                </li>
                <li className="hover:underline">
                  <a href="/">Amazon Science</a>
                </li>
              </ul>
            </div>

            <div className="text-white ">
              <h3 className="font-bold mb-3">Connect with Us</h3>
              <ul className="flex flex-col gap-2 text-sm">
                <li className="hover:underline">
                  <a href="/">Facebook</a>
                </li>
                <li className="hover:underline">
                  <a href="/">Twitter</a>
                </li>
                <li className="hover:underline">
                  <a href="/">Instagram</a>
                </li>
              </ul>
            </div>

            <div className="text-white ">
              <h3 className="font-bold mb-3">Make Money with Us</h3>
              <ul className="flex flex-col gap-2 text-sm">
                <li className="hover:underline">
                  <a href="/">Sell on Amazon</a>
                </li>
                <li className="hover:underline">
                  <a href="/">Sell under Amazon Accelerator</a>
                </li>
                <li className="hover:underline">
                  <a href="/">Protect and Build Your Brand</a>
                </li>
                <li className="hover:underline">
                  <a href="/">Amazon Global Selling</a>
                </li>
                <li className="hover:underline">
                  <a href="/">Become an Affiliate</a>
                </li>
                <li className="hover:underline">
                  <a href="/">Fulfilment by Amazon</a>
                </li>
                <li className="hover:underline">
                  <a href="/">Advertise Your Products</a>
                </li>
                <li className="hover:underline">
                  <a href="/">Amazon Pay on Merchants</a>
                </li>
              </ul>
            </div>

            <div className="text-white ">
              <h3 className="font-bold mb-3">Let Us Help You</h3>
              <ul className="flex flex-col gap-2 text-sm ">
                <li className="hover:underline">
                  <a href="/">Amazon and COVID-19</a>
                </li>
                <li className="hover:underline">
                  <a href="/">Your Account</a>
                </li>
                <li className="hover:underline">
                  <a href="/">Your Orders</a>
                </li>
                <li className="hover:underline">
                  <a href="/">Shipping Rates & Policies</a>
                </li>
                <li className="hover:underline">
                  <a href="/">Returns & Replacements</a>
                </li>
                <li className="hover:underline">
                  <a href="/">Manage Your Content and Devices</a>
                </li>
                <li className="hover:underline">
                  <a href="/">Amazon Assistant</a>
                </li>
                <li className="hover:underline">
                  <a href="/">Help</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-[#37475a] flex flex-col items-center justify-center gap-6 py-6">
        <div className="w-full bg-[#37475a] flex  items-center justify-center gap-20 ">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
            alt="amazon-logo"
            className=" w-20 pt-3"
          />
          <div
            className="flex gap-1 items-center justify-center border border-gray-500 hover:cursor-pointer 
          px-2 py-1 text-white rounded-sm"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
              />
            </svg>

            <p>English</p>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <ul
            className="flex max-md:flex-col items-center text-xs text-white space-x-4 
          max-md:space-y-2"
          >
            <li className="hover:underline">
              <a href="/">Australia</a>
            </li>
            <li className="hover:underline">
              <a href="/">Brazil</a>
            </li>
            <li className="hover:underline">
              <a href="/">Canada</a>
            </li>
            <li className="hover:underline">
              <a href="/">China</a>
            </li>
            <li className="hover:underline">
              <a href="/">France</a>
            </li>
            <li className="hover:underline">
              <a href="/">Germany</a>
            </li>
            <li className="hover:underline">
              <a href="/">Italy</a>
            </li>
            <li className="hover:underline">
              <a href="/">Japan</a>
            </li>
            <li className="hover:underline">
              <a href="/">Mexico</a>
            </li>
            <li className="hover:underline">
              <a href="/">Netherlands</a>
            </li>
            <li className="hover:underline">
              <a href="/">Poland</a>
            </li>
            <li className="hover:underline">
              <a href="/">Singapore</a>
            </li>
            <li className="hover:underline">
              <a href="/">Spain</a>
            </li>
            <li className="hover:underline">
              <a href="/">Turkey</a>
            </li>
            <li className="hover:underline">
              <a href="/">United Arab Emirates</a>
            </li>
          </ul>
          <ul
            className="flex max-md:flex-col items-center text-xs text-white space-x-4 
          max-md:space-y-2"
          >
            <li className="hover:underline">
              <a href="/">United Kingdom</a>
            </li>
            <li className="hover:underline">
              <a href="/">United States</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="w-full flex flex-col py-8  bg-[#131A22] items-center justify-center">
        <div className=" max-w-6xl mx-auto mb-6  ">
          <ul className=" grid  grid-cols-5 gap-10 text-white place-content-center ">
            <li className=" hover:underline ">
              <a href="">
                <h5 className="w-30 font-semibold text-[12px] text-[#DDD] leading-3 mb-[2px]">
                  AbeBooks
                </h5>
                <div className="w-30 text-[12px] text-[#999] leading-3 ">
                  <p>Books, art </p>
                  <p>& collectibles</p>
                </div>
              </a>
            </li>
            <li className=" hover:underline">
              <a href="">
                <h5 className="w-30 font-semibold text-[12px] text-[#DDD] leading-3 mb-[2px] ">
                  Amazon Web Services
                </h5>
                <div className="w-30 text-[12px] text-[#999] leading-3 ">
                  <p>Scalable Cloud</p>
                  <p>Computing Services</p>
                </div>
              </a>
            </li>
            <li className=" hover:underline">
              <a href="">
                <h5 className="w-30 font-semibold text-[12px] text-[#DDD] leading-3 mb-[2px]">
                  Audible
                </h5>
                <div className="w-30 text-[12px] text-[#999] leading-3 ">
                  <p>Download</p>
                  <p>Audio Books</p>
                </div>
              </a>
            </li>
            <li className=" hover:underline">
              <a href="">
                <h5 className="w-30 font-semibold text-[12px] text-[#DDD] leading-3 mb-[2px] ">
                  DPReview
                </h5>
                <div className="w-30 text-[12px] text-[#999] leading-3 ">
                  <p>Digital</p>
                  <p>Photography</p>
                </div>
              </a>
            </li>
            <li className=" hover:underline">
              <a href="">
                <h5 className="w-30 font-semibold text-[12px] text-[#DDD] leading-3 mb-[2px] ">
                  IMDb
                </h5>
                <div className="w-30 text-[12px] text-[#999] leading-3 ">
                  <p>Movies, TV</p>
                  <p>& Celebrities</p>
                </div>
              </a>
            </li>
            <li className=" hover:underline">
              <a href="">
                <h5 className="w-30 font-semibold text-[12px] text-[#DDD] leading-3 mb-[2px] ">
                  Shopbop
                </h5>
                <div className="w-30 text-[12px] text-[#999] leading-3 ">
                  <p>Designer</p>
                  <p>Fashion Brands</p>
                </div>
              </a>
            </li>
            <li className=" hover:underline">
              <a href="">
                <h5 className="w-30 font-semibold text-[12px] text-[#DDD] leading-3 mb-[2px] ">
                  Amazon Business
                </h5>
                <div className="w-30 text-[12px] text-[#999] leading-3 ">
                  <p>Everything For</p>
                  <p>Your Business</p>
                </div>
              </a>
            </li>
            <li className=" hover:underline">
              <a href="">
                <h5 className="w-30 font-semibold text-[12px] text-[#DDD] leading-3 mb-[2px] ">
                  Prime Now
                </h5>
                <div className="w-30 text-[12px] text-[#999] leading-3 ">
                  <p>2-Hour Delivery</p>
                  <p>on Everyday Items</p>
                </div>
              </a>
            </li>
            <li className=" hover:underline">
              <a href="/">
                <h5 className="w-30 font-semibold text-[12px] text-[#DDD] leading-3 mb-[2px] ">
                  Amazon Prime Music
                </h5>
                <div className="w-30 text-[12px] text-[#999] leading-3 ">
                  <p>90 million songs, ad-free</p>
                  <p> Over 15 million podcast episodes</p>
                </div>
              </a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col items-center">
          <ul className="flex max-md:flex-col items-center text-xs text-slate-300 space-x-4 pt-4">
            <li className="hover:underline">
              <a href="/">Conditions of Use</a>
            </li>
            <li className="hover:underline">
              <a href="/">Privacy Notice</a>
            </li>
            <li className="hover:underline">
              <a href="/">Your Ads Privacy Choices</a>
            </li>
          </ul>
          <h6 className="text-xs text-slate-300 mt-1">
            © 1996-2023, Amazon.com, Inc. or its affiliates
          </h6>
        </div>
      </div>
    </div>
  );
};

export default Footer;