import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Contact() {
  return (
    <div>
      
      <div className="bg-[#1f2937] text-white px-6 py-12">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              Let's collaborate on your <br className="hidden md:block" />
              upcoming car rental venture
            </h2>
            <p className="text-gray-300 max-w-xl">
              Ready to explore? Get in touch with us for the best car rental experience!
            </p>
          </div>
          
          <div className="flex gap-4 mt-4 md:mt-0">
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-pink-500 transition transform hover:scale-110"
              title="Instagram"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-600 transition transform hover:scale-110"
              title="Facebook"
            >
              <FaFacebookF size={24} />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-400 transition transform hover:scale-110"
              title="LinkedIn"
            >
              <FaLinkedinIn size={24} />
            </a>
          </div>
        </div>
      </div>

      
      <footer className="bg-gray-100 px-6 py-12">
        <div className="bg-white py-12 px-4 sm:px-6 lg:px-8 rounded-xl shadow-md">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
                Contact Us
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              <div className="flex flex-col items-center text-center p-6 rounded-lg shadow-md bg-gray-50">
                <MapPin className="h-10 w-10 text-orange-500 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Visit Us</h3>
                <p className="text-gray-600">
                  Drop by our location and say hello!
                </p>
                <a
                  href="https://www.google.com/maps/place/Bara+Khyber+Agency"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-500 font-medium mt-2 underline hover:text-orange-600 transition"
                >
                  Bara, Khyber Agency, Pakhtonkhwa
                </a>
              </div>

              <div className="flex flex-col items-center text-center p-6 rounded-lg shadow-md bg-gray-50">
                <Phone className="h-10 w-10 text-orange-500 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Call Us</h3>
                <p className="text-gray-600">Available 24/7 for queries.</p>
                <a
                  href="tel:+923020909054"
                  className="text-orange-500 font-medium mt-2 hover:text-orange-600 transition"
                >
                  +92 302 0909054
                </a>
              </div>

              
              <div className="flex flex-col items-center text-center p-6 rounded-lg shadow-md bg-gray-50">
                <Mail className="h-10 w-10 text-orange-500 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Email Us</h3>
                <p className="text-gray-600">We respond within 24 hours.</p>
                <a
                  href="mailto:irfanullahafridi@gmail.com"
                  className="text-orange-500 font-medium mt-2 hover:text-orange-600 transition"
                >
                  irfanullahafridi@gmail.com
                </a>
              </div>
            </div>
          </div>
          
        </div>
        
      </footer>
        
      <div className="w-full bg-gradient-to-r from-blue-900 via-purple-900 to-black text-white text-center py-4 text-sm shadow-inner">
        © {new Date().getFullYear()} DriveEase Rentals. All rights reserved.
      </div>
    </div>
  );
}
