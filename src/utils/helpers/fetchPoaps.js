import { BACKEND_URL } from '../constants'

const fetchPoapsHelper = async (params={}) => {

  const { keyword, page} = params


  console.log(params)

  let url = `${BACKEND_URL}poaps/`

  if (page && !keyword) {
    url = `${url}?page=${page}`
  }

  if (!page && keyword) {
    url = `${url}?search=${keyword}`
  }

  if (page && keyword) {
    url = `${url}?search=${keyword}&page=${page}`
  }


  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
  const data = await response.json()

  return data
}


const fetchPoaps = (args) => {
  const {keyword, page, dispatch, action} = args
  fetchPoapsHelper({ keyword, page }).then(async (result) => {
    dispatch(
      action({
        data: result?.results,
        page: page ? page : 0,
        next: result.next ? true : false,
        prev: result.previous ? true : false,
        total: result.count,
        keyword: keyword ? keyword : null,
      })
    );
  });
};

export default fetchPoaps