// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { createApi } from "unsplash-js";

export default function handler(req, res) {
  const { searchTerm } = req.query;
  const unsplash = createApi({
    accessKey: process.env.API_KEY,
  });

  unsplash.search
    .getPhotos({
      query: searchTerm,
      page: 1,
      perPage: 12,
      orderBy: "relevant",
    })
    .then((results) => {
      if (results.errors) {
        console.error("error occurred: ", results.errors[0]);
        res.status(500).json({ message: "search failed" });
      } else {
        res.status(200).json(results.response);
      }
    });
}
