import React from 'react';
import './index.css'
const Home = () => {
  return (
    <div className="p-6 max-w-8xl mx-auto p-4">
      <h2 className="text-3xl font-bold text-green-700 mb-4">Welcome to Farmer's Help Center</h2>
      
      <p className="mb-6 text-gray-700">
        Stay updated with the latest news and suggestions to improve your farming practices and crop yield.
      </p>

      <div className="space-y-4">
        <div className="bg-green-100 border-l-4 border-green-500 text-green-800 p-4 shadow-md rounded">
          <h3 className="font-semibold text-lg">🌾 Use Organic Fertilizers</h3>
          <p>Switching to organic fertilizers improves soil quality and helps in long-term sustainability.</p>
        </div>

        <div className="bg-blue-100 border-l-4 border-blue-500 text-blue-800 p-4 shadow-md rounded">
          <h3 className="font-semibold text-lg">💧 Smart Water Management</h3>
          <p>Drip irrigation and rainwater harvesting are highly recommended to conserve water.</p>
        </div>

        <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-800 p-4 shadow-md rounded">
          <h3 className="font-semibold text-lg">🌦️ Weather Alerts</h3>
          <p>Check weather forecasts daily before planning sowing or pesticide spraying activities.</p>
        </div>

        <div className="bg-red-100 border-l-4 border-red-500 text-red-800 p-4 shadow-md rounded">
          <h3 className="font-semibold text-lg">🐛 Pest Control Tips</h3>
          <p>Use neem oil and biopesticides to control harmful pests without damaging crops.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
