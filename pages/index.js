import React, { useState } from 'react';

export default function Home() {
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  // ডাক্তারদের ডাটা
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

  return (
    <div style={{ fontFamily: 'sans-serif', backgroundColor: '#f4f7fa', minHeight: '100vh', margin: 0, paddingBottom: '60px' }}>
      
      {/* হেডার */}
      <header style={{ background: 'linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%)', color: 'white', padding: '40px 20px', textAlign: 'center', borderBottom: '4px solid #00b4db' }}>
        <h1 style={{ margin: 0, fontSize: '32px', fontWeight: '700' }}>সমতা ডায়াগনস্টিক সেন্টার</h1>
        <p style={{ margin: '10px 0 0 0', fontSize: '16px', color: '#00b4db' }}>ডাক্তারদের লাইভ অবস্থান এবং চেম্বার শিডিউল</p>
      </header>

      {/* মেইন কন্টেন্ট */}
      <main style={{ maxWidth: '800px', margin: '40px auto', padding: '0 20px' }}>
        <div style={{ textAlign: 'center', marginBottom: '30px' }}>
          <h2 style={{ fontSize: '22px', color: '#1e293b', margin: '0 0 8px 0' }}>আজকের ডিউটি তালিকা</h2>
          <p style={{ margin: 0, color: '#64748b', fontSize: '14px' }}>যেকোনো ডাক্তারের নামের ওপর ক্লিক করে বিস্তারিত জানুন</p>
        </div>

        {/* কার্ড লিস্ট */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          {doctorsData.map((doc) => (
            <div 
              key={doc.id} 
              onClick={() => setSelectedDoctor(doc)}
              style={{
                backgroundColor: 'white', padding: '20px', borderRadius: '12px',
                cursor: 'pointer', border: '1px solid #e2e8f0', display: 'flex',
                justifyContent: 'space-between', alignItems: 'center', position: 'relative'
              }}
            >
              <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '6px', backgroundColor: doc.status === 'available' ? '#10b981' : '#ef4444', borderRadius: '12px 0 0 12px' }}></div>
              <div style={{ paddingLeft: '15px' }}>
                <h3 style={{ margin: '0 0 5px 0', fontSize: '18px', color: '#0f172a' }}>{doc.name}</h3>
                <p style={{ margin: 0, fontSize: '14px', color: '#64748b' }}>{doc.designation}</p>
              </div>
              <div style={{ height: '12px', width: '12px', borderRadius: '50%', backgroundColor: doc.status === 'available' ? '#10b981' : '#ef4444' }}></div>
            </div>
          ))}
        </div>

        {/* মডাল পপ-আপ */}
        {selectedDoctor && (
          <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(15, 23, 42, 0.6)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000, padding: '20px' }} onClick={() => setSelectedDoctor(null)}>
            <div style={{ backgroundColor: 'white', padding: '30px', borderRadius: '20px', maxWidth: '450px', width: '100%', position: 'relative' }} onClick={(e) => e.stopPropagation()}>
              <button style={{ position: 'absolute', top: '15px', right: '20px', background: '#f1f5f9', border: 'none', width: '30px', height: '30px', borderRadius: '50%', cursor: 'pointer' }} onClick={() => setSelectedDoctor(null)}>✕</button>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '15px' }}>
                <div style={{ height: '10px', width: '10px', borderRadius: '50%', backgroundColor: selectedDoctor.status === 'available' ? '#10b981' : '#ef4444' }}></div>
                <span style={{ fontSize: '12px', fontWeight: '700', color: selectedDoctor.status === 'available' ? '#10b981' : '#ef4444' }}>
                  {selectedDoctor.status === 'available' ? 'বর্তমানে চেম্বারে আছেন' : 'বর্তমানে অনুপস্থিত'}
                </span>
              </div>

              <h3 style={{ margin: '0 0 5px 0', color: '#1e3a8a', fontSize: '22px' }}>{selectedDoctor.name}</h3>
              <p style={{ margin: '0 0 20px 0', color: '#64748b', fontSize: '14px' }}>{selectedDoctor.designation}</p>
              
              <div style={{ backgroundColor: '#f8fafc', padding: '15px', borderRadius: '12px', marginBottom: '20px', border: '1px solid #f1f5f9' }}>
                <div style={{ marginBottom: '12px' }}>
                  <span style={{ fontSize: '11px', color: '#94a3b8', fontWeight: '700', display: 'block' }}>চেম্বার লোকেশন:</span>
                  <span style={{ color: '#1e293b', fontWeight: '600', fontSize: '15px' }}>📍 {selectedDoctor.location}</span>
                </div>
                <div>
                  <span style={{ fontSize: '11px', color: '#94a3b8', fontWeight: '700', display: 'block' }}>রোগী দেখার সময়:</span>
                  <span style={{ fontSize: '14px', color: '#334155', fontWeight: '500' }}>🗓️ {selectedDoctor.schedule}</span>
                </div>
              </div>

              <div style={{ textAlign: 'right', fontSize: '11px', color: '#94a3b8' }}>
                <span>সর্বশেষ আপডেট: {selectedDoctor.lastUpdated}</span>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
