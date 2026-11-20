import React from 'react';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto text-center py-16">
        <h1 className="text-4xl font-bold text-blue-700 mb-4">
          Welcome to MediAI Scan
        </h1>

        <p className="text-lg text-gray-600 mb-8">
          AI-Powered Medical Image Analysis Platform
        </p>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-semibold mb-4">
            Medical AI Scanner
          </h2>
          <p className="text-gray-600">
            Upload medical images for AI-assisted analysis.
          </p>
        </div>
      </div>
    </main>
  );
}
