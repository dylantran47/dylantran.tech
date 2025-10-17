import React from 'react';
import InfoCard from './components/InfoCard';
import PdfList from './components/PdfList';
import MatrixBackground from './components/MatrixBackground'; // 🔹 Thêm dòng này

const App = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* 🔹 Nền Matrix */}
      <MatrixBackground />

      {/* 🔹 Nội dung chính */}
      <div className="relative z-10 flex flex-col items-center p-8 bg-glass rounded-2xl mx-4 mt-10 max-w-4xl">
        <h1 className="text-4xl font-bold mb-6 text-blue-700 text-center">
          Intrusion Detection System<br />
          Intrusion Prevention System
        </h1>
        <InfoCard />
        <PdfList />
        <footer className="mt-10 text-sm text-gray-500 text-center">
          © {new Date().getFullYear()} Dylan Tran — All rights reserved.
        </footer>
      </div>
    </div>
  );
};

export default App;
