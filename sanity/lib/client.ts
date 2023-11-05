import { createClient } from "next-sanity";
import { revalidateSecret } from "@/sanity/lib/api";
import { apiVersion, dataset, projectId } from "../env";

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn: revalidateSecret ? false : true,
  perspective: "published",
});
