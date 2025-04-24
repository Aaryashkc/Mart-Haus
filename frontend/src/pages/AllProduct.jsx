import React, { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useSearchStore } from '../store/UseSearchStore'
import { products, ProductCard } from '../components/BestSellers'

const AllProduct = () => {
  const [searchParams] = useSearchParams()
  const query = searchParams.get('search') || ''
  const setQuery = useSearchStore(state => state.setQuery)

  useEffect(() => {
    setQuery(query)
  }, [query, setQuery])

  // products selection
  const bestOffers = products.filter(p => p.discount.includes('%'))
  const displayedProducts = query
    ? products.filter(p => p.name.toLowerCase().includes(query.toLowerCase()))
    : products

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Best Offers Section */}
      {bestOffers.length > 0 && (
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Best Offers</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {bestOffers.map(p => <ProductCard key={p.id} {...p} />)}
          </div>
        </section>
      )}

      {/* All Products Section */}
      <section className="mb-10">
        <h2 className="text-center text-3xl font-bold mb-6">
          {query ? `Search results for "${query}"` : 'All Products'}
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {displayedProducts.map(p => <ProductCard key={p.id} {...p} />)}
        </div>
      </section>
    </div>
  )
}

export default AllProduct
