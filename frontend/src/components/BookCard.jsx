import React from 'react'

const SPINE_COLORS = ['#c4622d', '#5b7fa6', '#6a9e6f', '#9b6b9e', '#c4a44a', '#7a6e5f']

function Stars({ rating }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map(i => (
        <svg key={i} width="12" height="12" viewBox="0 0 12 12" fill={i <= rating ? '#c4622d' : 'var(--border)'}>
          <path d="M6 1l1.3 2.6 2.9.4-2.1 2 .5 2.9L6 7.5 3.4 8.9l.5-2.9-2.1-2 2.9-.4z" />
        </svg>
      ))}
    </div>
  )
}

export default function BookCard({ book, onClick }) {
  const spineColor = SPINE_COLORS[book.title.charCodeAt(0) % SPINE_COLORS.length]

  return (
    <div
      className="book-card animate-fadeUp flex rounded-2xl overflow-hidden cursor-pointer"
      style={{ background: 'var(--card-bg)', border: '1px solid var(--border)' }}
      onClick={() => onClick(book)}
    >
      <div className="spine" style={{ background: spineColor }} />
      <div className="flex-1 p-4">
        <div className="flex items-start justify-between gap-2 mb-1">
          <h3 className="font-display font-semibold text-base leading-snug" style={{ color: 'var(--ink)' }}>
            {book.title}
          </h3>
          <span className={`badge badge-${book.status} shrink-0`}>{book.status}</span>
        </div>
        <p className="text-sm mb-3" style={{ color: 'var(--warm-gray)' }}>{book.author}</p>

        <div className="flex items-center justify-between">
          <Stars rating={book.rating || 0} />
          {book.genre && (
            <span className="text-xs px-2 py-0.5 rounded-full" style={{ background: 'var(--border)', color: 'var(--warm-gray)' }}>
              {book.genre}
            </span>
          )}
        </div>

        {book.notes && (
          <p className="text-xs mt-2 line-clamp-2" style={{ color: 'var(--warm-gray)' }}>{book.notes}</p>
        )}
      </div>
    </div>
  )
}
