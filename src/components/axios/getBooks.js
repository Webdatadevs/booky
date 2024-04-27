import axios from "axios";
import { getBooksData, isLoadingBooks } from "../slice/booksSlice";

// https://datab-3.onrender.com/products
async function getBooks(dispatch) {
    dispatch(isLoadingBooks());
    await axios
        .get("https://datab-3.onrender.com/products")
        .then((data) => {
            console.log(data);
            dispatch(getBooksData(data.data));
        })
        .catch((err) => {
            console.log(err);
        });
}
export default getBooks;
