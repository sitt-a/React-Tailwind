import React from 'react';
import ba from '../assets/of.jpg';
import b from '../assets/of2.jpg';

const About = () => {
  return (
    <div className="w-[75%] mx-auto pt-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-8">About Us</h1>
      </div>

      <div className="flex items-center justify-center space-x-8">
        <div className="w-1/2 p-8">
          <h2 className="text-2xl font-bold mb-4">About </h2>
          <p className="text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, risus quis
            iaculis tincidunt, justo tortor interdum metus, at consequat purus odio non odio.
            Suspendisse potenti. Phasellus semper nunc sed dolor consectetur, in efficitur felis
            aliquam. Proin sed malesuada nisi.
          </p>
        </div>
        <div className="w-1/2 p-8">
          <img
            className="w-full h-auto rounded-lg"
            src={b}
            alt="About "
          />
        </div>
      </div>

      <div className="flex items-center justify-center space-x-8 mb-16">
        <div className="w-1/2 p-8">
          <img
            className="w-full h-auto rounded-lg"
            src={ba}
            alt="About "
          />
        </div>
        <div className="w-1/2 p-8">
          <h2 className="text-2xl font-bold mb-4">About </h2>
          <p className="text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, risus quis
            iaculis tincidunt, justo tortor interdum metus, at consequat purus odio non odio.
            Suspendisse potenti. Phasellus semper nunc sed dolor consectetur, in efficitur felis
            aliquam. Proin sed malesuada nisi.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;