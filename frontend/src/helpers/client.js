import { createClient } from '@sanity/client'

const client = createClient({
    projectId: "e90nmeq5",
    dataset: "production",
    useCdn: false,
    apiVersion: "2026-04-17"
})

export default client