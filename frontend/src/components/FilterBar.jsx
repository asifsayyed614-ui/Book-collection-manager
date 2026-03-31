import React from 'react'

const GENRES = ['All', 'Fiction', 'Non-Fiction', 'Sci-Fi', 'Fantasy', 'Mystery', 'Biography', 'History', 'Self-Help']
const SORTS  = ['Recent', 'Title', 'Author', 'Rating']

export default function FilterBar({ search, setSearch, genre, setGenre, sort, setSort, status, setStatus }) {
  return (
    <div className="px-8 py-4 border-b flex flex-col gap-3" style={{ borderColor: 'var(--border)' }}>
      {/* Top row: search + status + sort */}
      <div className="flex items-center gap-3 flex-wrap">
        {/* Search */}
        <div className="relative flex-1 min-w-[200px]">
          <svg className="absolute left-3 top-1/2 -translate-y-1/2" width="14" height="14" viewBox="0 0 14 14" fill="none">
            <circle cx="6" cy="6" r="4.5" stroke="var(--warm-gray)" strokeWidth="1.4" />
            <path d="M10 10l2.5 2.5" stroke="var(--warm-gray)" strokeWidth="1.4" strokeLinecap="round" />
          </svg>
          <input
            type="text"
            placeholder="Search books, authors…"
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full pl-8 pr-3 py-2 rounded-xl text-sm border"
            style={{ borderColor: 'var(--border)', background: 'white', color: 'var(--ink)' }}
          />
        </div>

        {/* Status filter */}
        <select
          value={status}
          onChange={e => setStatus(e.target.value)}
          className="px-3 py-2 rounded-xl text-sm border"
          style={{ borderColor: 'var(--border)', background: 'white', color: 'var(--ink)' }}
        >
          <option value="all">All Status</option>
          <option value="reading">Reading</option>
          <option value="read">Read</option>
          <option value="wishlist">Wishlist</option>
        </select>

        {/* Sort tabs */}
        <div className="flex items-center gap-1 rounded-xl p-1" style={{ background: 'var(--border)' }}>
          {SORTS.map(s => (
            <button
              key={s}
              onClick={() => setSort(s)}
              className={`sort-tab${sort === s ? ' active' : ''}`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      {/* Genre pills */}
      <div className="flex items-center gap-2 flex-wrap">
        {GENRES.map(g => (
          <button
            key={g}
            onClick={() => setGenre(g)}
            className={`genre-pill${genre === g ? ' active' : ''}`}
          >
            {g}
          </button>
        ))}
      </div>
    </div>
  )
}
