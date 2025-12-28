import { serve } from "inngest/next";

import { inngest } from "@/lib/inngest/client";
import { generateIndustryInsights } from "@/lib/inngest/function";

// Configure this API route for server-side execution
export const runtime = 'nodejs';

export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [generateIndustryInsights],
});
