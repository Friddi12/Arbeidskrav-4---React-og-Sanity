import client from '../helpers/client'
import { useEffect, useState } from 'react'

export default function Testing(){
        const [sanityProducts, setSanityProducts] = useState(null)

    useEffect(() => {
      async function fetchAll() {
        const allProds = await client.fetch("*[_type == 'test']{_id, testname, testimage}")
        setSanityProducts(allProds)
      }

      fetchAll()
    }, [])

    return(
        <div>
            TEST
        </div>
    )
}
