import type { Job } from "@/content/jobs/JobType";
import { getCollection } from "astro:content";

export async function GET() {
  const jobs = await getCollection("jobs");

  const formatted = jobs.map((job: any): Job[] => ({
    id: job.id,
    ...job.data,
  }));

  return new Response(JSON.stringify(formatted), {
    headers: {
      "Content-Type": "application/json",
    },
  });
}
