import { createClient } from "next-sanity";

export const client =  createClient({
    projectId: process.env.SANITY_PROJECT_ID,
    dataset: process.env.SANITY_DATASET,
    useCdn:true,
    apiVersion:"2023-01-01"
})