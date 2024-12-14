import { useState } from "react";

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What types of apartments are available at Medallion Aurum?",
      answer:
        "Medallion Aurum offers luxurious 3+1 BHK and 4+1 BHK apartments designed for spacious living, featuring modern amenities and high-end finishes.",
    },
    {
      question: "Where is Medallion Aurum located?",
      answer:
        "Medallion Aurum is located in Sector 67, Mohali, with convenient access to Chandigarh International Airport, IT City Mohali, educational institutions, hospitals, and major business hubs.",
    },
    {
      question: "What are the key amenities provided at Medallion Aurum?",
      answer:
        "Residents enjoy a range of amenities, including a clubhouse, gymnasium, swimming pool, spa, indoor games, landscaped green spaces, sports facilities like tennis and basketball courts, and 24x7 security with a 5-tier system.",
    },
    {
      question: "Is Medallion Aurum a gated community?",
      answer:
        "Yes, Medallion Aurum is a gated community with a secure environment, offering 24x7 CCTV surveillance, security guards, and access control systems for the safety of all residents.",
    },
    {
      question: "What is the size range of apartments at Medallion Aurum?",
      answer:
        "The apartments range from approximately 2,950 sq. ft. to 3,900 sq. ft., offering ample living space, thoughtful design, and modern interiors.",
    },
    {
      question:
        "What is Mivan technology, and how is it used in the construction of Medallion Aurum?",
      answer:
        "Mivan technology is an advanced construction technique used for formwork, ensuring high-quality, durable, and earthquake-resistant buildings. It enhances the overall structural integrity and timely project completion.",
    },
    {
      question: "Are there recreational facilities for children and families?",
      answer:
        "Yes, Medallion Aurum offers a dedicated children's play area, green spaces for family outings, sports courts, indoor game zones, and more to cater to the recreational needs of residents.",
    },
    {
      question: "Is Medallion Aurum suitable for investment purposes?",
      answer:
        "Absolutely! The strategic location, high-end amenities, robust construction quality, and promising growth in Mohali’s real estate market make Medallion Aurum an excellent investment option.",
    },
    {
      question: "What is the proximity of Medallion Aurum to key landmarks?",
      answer:
        "Medallion Aurum enjoys close proximity to Chandigarh International Airport, IT City Mohali, reputed schools, hospitals, shopping centers, and various commercial hubs.",
    },
    {
      question: "Is there adequate parking available?",
      answer:
        "Yes, Medallion Aurum provides ample covered parking spaces for residents and visitors, ensuring a hassle-free experience.",
    },
    {
      question: "Can I book a site visit for Medallion Aurum?",
      answer:
        "Yes, site visits can be arranged. Please contact our sales team or visit our website to schedule an appointment for a guided tour of the property.",
    },
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index); // Toggle the FAQ visibility
  };

  return (
    <section id="faqs" className="section-gap scroll-mt-20">
      <div className="px-5 sm:px-5 mb-[20px] xl:container mx-auto">
        <h2 className="uppercase font-supera supera700 text-[24px] sm:text-[32px] cmd:text-[36px] text-center text-[#37493C]">
          Frequently asked questions
        </h2>
      </div>

      <div className="mt-10 w-[99%] xs:w-[96%] md:w-[88%] 2xl:container mx-auto">
        <div className="w-full lg:flex justify-between items-center">
          {/* Scrollable FAQ Container */}
          <div className="w-full h-[400px] overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 px-2 gap-y-4 flex flex-col justify-between faq_scroll_bar">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-[#F1F1F1] sm:bg-transparent relative border sm:border-b sm:border-[0px] border-b-[#D6D6D6] cursor-pointer text-[#4B4B4B] rounded-[4px] py-3 sm:py-0 px-3 md:px-6 flex justify-between items-center mb-2"
              >
                <div className="w-full">
                  <div className="text-[13px] sm:text-[14px] md:text-[16px] lg:text-[19px] pb-1 sm:pb-2 font-supera600 tracking-wide flex justify-between items-center">
                    <div className="block sm:hidden min-w-[28px] min-h-[28px] bg-backgroud-theme-local bg-cover rounded-full text-[#0D0D0D] flex justify-center items-center mr-3">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                    <div className="w-[100%] leading-snug">{faq.question}</div>
                    <div className="pl-5 pr-1 w-[17px]">
                      <div
                        className="flex items-center justify-center cursor-pointer"
                        onClick={() => toggleAccordion(index)}
                      >
                        {/* Toggle the icon from "+" to "-" */}
                        {openIndex === index ? (
                          <span className="text-[20px] text-[#37493C]">-</span>
                        ) : (
                          <span className="text-[20px] text-[#37493C]">+</span>
                        )}
                      </div>
                    </div>
                  </div>
                  {/* Accordion Answer */}
                  <div
                    className={`transition-all duration-500 ease-in-out ${
                      openIndex === index
                        ? "max-h-[500px] opacity-100"
                        : "max-h-0 opacity-0"
                    } overflow-hidden`}
                  >
                    <p className="tracking-[1.1px] text-[13px] sm:text-[14px] md:text-[16px] lg:text-[17px] font-supera500 text-wrap pe-6 pt-4 pb-3">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQs;
