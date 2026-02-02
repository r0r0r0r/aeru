export const apiVersion =
    process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-01-01'

export const dataset = (process.env.NEXT_PUBLIC_SANITY_DATASET || 'production') as string;
export const projectId = (process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'e1jul805') as string;

export const useCdn = false
