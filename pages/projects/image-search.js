import { createApi } from "unsplash-js";
import styles from "../../styles/image-search.module.scss";

const unsplash = createApi({
  accessKey: process.env.NEXT_PUBLIC_API_KEY,
});
//
export default function ImageSearch() {
  unsplash.photos.get({ photoId: "N0e6W2WDa5U" }).then((result) => {
    if (result.errors) {
      // handle error here
      console.log("error occurred: ", result.errors[0]);
    } else {
      // handle success here
      const photo = result.response;
      console.log(photo);
    }
  });
  return (
    <div>
      <h1>Image Search</h1>
    </div>
  );
}
