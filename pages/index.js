import { useState } from 'react';

// ডাক্তার ও স্টাফদের ডাটা
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
    <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#f0f2f5', minHeight: '100vh', margin: 0, paddingBottom: '40px' }}>
      
      {/* হেডার / ওপরের নীল অংশ */}
      <header style={{ backgroundColor: '#0066cc', color: 'white', padding: '30px 20px', textAlign: 'center', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
        <h1 style={{ margin: 0, fontSize: '28px' }}>আমাদের ডায়াগনস্টিক সেন্টার</h1>
        <p style={{ margin: '10px 0 0 0', opacity: 0.9, fontSize: '14px' }}>ডাক্তার ও স্টাফদের লাইভ অবস্থান ও ডিউটি আপডেট</p>
      </header>

      {/* মেইন কন্টেন্ট */}
      <main style={{ maxWidth: '800px', margin: '30px auto', padding: '0 20px' }}>
        <h2 style={{ fontSize: '20px', color: '#333', marginBottom: '20px', textAlign: 'center' }}>
          আজকের ডিউটি তালিকা (নামের ওপর ক্লিক করুন)
        </h2>

        {/* ডাক্তারদের গ্রিড বা লিস্ট */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
          {doctorsData.map((doc) => (
            <div
              key={doc.id}
              onClick={() => setSelectedDoctor(doc)}
              style={{
                backgroundColor: 'white',
                padding: '20px',
                borderRadius: '12px',
                boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
                cursor: 'pointer',
                border: '1px solid #e1e4e8',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}
            >
              <div style={{ flexGrow: 1 }}>
                <h3 style={{ margin: '0 0 5px 0', fontSize: '18px', color: '#111' }}>{doc.name}</h3>
                <p style={{ margin: 0, fontSize: '14px', color: '#666' }}>{doc.designation}</p>
              </div>
              
              {/* লাইভ অন/অফ ডট */}
              <div style={{
                height: '12px',
                width: '12px',
                borderRadius: '50%',
                backgroundColor: doc.status === 'available' ? '#2ecc71' : '#e74c3c',
                marginLeft: '15px',
                flexShrink: 0
              }}></div>
            </div>
          ))}
        </div>

        {/* পপ-আপ (ক্লিক করলে যা ভেসে উঠবে) */}
        {selectedDoctor && (
          <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.5)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000,
            padding: '20px'
          }}>
            <div style={{
              backgroundColor: 'white',
              padding: '30px',
              borderRadius: '16px',
              maxWidth: '450px',
              width: '100%',
              boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
              position: 'relative'
            }}>
              
              {/* বন্ধ করার বাটন */}
              <button 
                onClick={() => setSelectedDoctor(null)}
                style={{
                  position: 'absolute',
                  top: '15px',
                  right: '20px',
                  background: 'none',
                  border: 'none',
                  fontSize: '22px',
                  cursor: 'pointer',
                  color: '#999'
                }}
              >
                ✕
              </button>

              {/* স্ট্যাটাস টেক্সট */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '15px' }}>
                <div style={{
                  height: '10px',
                  width: '10px',
                  borderRadius: '50%',
                  backgroundColor: selectedDoctor.status === 'available' ? '#2ecc71' : '#e74c3c'
                }}></div>
                <span style={{ fontSize: '12px', fontWeight: 'bold', color: '#666', textTransform: 'uppercase' }}>
                  {selectedDoctor.status === 'available' ? 'বর্তমানে আছেন' : 'বর্তমানে অনুপস্থিত'}
                </span>
              </div>

              <h3 style={{ margin: '0 0 5px 0', color: '#0066cc', fontSize: '22px' }}>{selectedDoctor.name}</h3>
              <p style={{ margin: '0 0 20px 0', color: '#666', fontSize: '15px' }}>{selectedDoctor.designation}</p>
              
              <hr style={{ border: 0, borderTop: '1px solid #eee', marginBottom: '20px' }} />

              <div style={{ marginBottom: '15px' }}>
                <span style={{ fontSize: '11px', color: '#999', fontWeight: 'bold', display: 'block', textTransform: 'uppercase' }}>এখন কোথায় আছেন:</span>
                <span style={{
                  display: 'inline-block',
                  marginTop: '5px',
                  backgroundColor: '#e6f2ff',
                  color: '#0066cc',
                  padding: '6px 12px',
                  borderRadius: '6px',
                  fontWeight: '500',
                  fontSize: '15px'
                }}>
                  {selectedDoctor.location}
                </span>
              </div>

              <div style={{ marginBottom: '20px' }}>
                <span style={{ fontSize: '11px', color: '#999', fontWeight: 'bold', display: 'block', textTransform: 'uppercase' }}>কবে কবে বসেন / ডিউটি সময়:</span>
                <span style={{ fontSize: '14px', color: '#333', display: 'block', marginTop: '5px' }}>{selectedDoctor.schedule}</span>
              </div>

              <div style={{ borderTop: '1px solid #eee', paddingTop: '10px', textAlign: 'right' }}>
                <span style={{ fontSize: '11px', color: '#aaa' }}>সর্বশেষ আপডেট: {selectedDoctor.lastUpdated}</span>
              </div>

            </div>
          </div>
        )}
      </main>
    </div>
  );
}
