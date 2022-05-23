import { BACKEND_URL } from './constants'

const fetchPoap = async () => {
    
    const response = await fetch(BACKEND_URL,  {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
    const data = await response.json()

    return data
}