"use client";

import React, { useState } from "react";

const prohibitedWords = [
  "Government", "Parliament", "Sarkar", "Departments", "Organizations", "Schemes", "Agencies", "Police", 
  "Ministry", "Cabinet", "Security", "Executive", "Judicial", "Administration", "Civil", "Governance", 
  "Affairs", "Policies", "Public", "Assembly", "CBI", "CID", "DEFENCE", "UN", "WHO", "ILO", "NATO", 
  "UNESCO", "IMF", "WTO", "World", "UNICEF", "ASEAN", "EU", "G20", "Amnesty", "Interpol", "OPEC", "OECD", 
  "Employment", "Rozgar", "Career", "Job", "Naukri", "Work", "Profession", "Internship", "Placement", 
  "Wage", "Salary", "Freelance", "Unemployment", "News", "Agencies", "Channels", "Reuters", "AP", "ANI", 
  "Broadcast", "Radio", "Television", "Syndicates", "Media", "Journalism", "Tabloids", "Press", "Editorial", 
  "Outlets", "Newsletters", "dot", "com", "blog", "Facebook", "Twitter", "YouTube", "Yahoo", "Google", 
  "Wikipedia", "Instagram", "Snapchat", "WhatsApp", "Telegram", "Reddit", "Quora", "Pinterest", "Twitch", 
  "Slack", "Advertisement", "Classifieds", "Tender", "Real", "Press", "Calendar", "Matrimonial", "Directory", 
  "Yellow pages", "Guide", "Diary", "Gist", "Fact sheet", "Bulletin", "Pamphlet", "Brochure", "Directory", 
  "Flyers", "Leaflets", "Coupons", "Circulars", "Prospectus", "Surveys", "Posters", "Magazines", 
  "Commercial Ads", "Newsletters", "Trade Journals", "TV Guide", "Reference Guides", "Marketing Collateral", 
  "Invitation Cards", "Flyers", "Coupons", "Circulars", "Prospectus", "Magazines", "Commercial", "CEO", 
  "CTO", "CFO", "AI", "The", "Times", "Daily", "Dainik", "Weekly", "India", "Express", "News", "Bulletin", 
  "Samachar", "Khabar", "Diary", "Monthly", "Fortnightly", "Biweekly", "Quarterly", "Annual", "National", 
  "Today", "Evening", "Morning", "Weekend", "International", "Edition", "derogatory racial comments", 
  "Political corruption", "Sexually explicit material", "graphic violence", "Corporate fraud", "insider trading", 
  "False accusations damaging someone's reputation", "ML", "HR", "lying", "explicit content", "ERP", "CRM", 
  "SEO", "IoT", "Cheating", "VR", "AR", "BYOD", "RPA", "Symbols", "Emojis", "Diacritical", "Icons", 
  "Emoticons", "Hashmarks", "Quotation", "Marks", "Currency", "Tilde", "Negative", "Obscene", "Crime", 
  "Corruption", "Racism", "Slander", "Defamation", "Bigotry", "Vulgarity", "Illegal", "Scandal", "Titles", 
  "Nouns", "Manthan", "Darpan", "Chronology", "Inspire", "Success", "Khulasa", "Herald", "Crossroads", 
  "Trademark", "Religion", "Slang", "Mythological", "Copyright", "Emblem", "Flag", "Coat", "Military", 
  "Seals", "Sports", "Symbols", "Certification", "Monthly", "Fortnightly", "Quarterly", "National", 
  "Weekend", "ANI", "Reuters", "Associated Press", "Agence France-Presse", "United Press International", 
  "Bloomberg", "Xinhua", "Kyodo News", "Press Trust of India", "Getty Images", "Corbis", "Shutterstock", 
  "Alamy", "BBC News", "CNN", "The New York Times", "The Guardian", "The Washington Post", "The Times", 
  "USA Today", "The Independent", "HuffPost", "BuzzFeed News", "Fox News", "MSNBC", "Sky News", "CNBC", 
  "NDTV", "Aaj Tak", "Zee News", "ProPublica", "The Intercept", "Center for Investigative Reporting", 
  "Investigative Reporting Workshop", "The Sun", "New York Post", "Daily Mail", "National Enquirer", 
  "National Press Club", "International Press Association", "Press Association", "Medium", "Substack", 
  "The Atlantic", "Slate", "The Skimm", "Morning Brew", "The Hustle", "Politico Playbook", "NPR", "Vice News", 
  "The Daily Beast", "Salon", "The Young Turks", "Vox", "Democracy Now!", "Quartz", "Axios", "Hellbound Faith", 
  "Extreme Kink Guide", "Corruption Chronicles", "Random Nonsense Daily", "Twilight Today News", 
  "Death to All X", "Inferior Race Y", "Person A's Scam Exposed", "Politician B’s Fraudulent Deals", 
  "Wrong Beliefs of Z", "My Way or No Way", "Celebrities Who Swear the Most", "Groups That Don’t Deserve Rights", 
  "People from Region X are Inept", "Disrespecting Holy Symbols", "Cheating Secrets Revealed", "How to Avoid the Law", 
  "Celebrity Mishaps", "Exploiting People for Cash", "Disrespectful Public Comments", "The Information", 
  "The", "Times", "Daily", "Dainik", "Weekly", "India", "Express", "News", "Bulletin", "Samachar", "Khabar", 
  "Diary", "Monthly", "Fortnightly", "Biweekly", "Quarterly", "Annual", "National", "Today", "Evening", 
  "Morning", "Weekend", "International", "Edition", "!@#$%^&*()", "*£$%&@", "Apple Logo", "Microsoft Logo", 
  "Google Logo", "Nike Swoosh", "Coca-Cola Logo", "Starbucks Logo", "Pepsi Logo", "Cross", "Crescent", 
  "Star of David", "Om", "Khanda", "Yin-Yang", "Dharma Wheel", "Republican Party Elephant", 
  "Democratic Party Donkey", "Labour Party Rose", "Conservative Party Torch", "Green Party Logo", "IBM Logo", 
  "Ford Logo", "Mercedes-Benz Logo", "General Electric Logo", "Toyota Logo", "United States Flag", 
  "United Kingdom Flag", "India Flag", "China Flag", "Japan Flag", "United States Coat of Arms", 
  "United Kingdom Coat of Arms", "Canada Coat of Arms", "Australia Coat of Arms", "India Coat of Arms", 
  "Manthan", "Darpan", "Chronology", "Inspire", "Success", "Khulasa", "Rahasya", "Katha", "Herald", 
  "Batkahi", "Nukkad", "Crossroads", "Hate Speech", "Racism", "Slander", "Defamation", "Bigotry", 
  "Extremism", "Vulgarity", "Discrimination", "Prejudice", "Blasphemy", "Immoral Conduct", "Illegal Activities", 
  "Scandal", "Unethical Practices", "Offensive Content", "~", "/", "*", "©", "®", "₹", "$", "%", "—", "–", 
  "≠", "≈", "∞", "±", "√", "∑", "∫", "∂", "°", "†", "‡", "§", "¶", "⊗", "⊥", "∈", "∉", "∪", "∩", "∅", 
  "→", "←", "↑", "↓", "↔", "↕"
];
export default function Home() {
  const [title, setTitle] = useState("");
  const [error, setError] = useState("");

  const validateTitle = (inputTitle) => {
    const words = inputTitle.toLowerCase().split(" ");

    const foundProhibitedWord = words.find((word) =>
      prohibitedWords.map((w) => w.toLowerCase()).includes(word)
    );

    if (foundProhibitedWord) {
      setError(`*Cannot use the word "${foundProhibitedWord}"`);
    } else {
      setError("");
    }
  };

  const handleChange = (e) => {
    const inputTitle = e.target.value;
    setTitle(inputTitle);
    validateTitle(inputTitle);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!error) {
      alert("Title accepted!");
      setTitle(""); // Clear the form
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-300 via-white to-green-300">
      {/* Breadcrumbs */}
      <div className="  ">
        <div className="">
          <div className="bg-orange-200 py-3">
            <div className="container mx-auto px-4">
              <p className="text-gray-700 text-sm">
                <span className="text-blue-700">HOME</span> /
                <span className="text-blue-700"> TITLE VERIFICATION</span> /
                <span className="text-gray-500"> CANCELLED TITLES</span>
              </p>
            </div>
          </div>

          {/* Search Section */}
          <div className="container mx-auto px-4 mt-6">
            <div className="bg-orange-100 p-8 rounded-lg shadow-lg border border-gray-200">
              <h2 className="text-2xl font-semibold text-gray-700 mb-4 text-center">
                Search Cancelled Titles
              </h2>

              <form onSubmit={handleSubmit}>
                <label className="block text-lg text-gray-700 mb-2">
                  Title Code/Title Name:
                </label>
                <div className="flex flex-col md:flex-row gap-4 items-center">
                  <input
                    type="text"
                    value={title}
                    onChange={handleChange}
                    className={`w-full md:w-auto flex-1 p-2 border ${
                      error ? "border-red-500" : "border-gray-300 text-black"
                    } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400`}
                    placeholder="Search by Title Code / Title Name..."
                  />
                  {error && (
                    <p className="mt-2 text-red-500 md:hidden">{error}</p>
                  )}
                  <div className="flex gap-2 mt-2 md:mt-0">
                    <button
                      type="submit"
                      className={`bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 ${
                        error ? "bg-gray-300 cursor-not-allowed" : ""
                      }`}
                      disabled={!!error}
                    >
                      Search
                    </button>
                    <button
                      type="reset"
                      onClick={() => setTitle("")}
                      className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600"
                    >
                      Reset
                    </button>
                  </div>
                </div>
                {error && (
                  <p className="mt-2 text-red-500 hidden md:block">{error}</p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
