import React from 'react';

const Contact = () => {
  return (
    <div  className="mb-8">
    <div className="w-[75%] mx-auto pt-8 h-full">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-8 mr-24">Contact Us</h1>
      </div>

      <div className="flex items-center justify-center space-x-8">
       
        <div className="w-[42%] shadow-lg p-8 bg-gray-100 rounded-lg">
          <form>
            <div className="mb-2">
              <label className="block text-lg font-bold mb-2" htmlFor="name">Name</label>
              <input className="border border-gray-400 rounded px-2 py-1 w-full" type="text" id="name" />
            </div>
            <div className="mb-2">
              <label className="block text-lg font-bold mb-2" htmlFor="email">Email</label>
              <input className="border border-gray-400 rounded px-2 py-1 w-full" type="email" id="email" />
            </div>
            <div className="mb-2">
              <label className="block text-lg font-bold mb-2" htmlFor="message">Message</label>
              <textarea className="border border-gray-400 rounded px-4 py-3 w-full" id="message" rows="4"></textarea>
            </div>
            <button className="border font-bold hover:bg-gray-700 rounded rounded-5 px-4 py-2 mt-4 inline-block py-2 px-4  hover:text-white
          hover:shadow-md duration-300 ease-in-out  border-gray-700  bg-white" type="submit">Submit</button>
          </form>
        </div>
        <div className="w-[58%] p-8 bg-gray-100 rounded-lg shadow-lg">
          <div style={{ position: 'relative', paddingBottom: '75%', height: 0, overflow: 'hidden', borderRadius: '8px' }}>
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15763.728583402853!2d38.763611!3d9.005401!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1632bb0e8f3a4e09%3A0xe9c1a895c0f175c2!2s5%20Kilo%2C%20Addis%20Ababa%2C%20Ethiopia!5e0!3m2!1sen!2sus!4v1676015173369!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0, position: 'absolute', top: 0, left: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>

      </div>
    </div>
    </div>
  );
};

export default Contact;