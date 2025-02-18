import React from "react";

const Dashboard = () => {
  const cards = [
    {
      title: "Build & Test",
      description:
        "Get work done quicker by building out entire projects or isolating code to test features and animations. Want to keep it all under wraps? Upgrade to a PRO account to keep your work private.",
      buttonText: "Try the Editor",
      icon: "🛠️", // Replace with your preferred icon or SVG
    },
    {
      title: "Learn & Discover",
      description:
        "Want to upgrade your skills and get noticed? Participating in CodePen Challenges is a great way to try something new. We frequently feature these Pens on our homepage and across social media!",
      buttonText: "Join this Week's Challenge",
      icon: "🔍", // Replace with your preferred icon or SVG
    },
    {
      title: "Share Your Work",
      description:
        "Become a part of the most active front-end community in the world by sharing work. Presenting at a conference? Show your code directly in the browser with Presentation Mode.",
      buttonText: "Explore Trending",
      icon: "🌟", // Replace with your preferred icon or SVG
    },
  ];

  return (
    <div className="min-h-[60vh] bg-gray-900 text-white py-10 flex justify-center items-center">
      <div className="max-w-7xl mx-auto px-6 grid gap-6 md:grid-cols-3">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-lg shadow-lg p-6 flex flex-col items-start"
          >
            <div className="text-3xl mb-4">{card.icon}</div>
            <h2 className="text-xl font-bold mb-3">{card.title}</h2>
            <p className="text-sm text-gray-400 mb-6">{card.description}</p>
            <button className="mt-auto bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded transition">
              {card.buttonText}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
