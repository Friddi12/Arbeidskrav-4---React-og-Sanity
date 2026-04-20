import client from '../helpers/client'
import { useEffect, useState } from 'react'

export default function Testing(){
        const [sanityProducts, setSanityProducts] = useState(null)

    useEffect(() => {
      async function fetchAll() {
        const allProds = await client.fetch("*[_type == 'oldreqs']{_id, reqname, reqdesc}")
        setSanityProducts(allProds)
      }

      fetchAll()
    }, [])

    return(
        <section>
            <h3>Arbeidskrav i UIN</h3>
            {sanityProducts?.map((product) => (
              <article key={product._id}>
          
                <h2>{product.reqname}</h2>
                <p>{product.reqdesc}</p>

          
              </article>
        ))}
        </section>
    )
}
