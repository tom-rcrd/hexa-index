'use client'

import { Lock, X } from 'lucide-react'

export default function ModalLogin({ auth }) {
  if (!auth.showLogin) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg p-6 max-w-md w-full">
        <div className="flex items-center gap-3 mb-6">
          <Lock className="text-blue-600" size={24} />
          <h2 className="text-2xl font-bold">Connexion</h2>
        </div>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              value={auth.loginData.email}
              onChange={(e) => auth.setLoginData({ ...auth.loginData, email: e.target.value })}
              onKeyPress={(e) => e.key === 'Enter' && auth.login()}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="admin@exemple.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Mot de passe</label>
            <input
              type="password"
              value={auth.loginData.password}
              onChange={(e) => auth.setLoginData({ ...auth.loginData, password: e.target.value })}
              onKeyPress={(e) => e.key === 'Enter' && auth.login()}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="••••••••"
            />
          </div>
          <div className="flex gap-3">
            <button
              onClick={auth.login}
              className="flex-1 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 font-medium"
            >
              Se connecter
            </button>
            <button
              onClick={() => auth.setShowLogin(false)}
              className="bg-gray-300 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-400"
            >
              Annuler
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}