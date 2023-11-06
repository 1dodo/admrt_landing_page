import React, { useState } from 'react';
import Axios from 'axios';

const Home = () => {
  const [formData, setFormData] = useState({
    to_email: '',
    ad_space_types: [],
  });

  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      if (checked) {
        setFormData((prevData) => ({
          ...prevData,
          [name]: [...prevData[name], value],
        }));
      } else {
        setFormData((prevData) => ({
          ...prevData,
          [name]: prevData[name].filter((item) => item !== value),
        }));
      }
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const sendToTelegram = async () => {
    try {
      const botToken = '6971910153:AAFMFkdFFkctgfh9IM48mgZ78RkoAJtgCr0';
      const chatId = '5182514340';

      let message = 'New Waitlist Submission:\n';

      if (formData.to_email) {
        message += `Email: ${formData.to_email}\n`;
      }

      if (formData.ad_space_types.length > 0) {
        message += `Ad Space Types: ${formData.ad_space_types.join(', ')}\n`;
      }

      const apiUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;
      const params = new URLSearchParams({
        chat_id: chatId,
        text: message,
      });

      await Axios.post(apiUrl, params);
      setIsFormSubmitted(true);
    } catch (error) {
      console.error('Error sending form data to Telegram:', error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendToTelegram();
  };

  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="py-3 md:py-10">
        <h1 className="text-center text-3xl md:text-6xl font-semibold">
          Be the First to Access a Revolutionary Ad Buying and Selling Experience
        </h1>
      </div>
      <div className="py-3 px-3">
        <h1 className="text-sm md:text-xl font-normal">
          Are you an influencer looking to monetize your space? Or are you seeking the perfect platform to promote your brand through powerful ad placements? You're in the right place! Join our waitlist for exclusive early access to the AdMrt Marketing Platform, a game-changer in the world of advertising.
        </h1>
      </div>

      <form onSubmit={handleSubmit}>
        {isFormSubmitted && (
        <div className="text-center">
          <h1 className="text-xl font-medium text-green-500">Form submitted successfully!</h1>
        </div>
      )}
        <div className="mb-6 mt-0 p-3">
          <label className="mb-2 text-xl font-medium text-gray-900">Email address</label>
          <input
            name="to_email"
            type="email"
            value={formData.to_email}
            onChange={handleChange}
            className="bg-gray-50 border mt-2 py-4 border-gray-300 text-gray-900 text-base rounded-lg focus:border-blue-500 w-full p-1 md:p-2.5 dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="john.doe@company.com"
          />
        </div>
        <h1 className="mt-10 text-xl font-medium flex justify-center items-center">What type of ad space are you:</h1>
        <div className="grid grid-cols-3 gap-5 text-center mt-4 pb-0">
          <div className="flex flex justify-center items-center items-center mb-4">
            <input
              id="social-media-checkbox"
              name="ad_space_types"
              value="Social media"
              onChange={handleChange}
              type="checkbox"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600"
            />
            <label htmlFor="social-media-checkbox" className="ml-2 text-sm md:text-xl font-medium text-gray-900">
              Social media
            </label>
          </div>
          <div className="flex justify-center items-center flex items-center mb-4">
            <input
              id="web-entertainment-checkbox"
              name="ad_space_types"
              value="Web/entertainment"
              onChange={handleChange}
              type="checkbox"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600"
            />
            <label htmlFor="web-entertainment-checkbox" className="ml-2 text-sm md:text-xl font-medium text-gray-900">
              Web/entertainment
            </label>
          </div>
          <div className="flex justify-center items-center flex items-center mb-4">
            <input
              id="physical-checkbox"
              name="ad_space_types"
              value="Physical"
              onChange={handleChange}
              type="checkbox"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600"
            />
            <label htmlFor="physical-checkbox" className="ml-2 text-sm md:text-xl font-medium text-gray-900">
              Physical
            </label>
          </div>
        </div>
        <div className="md:text-lg text-xs py-8">
          <div className="mt-0 text-center w-full px-2 mx-auto py-3 text-white bg-[#007AFF] rounded-md hover-bg-[#312ECB]">
            <button type="submit">Join the Waitlist</button>
          </div>
        </div>
      </form>

      

      <div className="text-center">
        <h1 className="text-xl font-medium">Why Join the Waitlist:</h1>
      </div>

      <div className="p-3">
        <h1 className="text-sm md:text-xl">
          <span className="font-medium">Be a Pioneer: </span> Get a head start in the world of advertising by being among the first to experience AdMrt's revolutionary features.
          <br />
          <span className="font-semibold"> Monetize Your Space: </span> AdMrt opens up new opportunities to maximize your revenue by hosting ads on your space. <br />
          <span className="font-medium">Targeted Advertising: </span> Advertisers can connect with the right ad space hosts to reach their target audience effectively. <br />
          <span className="font-medium">Streamlined Process: </span> Say goodbye to intermediaries and enjoy a simplified ad buying and selling process. <br />
          <span className="font-medium">Exclusive Updates: </span> Get the latest news, announcements, and sneak peeks delivered directly to your inbox.
        </h1>
      </div>

      <div className="p-3">
        <h1 className="text-xl font-medium text-center py-3">Who Should Join:</h1>
        <p className="md:text-xl text-sm">
          <span className="font-medium">Influencers and other ad space hosts:</span> If you own a platform with advertising space (social media, website, billboard, newsletter etc.), AdMrt offers you a new way to earn money by hosting ads.<br></br>
          <span className="font-medium">Advertisers:</span> If you're looking to promote your brand through strategic ad placements, AdMrt connects you with ideal ad space hosts.<br></br>
          <span className="font-medium">How to join: </span>
          It's easy! Just enter your email address below, and we'll keep you in the loop with exclusive updates, early access, and more.
        </p>
      </div>
    </div>
  );
};

export default Home;
