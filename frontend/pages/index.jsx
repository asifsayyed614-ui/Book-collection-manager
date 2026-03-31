import { useState, useEffect, useMemo } from 'react'
import axios from 'axios'
import Header from '../src/components/Header'
import StatsBar from '../src/components/StatsBar'
import FilterBar from '../src/components/FilterBar'
import BookCard from '../src/components/BookCard'
import BookModal from '../src/components/BookModal'
import EmptyState from '../src/components/EmptyState'

export default function Home() {
  const [books, setBooks]     = useState([])
  const [modal, setModal]     = useState(null)
  const [search, setSearch]   = useState('')
  const [genre, setGenre]     = useState('All')
  const [sort, setSort]       = useState('Recent')
  const [status, setStatus]   = useState('all')
  const [loading, setLoading] = useState(true)

  const fetchBooks = async () => {
    try {
      const { data } = await axios.get('/api/books')
      setBooks(data)
    } catch (err) {
      console.error('Failed to fetch books', err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => { fetchBooks() }, [])

  const handleSave = async (form) => {
    try {
      if (form._id) {
        const { data } = await axios.put(`/api/books/${form._id}`, form)
        setBooks(prev => prev.map(b => b._id === data._id ? data : b))
      } else {
        const { data } = await axios.post('/api/books', form)
        setBooks(prev => [data, ...prev])
      }
      setModal(null)
    } catch (err) {
      console.error('Failed to save book', err)
    }
  }

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/books/${id}`)
      setBooks(prev => prev.filter(b => b._id !== id))
      setModal(null)
    } catch (err) {
      console.error('Failed to delete book', err)
    }
  }

  const filtered = useMemo(() => {
    let list = [...books]
    if (search.trim()) {
      const q = search.toLowerCase()
      list = list.filter(b => b.title.toLowerCase().includes(q) || b.author.toLowerCase().includes(q))
    }
    if (genre !== 'All') list = list.filter(b => b.genre === genre)
    if (status !== 'all') list = list.filter(b => b.status === status)
    if (sort === 'Title')  list.sort((a, b) => a.title.localeCompare(b.title))
    if (sort === 'Author') list.sort((a, b) => a.author.localeCompare(b.author))
    if (sort === 'Rating') list.sort((a, b) => (b.rating || 0) - (a.rating || 0))
    return list
  }, [books, search, genre, status, sort])

  return (
    <div className="min-h-screen" style={{ background: 'var(--cream)' }}>
      <Header onAddBook={() => setModal('add')} />
      <StatsBar books={books} />
      <FilterBar
        search={search} setSearch={setSearch}
        genre={genre}   setGenre={setGenre}
        sort={sort}     setSort={setSort}
        status={status} setStatus={setStatus}
      />

      <main className="px-8 py-6">
        {loading ? (
          <div className="flex justify-center py-24">
            <div
              className="w-6 h-6 rounded-full border-2 animate-spin"
              style={{ borderColor: 'var(--accent)', borderTopColor: 'transparent' }}
            />
          </div>
        ) : filtered.length === 0 ? (
          <EmptyState onAddBook={() => setModal('add')} />
        ) : (
          <div className="grid gap-4" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))' }}>
            {filtered.map(book => (
              <BookCard key={book._id} book={book} onClick={setModal} />
            ))}
          </div>
        )}
      </main>

      {modal && (
        <BookModal
          book={modal === 'add' ? null : modal}
          onClose={() => setModal(null)}
          onSave={handleSave}
          onDelete={handleDelete}
        />
      )}
    </div>
  )
}
