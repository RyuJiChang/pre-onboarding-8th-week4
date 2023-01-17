import axios from "axios";

const getPage = (page, limit) => {
  axios
    .get(
      `http://localhost:4000/comments?_page=${1}&_limit=${4}&_order=desc&_sort=id`
    )
    .then((response) => {
      console.log(response.data);
    });
};

export { getPage };
