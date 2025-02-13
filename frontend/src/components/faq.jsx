import React, { useEffect, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { IoIosArrowForward } from "react-icons/io";
import { referFaq } from "../assets/faq";
// import "../refer.css"

const Refer_FAQ = () => {
    const [activeTab, setActiveTab] = useState(referFaq[0]?.heading);
    const [isOpen, setIsOpen] = useState(null);
    const [points, setPoints] = useState(referFaq[0]?.Faqaccd || []);
    const [isScrolled, setIsScrolled] = useState(false);
  
    const handleOverviewData = (faq) => {
      setActiveTab(faq.heading);
      setPoints(faq.Faqaccd);
    };
    
    //Function to open FAQ by default tab or tabs
    useEffect(() => {
      setPoints(referFaq.find(faq => faq.heading === activeTab)?.Faqaccd || []);
      setIsOpen(points[0]?.faqHeading);
    }, [activeTab, points]);
  
    const handleAccordionChange = (title) => {
      setIsOpen(isOpen === title ? null : title);
    };
  
    const scrollContainer = useRef(null);
  
    const handlePreviousButt = () => {
      if (scrollContainer.current) {
        scrollContainer.current.scrollLeft -= 200;
      }
    };
  
    const handleNextButt = () => {
      if (scrollContainer.current) {
        scrollContainer.current.scrollLeft += 200;
      }
    };
  
    useEffect(() => {
      const checkScroll = () => {
        if (scrollContainer.current) {
          setIsScrolled(scrollContainer.current.scrollLeft > 0);
        }
      };
  
      checkScroll();
      scrollContainer.current.addEventListener('scroll', checkScroll);
  
      return () => {
        if (scrollContainer.current) {
          scrollContainer.current.removeEventListener('scroll', checkScroll);
        }
      };
    }, []);

  return (
    <div id="faqsSection" className="w-full flex justify-center py-6 md:py-12 xl:px-12 px-4">
      <div className="w-full max-w-[85rem]">
        <div className="w-full">
          <h1 className="text-2xl md:text-3xl mt-2 font-semibold capitalize text-center font-circular">
            Frequently Asked <span className="text-[#1A73E8]">Questions</span>
          </h1>
        </div>
        <div className="flex gap-4 mt-8 md:mt-12 md:flex-row flex-col">
          <div className="w-full md:flex-[0.3] relative">
            {isScrolled && (
              <button onClick={handlePreviousButt} className='absolute md:hidden block z-10 left-0 top-[50%] translate-y-[-50%] drop-shadow-lg border bg-white rounded-full p-1 rotate-180'>
                <IoIosArrowForward />
              </button>
            )}
            <div ref={scrollContainer} className="no-scrollbar md:max-w-sm md:px-4 py-2 flex flex-row md:flex-col items-center gap-4 md:gap-6 max-w-[90vw] overflow-x-auto">
              {referFaq.map((faq, index) => (
                <div
                  onClick={() => handleOverviewData(faq)}
                  key={index}
                  className={`w-full max-w-[280px] rounded-md ${activeTab === faq.heading ? "drop-shadow-lg md:drop-shadow-xl bg-white border border-blue-400" : "border-2 border-neutral-300"} px-4 py-4 text-center cursor-pointer font-circular`}
                >
                  <h1 className={`text-sm max-md:text-nowrap lg:text-lg font-semibold ${activeTab === faq.heading ? "text-[#1A73E8]" : "text-neutral-500"} capitalize`}>
                    {faq.heading}
                  </h1>
                </div>
              ))}
            </div>
            <button onClick={handleNextButt} className='absolute md:hidden block z-10 right-0 top-[50%] translate-y-[-50%] drop-shadow-lg border bg-white rounded-full p-1'>
              <IoIosArrowForward />
            </button>
          </div>
          <div className="w-full md:flex-[0.7] md:px-4 flex flex-col items-start">
            {points.map((point, pointIndex) => (
              <Accordion
                key={pointIndex}
                sx={{
                  '&:before': {
                    display: 'none',
                  },
                  boxShadow: "none",
                  backgroundColor: "white",
                }}
                expanded={isOpen === point.faqHeading}
                onChange={() => handleAccordionChange(point.faqHeading)}
                disableGutters={true}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                  sx={{
                    minHeight: "0",
                    padding: "0",
                    m: 0,
                  }}
                >
                  <div className="flex items-center gap-2 py-2 px-2">
                    <h1 className={`text-lg font-semibold w-full h-full font-circular ${isOpen === point.faqHeading ? "text-[#1A73E8]" : ""}`}>
                      {point.faqHeading}
                    </h1>
                  </div>
                </AccordionSummary>
                <AccordionDetails
                  sx={{
                    margin: "0px !important",
                  }}
                >
                  <div className="flex flex-col gap-4 font-circular">
                    {point.subfaq && (
                      <ReactMarkdown
                        components={{
                          a: ({ node, ...props }) => (
                            <a {...props} className="text-blue-500 hover:underline" />
                          ),
                          h1: ({ node, ...props }) => (
                            <h1 {...props} className="text-2xl font-bold mb-2" />
                          ),
                          h2: ({ node, ...props }) => (
                            <h2 {...props} className="text-base font-semibold mt-4 mb-2" />
                          ),
                          ol: ({ node, ...props }) => (
                            <ol {...props} className="list-decimal ml-0" />
                          ),
                          ul: ({ node, ...props }) => (
                            <ul {...props} className="list-disc ml-6" />
                          ),
                          li: ({ node, ...props }) => (
                            <li {...props} className="mt-1" />
                          ),
                        }}
                      >
                        {point.subfaq.join("\n")}
                      </ReactMarkdown>
                    )}
                  </div>
                </AccordionDetails>
              </Accordion>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Refer_FAQ;
