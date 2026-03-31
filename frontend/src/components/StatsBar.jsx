import React from 'react'

export default function StatsBar({ books }) {
  const total     = books.length
  const read      = books.filter(b => b.status === 'read').length
  const reading   = books.filter(b => b.status === 'reading').length
  const wishlist  = books.filter(b => b.status === 'wishlist').length
  const progress  = total ? Math.round((read / total) * 100) : 0

  const stats = [
    { label: 'Total Books', value: total },
    { label: 'Read',        value: read },
    { label: 'Reading',     value: reading },
    { label: 'Wishlist',    value: wishlist },
  ]

  return (
    <div className="px-8 py-5 border-b" style={{ borderColor: 'var(--border)' }}>
      <div className="flex items-center gap-8 flex-wrap">
        {stats.map(s => (
          <div key={s.label}>
            <div className="text-2xl font-semibold font-display" style={{ color: 'var(--ink)' }}>{s.value}</div>
            <div className="text-xs mt-0.5" style={{ color: 'var(--warm-gray)' }}>{s.label}</div>
          </div>
        ))}
        <div className="flex-1 min-w-[160px]">
          <div className="flex justify-between text-xs mb-1.5" style={{ color: 'var(--warm-gray)' }}>
            <span>Reading progress</span>
            <span>{progress}%</span>
          </div>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${progress}%` }} />
          </div>
        </div>
      </div>
    </div>
  )
}
