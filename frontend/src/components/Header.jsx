import React from 'react'

export default function Header({ onAddBook }) {
  return (
    <header className="flex items-center justify-between px-8 py-5 border-b" style={{ borderColor: 'var(--border)', background: 'var(--cream)' }}>
      <div className="flex items-center gap-3">
        {/* Book icon */}
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
          <rect x="4" y="3" width="14" height="22" rx="2" fill="var(--accent)" opacity="0.15" />
          <rect x="4" y="3" width="14" height="22" rx="2" stroke="var(--accent)" strokeWidth="1.5" />
          <rect x="10" y="3" width="14" height="22" rx="2" fill="var(--card-bg)" stroke="var(--accent)" strokeWidth="1.5" />
          <line x1="13" y1="9" x2="21" y2="9" stroke="var(--accent)" strokeWidth="1.2" strokeLinecap="round" />
          <line x1="13" y1="13" x2="21" y2="13" stroke="var(--accent)" strokeWidth="1.2" strokeLinecap="round" />
          <line x1="13" y1="17" x2="18" y2="17" stroke="var(--accent)" strokeWidth="1.2" strokeLinecap="round" />
        </svg>
        <span className="font-display text-2xl font-semibold tracking-tight" style={{ color: 'var(--ink)' }}>
          Shelf
        </span>
      </div>
      <button
        onClick={onAddBook}
        className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-opacity hover:opacity-80"
        style={{ background: 'var(--ink)', color: 'var(--cream)' }}
      >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M7 1v12M1 7h12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
        Add Book
      </button>
    </header>
  )
}
