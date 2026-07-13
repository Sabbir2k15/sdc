import { useState } from 'react';

// ১. এখানে ডাক্তার ও স্টাফদের ডাটা আপডেট করবেন
const doctorsData = [
  {
    id: 1,
    name: "ডাঃ মো ফয়সাল রহমান",
    designation: "মেডিসিন বিশেষজ্ঞ",
    location: "চেম্বার নং - ৪০২ (২য় তলা)",
    schedule: "শনি থেকে বুধ, বিকাল ৫:০০ - রাত ৯:০০",
    status: "available", // available অথবা away
    lastUpdated: "আজ, বিকাল ৪:৩০"
  },
  {
    id: 2,
    name: "ডাঃ ফাতেমা তুজ জোহরা",
    designation: "গাইনী ও স্ত্রী রোগ বিশেষজ্ঞ",
    location: "ছুটিতে আছেন (ঢাকার বাইরে)",
    schedule: "আগামী শনিবার (১৮ জুলাই) থেকে বসবেন",
    status: "away",
    lastUpdated: "গতকাল, রাত ৮:০০"
  },
  {
    id: 3,
    name: "জনাব আল-আমিন (এক্স-রে টেকনিশিয়ান)",
    designation: "রেডিওলজি বিভাগ",
    location: "এক্স-রে রুম (নিচ তলা)",
    schedule: "প্রতিদিন সকাল ৯:০০ - বিকাল ৫:০০",
    status: "available",
    lastUpdated: "আজ, সকাল ৯:০০"
  }
];

export default function Home() {
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      {/* হেডার */}
      <header className="bg-blue-600 text-white text-center py-6 shadow-md">
        <h1 className="text-2xl md:text-3xl font-bold">আমাদের ডায়াগনস্টিক সেন্টার</h1>
        <p className="text-sm mt-2 opacity-90">ডাক্তার ও স্টাফদের লাইভ অবস্থান ও ডিউটি আপডেট</p>
      </header>

      {/* মেইন কন্টেন্ট */}
      <main className="max-w-4xl mx-auto p-4 mt-6">
        <h2 className="text-xl font-semibold mb-4 text-center md:text-left">
          আজকের ডিউটি তালিকা (নামের ওপর ক্লিক করুন)
        </h2>

        {/* ডাক্তারদের তালিকা */}
        <div className="grid gap-4 md:grid-cols-2">
          {doctorsData.map((doc) => (
            <div
              key={doc.id}
              onClick={() => setSelectedDoctor(doc)}
              className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 cursor-pointer hover:shadow-md hover:border-blue-400 transition-all duration-200 flex justify-between items-center"
            >
              <div>
                <h3 className="text-lg font-bold text-gray-900">{doc.name}</h3>
                <p className="text-sm text-gray-500">{doc.designation}</p>
              </div>
              
              {/* লাইভ স্ট্যাটাস ডট */}
              <span className={`h-3 w-3 rounded-full ${doc.status === 'available' ? 'bg-green-500 animate-pulse' : 'bg-red-500'}`}></span>
            </div>
          ))}
        </div>

        {/* পপ-আপ মডাল (ক্লিক করলে যা দেখাবে) */}
        {selectedDoctor && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 animate-fadeIn">
            <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl relative">
              
              {/* বন্ধ করার বাটন */}
              <button 
                onClick={() => setSelectedDoctor(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-xl font-bold"
              >
                ✕
              </button>

              <div className="flex items-center gap-3 mb-4">
                <span className={`h-4 w-4 rounded-full ${selectedDoctor.status === 'available' ? 'bg-green-500' : 'bg-red-500'}`}></span>
                <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
                  {selectedDoctor.status === 'available' ? 'বর্তমানে আছেন' : 'বর্তমানে অনুপস্থিত'}
                </span>
              </div>

              <h3 className="text-xl font-bold text-blue-600 mb-1">{selectedDoctor.name}</h3>
              <p className="text-sm text-gray-500 mb-4">{selectedDoctor.designation}</p>
              
              <hr className="mb-4" />

              <div className="space-y-3">
                <div>
                  <span className="text-xs font-bold text-gray-400 uppercase block">এখন কোথায় আছেন:</span>
                  <span className="text-base font-medium text-gray-800 bg-blue-50 px-2 py-1 rounded inline-block mt-1">
                    {selectedDoctor.location}
                  </span>
                </div>

                <div>
                  <span className="text-xs font-bold text-gray-400 uppercase block">কবে কবে বসেন / ডিউটি সময়:</span>
                  <span className="text-sm text-gray-700 block mt-1">{selectedDoctor.schedule}</span>
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-gray-100 text-right">
                <span className="text-xs text-gray-400">সর্বশেষ আপডেট: {selectedDoctor.lastUpdated}</span>
              </div>

            </div>
          </div>
        )}
      </main>
    </div>
  );
}
