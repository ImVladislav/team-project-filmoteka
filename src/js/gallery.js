import { ServerApi } from "./serverApi";
import { murkupGalleryOnPageLoading } from "../utilities.js/murkupGalleryOnPageLoading";

const serverApi = new ServerApi;
async function murkupGallery(params) {
    const movies = await serverApi.getMovie();

    murkupGalleryOnPageLoading(movies.results);
    console.log(movies.results);
}

murkupGallery();

