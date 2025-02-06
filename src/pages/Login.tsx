import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthForm } from '../components/AuthForm';
import { FileSpreadsheet } from 'lucide-react';

export function Login() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <FileSpreadsheet className="w-12 h-12 text-indigo-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900">Formula Assistant</h1>
          <p className="mt-2 text-gray-600">Sign in to access your formula assistant</p>
        </div>

        <div className="bg-white shadow-xl rounded-lg p-8">
          <AuthForm onSuccess={() => navigate('/app')} />
        </div>
      </div>
    </div>
  );
}