import React from 'react'

export default function EmptyState({ onAddBook }) {
  return (
    <div className="flex flex-col items-center justify-center py-24 animate-fadeIn">
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none" className="mb-5 opacity-30">
        <rect x="8" y="6" width="30" height="48" rx="4" stroke="var(--ink)" strokeWidth="2" />
        <rect x="22" y="6" width="30" height="48" rx="4" fill="var(--card-bg)" stroke="var(--ink)" strokeWidth="2" />
        <line x1="28" y1="18" x2="46" y2="18" stroke="var(--ink)" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="28" y1="25" x2="46" y2="25" stroke="var(--ink)" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="28" y1="32" x2="38" y2="32" stroke="var(--ink)" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
      <p className="font-display text-xl font-semibold mb-1" style={{ color: 'var(--ink)' }}>Your shelf is empty</p>
      <p className="text-sm mb-6" style={{ color: 'var(--warm-gray)' }}>Start building your collection</p>
      <button
        onClick={onAddBook}
        className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-opacity hover:opacity-80"
        style={{ background: 'var(--ink)', color: 'var(--cream)' }}
      >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M7 1v12M1 7h12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
        Add your first book
      </button>
    </div>
  )
}
