import React from "react";

const Footer: React.FC = () => {
  return (<>
    <footer className="bg-[url('/images/footer/footer-bg.png')] bg-cover bg-center relative text-white font-montserrat pt-10 z-0">
      <div className="absolute inset-0 bg-gradient-to-r from-[#23255a] to-[#23255a]/80 z-0"></div>
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4">
          {/* First Section: Logo, GCR, and Lists */}
          <div className="flex flex-col md:flex-row gap-7 ">
            {/* Left: Logo and GCR */}
            <div className="flex flex-col gap-5 md:w-1/4">
              <img src="./images/footer/footer-logo.svg" alt="" className="w-32 mb-2" width={128} height={32} />
              <img src="./images/footer/gcr.svg" alt="Google Reviews" className="w-28 mb-2" width={112} height={32} loading="lazy" />
            </div>
            {/* Center: Tyre and Manufacturers Lists */}
            <div className="flex flex-1 justify-between gap-8">
              <div>
                <h4 className="text-yellow-300 font-semibold mb-2">Tyre</h4>
                <ul className="space-y-1 text-sm">
                  <li>Tyre online</li>
                  <li>Car tyre</li>
                  <li>Motorbike Tyre</li>
                  <li>4x4</li>
                  <li>Van Tyres</li>
                  <li>Campervan tyres</li>
                </ul>
              </div>
              <div>
                <h4 className="text-yellow-300 font-semibold mb-2">Tyre</h4>
                <ul className="space-y-1 text-sm">
                  <li>Tyre online</li>
                  <li>Car tyre</li>
                  <li>Motorbike Tyre</li>
                  <li>4x4</li>
                  <li>Van Tyres</li>
                  <li>Campervan tyres</li>
                </ul>
              </div>
              <div>
                <h4 className="text-yellow-300 font-semibold mb-2">Manufacturers</h4>
                <ul className="space-y-1 text-sm">
                  <li>Kumho</li>
                  <li>Michelin</li>
                  <li>Apollo</li>
                  <li>Bridgestone</li>
                  <li>Rotalla</li>
                  <li>Accelera</li>
                </ul>
              </div>
              <div>
                <h4 className="text-yellow-300 font-semibold mb-2">Manufacturers</h4>
                <ul className="space-y-1 text-sm">
                  <li>Kumho</li>
                  <li>Michelin</li>
                  <li>Apollo</li>
                  <li>Bridgestone</li>
                  <li>Rotalla</li>
                  <li>Accelera</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Second Section: Payment Methods, Contact Info, Social Icons */}
          <div className="flex flex-col">
            <div className="flex flex-col md:flex-row justify-start items-center py-4 text-xs md:text-sm gap-[65px]">
              {/* Payment Methods */}
              <div className="grid grid-cols-2 gap-x-6 gap-y-2 w-fit md:w-auto justify-center md:justify-start">
                <img src="./images/footer/paypal.svg" alt="PayPal" className="w-20 h-8 object-contain" width={80} height={32} loading="lazy" />
                <img src="./images/footer/gpay.svg" alt="GPay" className="w-20 h-8 object-contain" width={80} height={32} loading="lazy" />
                <img src="./images/footer/apay.svg" alt="Apple Pay" className="w-20 h-8 object-contain" width={80} height={32} loading="lazy" />
                <img src="./images/footer/stripe.svg" alt="Stripe" className="w-20 h-8 object-contain" width={80} height={32} loading="lazy" />
              </div>

              {/* Contact Information */}
              <div className="flex flex-col md:flex-row items-center gap-6 w-full md:w-auto justify-center mt-[45px]">
                <span className="flex items-center gap-2 text-white font-semibold"><img src="./images/footer/location.svg" alt="Location" className="w-5 h-5 inline" width={20} height={20} loading="lazy" /> London Eye, London</span>
                <span className="flex items-center gap-2 text-white font-semibold"><img src="./images/footer/tel.svg" alt="Telephone" className="w-5 h-5 inline" width={20} height={20} loading="lazy" /> +852 01234567</span>
                <span className="flex items-center gap-2 text-white font-semibold"><span className="text-yellow-300 text-lg">&#9993;</span> mail@compasstaxi.com</span>
              </div>

              {/* Social Icons */}
              <div className="flex items-center gap-6 w-full md:w-auto justify-center md:justify-end mt-[45px]">
                <a href="#" className="hover:opacity-70 transition"><img src="./images/footer/fb.svg" alt="Facebook" className="w-6 h-6" width={24} height={24} loading="lazy" /></a>
                <a href="#" className="hover:opacity-70 transition"><img src="./images/footer/linkedin.svg" alt="LinkedIn" className="w-6 h-6" width={24} height={24} loading="lazy" /></a>
                <a href="#" className="hover:opacity-70 transition"><img src="./images/footer/insta.svg" alt="Instagram" className="w-6 h-6" width={24} height={24} loading="lazy" /></a>
              </div>
            </div>
            {/* Yellow line */}
            <div className="h-[2px] bg-[#fde047] my-1 w-[calc(100%-550px)] mx-auto" /> 
            {/* Bottom Bar: Copyright and Links */}
            <div className="flex flex-col md:flex-row justify-between items-center py-2 text-xs md:text-sm w-[calc(100%-550px)] mx-auto">
              <div className="text-white/90">CLM • All Rights Reserved</div>
              <div className="flex gap-2 text-white/90 mt-1 md:mt-0">
                <a href="/terms" className="hover:text-yellow-300">Terms and Conditions</a>
                <span className="mx-1">•</span>
                <a href="/privacy" className="hover:text-yellow-300">Privacy Policy</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <div className="w-full" style={{ height: '43px' , backgroundColor: '#fde047' }}></div>
  </>);
};

export default Footer; 