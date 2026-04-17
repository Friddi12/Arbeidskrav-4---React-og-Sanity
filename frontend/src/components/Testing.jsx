import client from '../helpers/client'
import { useEffect, useState } from 'react'

export default function Testing(){
        const [sanityProducts, setSanityProducts] = useState(null)

    useEffect(() => {
      async function fetchAll() {
        const allProds = await client.fetch("*[_type == 'test']{_id, testname, 'imageURL': testimage.asset->url}")
        setSanityProducts(allProds)
      }

      fetchAll()
    }, [])

    return(
        <main>
            {sanityProducts?.map((product) => (
              <div key={product._id} style={{ marginBottom: '20px', borderBottom: '1px solid #eee' }}>
          
              <h2>{product.testname}</h2>

            {product.imageURL ? (
              <img src={product.imageURL} alt={product.testname} style={{ maxWidth: '300px', height: 'auto' }} />
              ) : (
              <p>Ingen Bilde</p>
              )}
          
          </div>
        ))}
        </main>
    )
}
