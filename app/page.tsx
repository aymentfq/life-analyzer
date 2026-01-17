"use client";

import React, { useState } from "react";
import LandingPage from "./_components/LandingPage";
import Dashboard from "./_components/Dashboard";

export default function Home() {
  // الحالة للتبديل بين الصفحة الرئيسية والداشبورد
  const [showDashboard, setShowDashboard] = useState(false);

  return (
    <main>
      {showDashboard ? (
        // عند الضغط على الزر يظهر الداشبورد
        <Dashboard onBack={() => setShowDashboard(false)} />
      ) : (
        // الصفحة الرئيسية الافتراضية
        <LandingPage onStart={() => setShowDashboard(true)} />
      )}
    </main>
  );
}