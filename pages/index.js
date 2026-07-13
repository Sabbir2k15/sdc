import { useState } from 'react';

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

export default function Home() {
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  // স্টাইল অবজেক্টসমূহ (Next.js এর সব ভার্সনের জন্য নিরাপদ)
  const styles = {
    container: { fontFamily: "'Segoe UI', Roboto, sans-serif", backgroundColor: "#f4f7fa", minHeight: "100vh", margin: 0, paddingBottom: "60px" },
    header: { background: "linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%)", color: "white", padding: "50px 20px", textAlign: "center", boxShadow: "0 4px 20px rgba(0,0,0,0.15)", borderBottom: "4px solid #00b4db" },
    h1: { margin: 0, fontSize: "36px", fontWeight: "700" },
    subTitle: { margin: "12px 0 0 0", fontSize: "16px", color: "#00b4db" },
    main: { maxWidth: "900px", margin: "40px auto", padding: "0 20px" },
    titleArea: { textAlign: "center", marginBottom: "30px" },
    h2: { fontSize: "22px", color: "#1e293b", margin: "0 0 8px 0" },
    p: { margin: 0, color: "#64748b", fontSize: "14px" },
    grid: { display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: "center" },
    card: { backgroundColor: "white", padding: "24px", borderRadius: "16px", boxShadow: "0 4px 6px rgba(0,0,0,0.05)", cursor: "pointer", border: "1px solid #e2e8f0", display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%", maxWidth: "400px", position: "relative", overflow: "hidden" },
    cardInfo: { paddingLeft: "10px" },
    cardName: { margin: "0 0 6px 0", fontSize: "18px", color: "#0f172a", fontWeight: "600" },
    cardDesc: { margin: 0, fontSize: "14px", color: "#64748b" },
    liveDot: { height: "14px", width: "14px", borderRadius: "50%", flexShrink: 0, marginLeft: "15px" },
    
    // মডাল স্টাইলস
    overlay: { position: "fixed", top: 0, left: 0, right: 0, bottom: 0, backgroundColor: "rgba(15, 23, 42, 0.6)", display: "flex", justifyContent: "center", alignItems: "center", zIndex: 1000, padding: "20px" },
    modalBox: { backgroundColor: "white", padding: "35px", borderRadius: "24px", maxWidth: "460px", width: "100%", boxShadow: "0 25px 50px rgba(0,0,0,0.2)", position: "relative", border: "1px solid #e2e8f0" },
    closeBtn: { position: "absolute", top: 20px, right: 20px, background: "#f1f5f9", border: "none", width: "32px", height: "32px", borderRadius: "50%", fontSize: "16px", cursor: "pointer", color: "#64748b" },
    badge: { display: "flex", alignItems: "center", gap: "8px", marginBottom: "18px" },
    badgeDot: { height: "10px", width: "10px", borderRadius: "50%" },
    modalTitle: { margin: "0 0 6px 0", color: "#1e3a8a", fontSize: "24px", fontWeight: "700" },
    modalDesc: { margin: "0 0 25px 0", color: "#64748b", fontSize: "15px" },
    infoBlock: { backgroundColor: "#f8fafc", padding: "20px", borderRadius: "16px", marginBottom: "25px", border: "1px solid #f1f5f9" },
    infoItem: { marginBottom: "16px" },
    infoLabel: { fontSize: "11px", color: "#94a3b8", fontWeight: "700", display: "block", textTransform: "uppercase" },
    infoVal: { display: "block", marginTop: "6px", color: "#1e293b", fontWeight: "600", fontSize: "15px" },
    updateTime: { textAlign: "right", fontSize: "11px", color: "#94a3b8" }
  };

  return (
    <div style={styles.container}>
      {/* হেডার */}
      <header style={styles.header}>
        <h1 style={styles.h1}>সমতা ডায়াগনস্টিক সেন্টার</h1>
        <p style={styles.subTitle}>ডাক্তারদের লাইভ অবস্থান এবং চেম্বার শিডিউল</p>
      </header>

      {/* মেইন কন্টেন্ট */}
      <main style={styles.main}>
        <div style={styles.titleArea}>
          <h2 style={styles.h2}>আজকের कर्तव्यরত ডাক্তারগণ</h2>
          <p style={styles.p}>যেকোনো ডাক্তারের নামের ওপর ক্লিক করে তার চেম্বার নম্বর ও লাইভ আপডেট জানুন</p>
        </div>

        {/* লিস্ট */}
        <div style={styles.grid}>
          {doctorsData.map((doc) => (
            <div key={doc.id} style={styles.card} onClick={() => setSelectedDoctor(doc)}>
              {/* লেফট কালার বার */}
              <div style={{
                position: "absolute", left: 0, top: 0, bottom: 0, width: "6px",
                backgroundColor: doc.status === 'available' ? '#10b981' : '#ef4444'
              }}></div>
              
              <div style={styles.cardInfo}>
                <h3 style={styles.cardName}>{doc.name}</h3>
                <p style={styles.cardDesc}>{doc.designation}</p>
              </div>
              <div style={{
                ...styles.liveDot,
                backgroundColor: doc.status === 'available' ? '#10b981' : '#ef4444',
                boxShadow: doc.status === 'available' ? '0 0 10px #10b981' : '0 0 10px #ef4444'
              }}></div>
            </div>
          ))}
        </div>

        {/* পপ-আপ মডাল */}
        {selectedDoctor && (
          <div style={styles.overlay} onClick={() => setSelectedDoctor(null)}>
            <div style={styles.modalBox} onClick={(e) => e.stopPropagation()}>
              <button style={styles.closeBtn} onClick={() => setSelectedDoctor(null)}>✕</button>
              
              <div style={styles.badge}>
                <div style={{ ...styles.badgeDot, backgroundColor: selectedDoctor.status === 'available' ? '#10b981' : '#ef4444' }}></div>
                <span style={{ fontSize: "12px", fontWeight: "700", color: selectedDoctor.status === 'available' ? '#10b981' : '#ef4444' }}>
                  {selectedDoctor.status === 'available' ? 'বর্তমানে চেম্বারে আছেন' : 'বর্তমানে অনুপস্থিত'}
                </span>
              </div>

              <h3 style={styles.modalTitle}>{selectedDoctor.name}</h3>
              <p style={styles.modalDesc}>{selectedDoctor.designation}</p>
              
              <div style={styles.infoBlock}>
                <div style={styles.infoItem}>
                  <span style={styles.infoLabel}>চেম্বার লোকেশন:</span>
                  <span style={styles.infoVal}>📍 {selectedDoctor.location}</span>
                </div>
                <div style={{ ...styles.infoItem, marginBottom: 0 }}>
                  <span style={styles.infoLabel}>রোগী দেখার সময় ও দিন:</span>
                  <span style={styles.infoVal}>🗓️ {selectedDoctor.schedule}</span>
                </div>
              </div>

              <div style={styles.updateTime}>
                <span>সর্বশেষ তথ্য আপডেট: {selectedDoctor.lastUpdated}</span>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
