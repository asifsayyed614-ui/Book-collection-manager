import React, { useState, useEffect } from 'react'

const GENRES = ['Fiction', 'Non-Fiction', 'Sci-Fi', 'Fantasy', 'Mystery', 'Biography', 'History', 'Self-Help']

function StarPicker({ value, onChange }) {
  const [hovered, setHovered] = useState(0)
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map(i => (
        <svg
          key={i}
          className="star"
          width="22" height="22" viewBox="0 0 12 12"
          fill={i <= (hovered || value) ? '#c4622d' : 'var(--border)'}
          onMouseEnter={() => setHovered(i)}
          onMouseLeave={() => setHovered(0)}
          onClick={() => onChange(i)}
        >
          <path d="M6 1l1.3 2.6 2.9.4-2.1 2 .5 2.9L6 7.5 3.4 8.9l.5-2.9-2.1-2 2.9-.4z" />
        </svg>
      ))}
    </div>
  )
}

export default function BookModal({ book, onClose, onSave, onDelete }) {
  const isEdit = Boolean(book?._id)

  const [form, setForm] = useState({
    title: '', author: '', genre: '', status: 'wishlist', rating: 0, notes: ''
  })

  useEffect(() => {
    if (book) setForm({ title: book.title || '', author: book.author || '', genre: book.genre || '', status: book.status || 'wishlist', rating: book.rating || 0, notes: book.notes || '' })
  }, [book])

  const set = (key, val) => setForm(f => ({ ...f, [key]: val }))

  const handleSubmit = e => {
    e.preventDefault()
    if (!form.title.trim() || !form.author.trim()) return
    onSave({ ...form, ...(isEdit ? { _id: book._id } : {}) })
  }

  return (
    <div className="modal-backdrop fixed inset-0 z-50 flex items-center justify-center p-4 animate-fadeIn" onClick={onClose}>
      <div
        className="w-full max-w-md rounded-2xl p-6 animate-fadeUp"
        style={{ background: 'var(--cream)', border: '1px solid var(--border)' }}
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-5">
          <h2 className="font-display text-xl font-semibold" style={{ color: 'var(--ink)' }}>
            {isEdit ? 'Edit Book' : 'Add Book'}
          </h2>
          <button onClick={onClose} className="p-1 rounded-lg hover:opacity-60 transition-opacity">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M4 4l10 10M14 4L4 14" stroke="var(--ink)" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* Title */}
          <div>
            <label className="text-xs font-medium mb-1 block" style={{ color: 'var(--warm-gray)' }}>Title *</label>
            <input
              type="text" required value={form.title} onChange={e => set('title', e.target.value)}
              placeholder="Book title"
              className="w-full px-3 py-2 rounded-xl text-sm border"
              style={{ borderColor: 'var(--border)', background: 'white' }}
            />
          </div>

          {/* Author */}
          <div>
            <label className="text-xs font-medium mb-1 block" style={{ color: 'var(--warm-gray)' }}>Author *</label>
            <input
              type="text" required value={form.author} onChange={e => set('author', e.target.value)}
              placeholder="Author name"
              className="w-full px-3 py-2 rounded-xl text-sm border"
              style={{ borderColor: 'var(--border)', background: 'white' }}
            />
          </div>

          {/* Genre + Status row */}
          <div className="flex gap-3">
            <div className="flex-1">
              <label className="text-xs font-medium mb-1 block" style={{ color: 'var(--warm-gray)' }}>Genre</label>
              <select
                value={form.genre} onChange={e => set('genre', e.target.value)}
                className="w-full px-3 py-2 rounded-xl text-sm border"
                style={{ borderColor: 'var(--border)', background: 'white' }}
              >
                <option value="">Select genre</option>
                {GENRES.map(g => <option key={g} value={g}>{g}</option>)}
              </select>
            </div>
            <div className="flex-1">
              <label className="text-xs font-medium mb-1 block" style={{ color: 'var(--warm-gray)' }}>Status</label>
              <select
                value={form.status} onChange={e => set('status', e.target.value)}
                className="w-full px-3 py-2 rounded-xl text-sm border"
                style={{ borderColor: 'var(--border)', background: 'white' }}
              >
                <option value="wishlist">Wishlist</option>
                <option value="reading">Reading</option>
                <option value="read">Read</option>
              </select>
            </div>
          </div>

          {/* Rating */}
          <div>
            <label className="text-xs font-medium mb-1 block" style={{ color: 'var(--warm-gray)' }}>Rating</label>
            <StarPicker value={form.rating} onChange={v => set('rating', v)} />
          </div>

          {/* Notes */}
          <div>
            <label className="text-xs font-medium mb-1 block" style={{ color: 'var(--warm-gray)' }}>Notes</label>
            <textarea
              value={form.notes} onChange={e => set('notes', e.target.value)}
              placeholder="Your thoughts…"
              rows={3}
              className="w-full px-3 py-2 rounded-xl text-sm border resize-none"
              style={{ borderColor: 'var(--border)', background: 'white' }}
            />
          </div>

          {/* Actions */}
          <div className="flex gap-2 pt-1">
            {isEdit && (
              <button
                type="button" onClick={() => onDelete(book._id)}
                className="px-4 py-2 rounded-xl text-sm font-medium border transition-opacity hover:opacity-70"
                style={{ borderColor: '#fca5a5', color: '#dc2626', background: '#fff5f5' }}
              >
                Delete
              </button>
            )}
            <button
              type="submit"
              className="flex-1 px-4 py-2 rounded-xl text-sm font-medium transition-opacity hover:opacity-80"
              style={{ background: 'var(--ink)', color: 'var(--cream)' }}
            >
              {isEdit ? 'Save Changes' : 'Add to Shelf'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
