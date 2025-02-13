import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronUp, Phone, Facebook, Linkedin, Twitter, Instagram, Youtube, MessageCircle } from 'lucide-react';

const Footer = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  const programs = [
    'Data Science & AI',
    'Product Management',
    'Business Analytics',
    'Digital Transformation',
    'Business Management',
    'Project Management',
    'Strategy & Leadership',
    'Senior Management',
    'Fintech'
  ];

  const accredianLinks = [
    'About',
    'Career',
    'Blog',
    'Admission Policy',
    'Referral Policy',
    'Privacy Policy',
    'Terms Of Service',
    'Master FAQs'
  ];

  return (
    <div className="w-full bg-[#1E1E1E] text-white py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-8">
          <div className="text-2xl font-bold text-white">accredian</div>
          <div className="flex flex-col items-end">
            <button className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition-colors">
              Schedule 1-on-1 Call Now
            </button>
            <span className="text-sm mt-1 text-gray-300">
              Speak with our Learning Advisor
            </span>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Programs Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Programs</h3>
            <div className="space-y-2">
              {programs.map((program) => (
                <div 
                  key={program}
                  className="flex items-center justify-between cursor-pointer group"
                >
                  <span className="text-gray-300 hover:text-white transition-colors">
                    {program}
                  </span>
                  <span className="text-gray-400 group-hover:text-white transition-colors">+</span>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3 text-gray-300">
              <p className="hover:text-white transition-colors">
                Email us (For Data Science Queries): admissions@accredian.com
              </p>
              <p className="hover:text-white transition-colors">
                Email us (For Product Management Queries):pm@accredian.com
              </p>
              <p className="hover:text-white transition-colors">
                Data Science Admission Helpline:+91 9079653292 (9 AM - 7 PM)
              </p>
              <p className="hover:text-white transition-colors">
                Product Management Admission Helpline:+91 9625811295
              </p>
              <p className="hover:text-white transition-colors">
                Enrolled Student Helpline: +91 7969232507
              </p>
              <p className="hover:text-white transition-colors">
                Office Address: 4th Floor, 250, Phase IV, Udyog Vihar, Sector 18, Gurugram, Haryana 122015
              </p>
            </div>

            <div className="mt-6">
              <h4 className="text-lg font-semibold mb-2">Why Accredian</h4>
              <h4 className="text-lg font-semibold mt-4 mb-2">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  <div className="w-8 h-8 flex items-center justify-center border border-gray-600 rounded hover:border-white transition-colors">
                    f
                  </div>
                </a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  <div className="w-8 h-8 flex items-center justify-center border border-gray-600 rounded hover:border-white transition-colors">
                    in
                  </div>
                </a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  <div className="w-8 h-8 flex items-center justify-center border border-gray-600 rounded hover:border-white transition-colors">
                    t
                  </div>
                </a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  <div className="w-8 h-8 flex items-center justify-center border border-gray-600 rounded hover:border-white transition-colors">
                    ig
                  </div>
                </a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  <div className="w-8 h-8 flex items-center justify-center border border-gray-600 rounded hover:border-white transition-colors">
                    yt
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Accredian Links Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Accredian</h3>
            <div className="space-y-2">
              {accredianLinks.map((link) => (
                <div key={link} className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                  {link}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="fixed bottom-6 right-6">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="bg-blue-600 p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
          >
            <ChevronUp className={`w-6 h-6 transition-transform ${isMenuOpen ? 'rotate-180' : ''}`} />
          </button>
          {isMenuOpen && (
          <div className="absolute bottom-16 right-0 space-y-4">
            <button 
              onClick={() => window.fcWidget?.open()}
              className="bg-blue-600 p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
            >
              <MessageCircle className="w-6 h-6" />
            </button>
            <button 
              onClick={() => setShowContactDialog(true)}
              className="bg-blue-600 p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
            >
              <Phone className="w-6 h-6" />
            </button>
          </div>
        )}
          
        </div>

        
        {/* Copyright */}
        <div className="mt-12 pt-4 border-t border-gray-700 text-center text-sm text-gray-400">
          © 2024 Accredian A Brand of FullStack Education Pvt Ltd. All Rights Reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;