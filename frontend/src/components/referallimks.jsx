import React, { useEffect, useState } from "react";

const ReferralLinks = () => {
  const [activeLink, setActiveLink] = useState("Refer");
  const REFER_BAR_LINK = [
    {
      name: "Refer",
      scrollTo: "referHero",
    },
    {
      name: "Benefits",
      scrollTo: "benefitsSection",
    },
    {
      name: "FAQ's",
      scrollTo: "faqsSection",
    },
    {
      name: "Support",
      scrollTo: "supportSection",
    },
  ]

  const handleScroll = () => {
    const scrollPosition = window.scrollY - 60;

    const referSection = document.getElementById("referHero");
    const benefitsSection = document.getElementById("benefitsSection");
    const faqsSection = document.getElementById("faqs-section");
    const supportSection = document.getElementById("support-section");

    const offset = 80;

    if (scrollPosition < benefitsSection.offsetTop - offset) {
      setActiveLink("Refer");
    } else if (
      scrollPosition >= benefitsSection.offsetTop - offset &&
      scrollPosition < faqsSection.offsetTop - offset
    ) {
      setActiveLink("Benefits");
    } else if (
      scrollPosition >= faqsSection.offsetTop - offset &&
      scrollPosition < supportSection.offsetTop - offset
    ) {
      setActiveLink("FAQ's");
    } else {
      setActiveLink("Support");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="flex justify-center mt-8 md:mt-6 font-circular">
      <nav className="bg-blue-100 rounded-full px-10 md:px-10 lg:px-16 py-2 flex gap-7 md:gap-8 lg:gap-20">
        {REFER_BAR_LINK.map((link) => (
          <div
            key={link.name}
            className="relative cursor-pointer text-gray-700 hover:text-[#1A73E8]"
          >
            <div className={`font-medium text-xs sm:text-sm lg:text-lg flex flex-col items-center hover:text-[#1A73E8] ${ activeLink === link.name ? ('text-[#1A73E8]') : "text-gray-600"} font-circular`}>
            <a
                href={`#${link.scrollTo}`}
                onClick={(e) => {
                  e.preventDefault();
                  setActiveLink(link.name);
                  const section = document.getElementById(link.scrollTo);
                  if (section) {
                    window.scrollTo({
                      top: section.offsetTop - 150,
                      behavior: 'smooth'
                    });
                  }
                }}
              >
                {link.name}
              </a>
              {activeLink === link.name && (
                <div className="w-1 h-1 bg-[#1A73E8] rounded-full"></div>
              )}  
            </div>
          </div>
        ))}
      </nav>
    </div>
  );
};

export default ReferralLinks;
