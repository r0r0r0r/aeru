import Medusa from "@medusajs/medusa-js";

const baseUrl = process.env.NEXT_PUBLIC_MEDUSA_BACKEND_URL ?? "http://localhost:9000";

export const medusaClient = new Medusa({
  baseUrl,
  maxRetries: 3,
});

export { baseUrl as medusaBaseUrl };
