import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FileSpreadsheet, Zap, Brain, Lock, Sparkles, ArrowRight } from 'lucide-react';

export function Landing() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center gap-2">
              <FileSpreadsheet className="w-8 h-8 text-indigo-600" />
              <span className="text-xl font-bold text-gray-900">Formula Assistant</span>
            </div>
            <div className="flex gap-4">
              <button
                onClick={() => navigate('/login')}
                className="px-4 py-2 text-indigo-600 hover:text-indigo-700 font-medium"
              >
                Sign In
              </button>
              <button
                onClick={() => navigate('/login')}
                className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 font-medium flex items-center gap-2"
              >
                Get Started <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-20 pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Write Excel Formulas{' '}
              <span className="text-indigo-600">10x Faster</span>{' '}
              with AI
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Transform complex spreadsheet tasks into simple conversations. Get instant, accurate formulas for Excel and Google Sheets.
            </p>
            <button
              onClick={() => navigate('/login')}
              className="px-8 py-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 font-medium text-lg shadow-lg hover:shadow-xl transition-all duration-200 flex items-center gap-2 mx-auto"
            >
              Try Formula Assistant Free <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why Choose Formula Assistant?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 rounded-xl bg-gray-50">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Lightning Fast
              </h3>
              <p className="text-gray-600">
                Get complex formulas in seconds, not minutes. Save hours of documentation searching and testing.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-gray-50">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <Brain className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                AI-Powered Intelligence
              </h3>
              <p className="text-gray-600">
                Advanced AI understands your needs and generates the perfect formula every time.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-gray-50">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <Lock className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Works Everywhere
              </h3>
              <p className="text-gray-600">
                Compatible with both Excel and Google Sheets. Use your formulas anywhere.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            How It Works
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-2xl font-bold text-indigo-600">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Describe Your Need
              </h3>
              <p className="text-gray-600">
                Tell us what you want to calculate in plain English
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-2xl font-bold text-indigo-600">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Get Your Formula
              </h3>
              <p className="text-gray-600">
                Receive the perfect formula instantly
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-2xl font-bold text-indigo-600">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Copy & Use
              </h3>
              <p className="text-gray-600">
                Copy the formula and use it in your spreadsheet
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-indigo-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Supercharge Your Spreadsheets?
          </h2>
          <p className="text-xl text-indigo-100 mb-8">
            Join thousands of users who are already saving hours with Formula Assistant
          </p>
          <button
            onClick={() => navigate('/login')}
            className="px-8 py-4 bg-white text-indigo-600 rounded-lg hover:bg-indigo-50 font-medium text-lg shadow-lg hover:shadow-xl transition-all duration-200 flex items-center gap-2 mx-auto"
          >
            Get Started Now <Sparkles className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <FileSpreadsheet className="w-6 h-6" />
              <span className="text-lg font-semibold text-white">Formula Assistant</span>
            </div>
            <p>© 2025 Formula Assistant. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}