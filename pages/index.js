import { useState } from 'react';

// শুধু ডাক্তারদের ডাটা (প্রয়োজন অনুযায়ী নতুন ডাক্তার যোগ বা তথ্য এডিট করতে পারবেন)
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
    <div style={{ 
      fontFamily: "'Segoe UI', Roboto, sans-serif", 
      backgroundColor: "#f4f7fa", 
      minHeight: "100vh", 
      margin: 0, 
      paddingBottom: "60px" 
    }}>
      
      {/* মডার্ন গ্রেডিয়েন্ট হেডার */}
      <header style={{ 
        background: "linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%)", 
        color: "white", 
        padding: "50px 20px", 
        textAlign: "center", 
        boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
        borderBottom: "4px solid #00b4db"
      }}>
        <h1 style={{ margin: 0, fontSize: "36px", fontWeight: "700", letterSpacing: "1px" }}>
          সমতা ডায়াগনস্টিক সেন্টার
        </h1>
        <p style={{ 
          margin: "12px 0 0 0", 
          opacity: 0.85, 
          fontSize: "16px", 
          fontWeight: "300",
          color: "#00b4db" 
        }}>
          ডাক্তারদের লাইভ অবস্থান এবং চেম্বার শিডিউল
        </p>
      </header>

      {/* মেইন কন্টেন্ট */}
      <main style={{ maxWidth: "900px", margin: "40px auto", padding: "0 20px" }}>
        
        <div style={{ textAlign: "center", marginBottom: "30px" }}>
          <h2 style={{ fontSize: "22px", color: "#1e293b", fontWeight: "600", margin: "0 0 8px 0" }}>
            আজকের কর্তব্যরত ডাক্তারগণ
          </h2>
          <p style={{ margin: 0, color: "#64748b", fontSize: "14px" }}>
            যেকোনো ডাক্তারের নামের ওপর ক্লিক করে তার
