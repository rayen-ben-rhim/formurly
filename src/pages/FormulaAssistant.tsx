import React, { useState } from 'react';
import { Send, FileSpreadsheet, Copy, RefreshCw, LogOut } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { generateFormula } from '../lib/gemini';
import { useNavigate } from 'react-router-dom';

export function FormulaAssistant() {
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<{
    excel: string;
    sheets: string;
    explanation: string;
  } | null>(null);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    navigate('/login');
  };

  const handleGenerateFormulas = async (prompt: string) => {
    setIsLoading(true);
    setError(null);
    try {
      const result = await generateFormula(prompt);
      setResult(result);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <FileSpreadsheet className="w-10 h-10 text-indigo-600" />
            <h1 className="text-3xl font-bold text-gray-800">Formula Assistant</h1>
          </div>
          <button
            onClick={handleSignOut}
            className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:text-gray-900"
          >
            <LogOut className="w-5 h-5" />
            Sign Out
          </button>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Describe what you want to calculate
            </label>
            <div className="flex gap-3">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="e.g., Sum all values in column B where column A is greater than 0"
                className="flex-1 rounded-lg border-gray-300 border p-3 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
              <button
                onClick={() => handleGenerateFormulas(input)}
                disabled={isLoading || !input}
                className="bg-indigo-600 text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {isLoading ? <RefreshCw className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
                Generate
              </button>
            </div>
          </div>

          {error && (
            <div className="bg-red-50 text-red-700 p-4 rounded-lg mb-6">
              {error}
            </div>
          )}

          {result && (
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-semibold text-gray-700">Excel Formula</h3>
                  <button
                    onClick={() => copyToClipboard(result.excel)}
                    className="text-indigo-600 hover:text-indigo-700 flex items-center gap-1"
                  >
                    <Copy className="w-4 h-4" />
                    Copy
                  </button>
                </div>
                <code className="block bg-white p-3 rounded border border-gray-200">
                  {result.excel}
                </code>
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-semibold text-gray-700">Google Sheets Formula</h3>
                  <button
                    onClick={() => copyToClipboard(result.sheets)}
                    className="text-indigo-600 hover:text-indigo-700 flex items-center gap-1"
                  >
                    <Copy className="w-4 h-4" />
                    Copy
                  </button>
                </div>
                <code className="block bg-white p-3 rounded border border-gray-200">
                  {result.sheets}
                </code>
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-semibold text-gray-700 mb-2">Explanation</h3>
                <p className="text-gray-600">{result.explanation}</p>
              </div>
            </div>
          )}
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Popular Formula Types</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              'Sum with conditions',
              'Average calculation',
              'Lookup values',
              'Date calculations',
              'Text manipulation',
              'Conditional formatting',
              'Pivot calculations',
              'Statistical analysis'
            ].map((type) => (
              <button
                key={type}
                onClick={() => setInput(`Help me create a formula for ${type.toLowerCase()}`)}
                className="text-left p-3 rounded-lg border border-gray-200 hover:border-indigo-500 hover:bg-indigo-50 transition-colors"
              >
                {type}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}