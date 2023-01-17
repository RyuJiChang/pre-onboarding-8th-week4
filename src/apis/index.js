import axios from "axios";

const getPage = async (page, limit) => {
  const { data } = await axios.get(
    `http://localhost:4000/comments?_page=${page}&_limit=${limit}&_order=desc&_sort=id`
  );
  return data;
};

export { getPage };
