import React from 'react';

const MapSection = () => {
  return (
    <section id="map" className="section-gap-inner w-full h-[60vh] scroll-mt-24 overflow-hidden">
      <div className="relative w-full h-full">
        <div className="relative w-full h-full overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3433.5133579470303!2d76.8070682793457!3d30.619486707474756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fe9ec15cbfd03%3A0x4cb1dcaa577519c8!2sRealty%20Nivesh!5e0!3m2!1sen!2sin!4v1732694454014!5m2!1sen!2sin"
            title="tab-content"
            width="100%"
            height="100%"
            style={{ border: '0' }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
        <div
          style={{ zIndex: 500 }}
          className="w-full absolute top-0 left-1/2 transform -translate-x-1/2 rounded-tl-none rounded-tr-none rounded-bl-lg rounded-br-lg flex justify-center overflow-hidden"
        >
          <button
            aria-label="Tab Near By"
            className="outline-none py-2 px-5 lg:px-10 font-supera600 border text-white bg-backgroud-theme-local bg-right-bottom border-transparent rounded-bl-2xl sm:rounded-bl-3xl text-sm lg:text-lg tracking-wide"
          >
            Near By
          </button>
          <button
            aria-label="Tab Google Map"
            className="outline-none py-2 px-5 lg:px-10 font-supera600 border border-gray-300 bg-white text-black rounded-br-2xl sm:rounded-br-3xl text-sm lg:text-lg tracking-wide"
          >
            Google Map
          </button>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
