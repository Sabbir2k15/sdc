import { useState } from 'react';

// শুধু ডাক্তারদের ডাটা
const doctorsData = [
  {
    id: 1,
    name: "ডাঃ মো ফয়সাল রহমান",
    designation: "মেডিসিন বিশেষজ্ঞ",
    location: "চেম্বার নং - ৪০২ (২য় তলা)",
    schedule: "শনি থেকে বুধ, বিকাল ৫:০০ - রাত ৯:০০",
    status: "available", 
    lastUpdated: "আজ, বিকাল ৪:৩০"
  },
  {
    id: 2,
    name: "ডাঃ ফাতেমা তুজ জোহরা",
    designation: "গাইনী ও স্ত্রী রোগ বিশেষজ্ঞ",
    location: "ছুটিতে আছেন (ঢাকার বাইরে)",
    schedule: "আগামী শনিবার থেকে বসবেন",
    status: "away",
    lastUpdated: "গতকাল, রাত ৮:০০"
  },
  {
    id: 3,
    name: "ডাঃ এম. এ. হাসান",
    designation: "হৃদরোগ ও বক্ষব্যাধি বিশেষজ্ঞ",
    location: "চেম্বার নং - ১০৫ (নিচ তলা)",
    schedule: "রবি, মঙ্গল ও বৃহস্পতিবার, সকাল ১০:০০ - দুপুর ২:০০",
    status: "available",
    lastUpdated: "আজ, সকাল ১০:১৫"
  }
];

export default function Home() {
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  return (
    <div className="container">
      {/* ইন্টারনাল মডার্ন সিএসএস ডিজাইন */}
      <style jsx global>{`
        body {
          margin: 0;
          padding: 0;
          font-family: 'Segoe UI', Roboto, sans-serif;
          background-color: #f4f7fa;
          color: #333;
        }
        .header {
          background: linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%);
          color: white;
          padding: 50px 20px;
          text-align: center;
          box-shadow: 0 4px 20px rgba(0,0,0,0.15);
          border-bottom: 4px solid #00b4db;
        }
        .header h1 {
          margin: 0;
          font-size: 36px;
          font-weight: 700;
        }
        .header p {
          margin: 12px 0 0 0;
          font-size: 16px;
          color: #00b4db;
        }
        .main-content {
          max-w: 900px;
          max-width: 900px;
          margin: 40px auto;
          padding: 0 20px;
        }
        .title-area {
          text-align: center;
          margin-bottom: 30px;
        }
        .title-area h2 {
          font-size: 22px;
          color: #1e293b;
          margin: 0 0 8px 0;
        }
        .title-area p {
          margin: 0;
          color: #64748b;
          font-size: 14px;
        }
        .grid-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 20px;
        }
        .card {
          background-color: white;
          padding: 24px;
          border-radius: 16px;
          box-shadow: 0 4px 6px rgba(0,0,
