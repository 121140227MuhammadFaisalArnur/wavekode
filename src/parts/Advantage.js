/* eslint-disable linebreak-style */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */

import React from 'react';

import Fade from 'react-awesome-reveal';

export default function Advantage({ data }) {
  return (
    <div className="bg-gradient-to-r from-primary2 to-primary py-20 mb-24 sm:mb-18 xl:mb-16">
      <div className="container mx-auto">
        <Fade bottom triggerOnce>
          <h1 className="text-5xl text-theme-blue text-center font-bold">Why Go with Us?</h1>

          <p className="font-light text-lg text-t-palate text-center mb-12 sm:mb-5 xl:mb-0">
           Here’s why you should let us manage your project.
          </p>
        </Fade>

        <div className="flex flex-col sm:flex-row">
          <div className="flex-col">
            {
              data[0].map((item, index) => (
                <Fade bottom triggerOnce delay={500 * index} key={index}>
                  <div>
                    <div className="bg-gradient-to-b from-primary2 to-primary flex flex-row items-center p-3 my-6 mx-3 sm:my-7 sm:mx-3 xl:my-14 xl:mx-7 rounded-2xl shadow-xl border border-light-theme-purple transform transition duration-500 hover:scale-105">
                      <img src={item.imageUrl} alt="" className="w-1/3" />
                      <div className="flex-col pl-5">
                        <h2 className="text-theme-blue text-2xl">{item.title}</h2>
                        <p className="font-light text-t-palate">{item.description}</p>
                      </div>
                    </div>
                  </div>
                </Fade>
              ))
            }
          </div>
          <div className="flex-col -mt-4 sm:mt-14">
            {
              data[1].map((item, index) => (
                <Fade bottom triggerOnce delay={500 * index} key={index}>
                  <div>
                    <div className="bg-gradient-to-b from-primary2 to-primary flex flex-row items-center p-3 my-6 mx-3 sm:my-7 sm:mx-3 xl:my-14 xl:mx-7 rounded-2xl shadow-xl border border-light-theme-purple transform transition duration-500 hover:scale-105">
                      <img src={item.imageUrl} alt="" className="w-1/3" />
                      <div className="flex-col pl-5">
                        <h2 className="text-theme-blue text-2xl">{item.title}</h2>
                        <p className="font-light text-t-palate">{item.description}</p>
                      </div>
                    </div>
                  </div>
                </Fade>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
}
