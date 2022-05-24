import { BACKEND_URL } from '../constants'

const fetchPoaps = async (params={}) => {

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

export default fetchPoaps