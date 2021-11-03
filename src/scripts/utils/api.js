import fetcher from './fetcher'
import Database from './indexedDB'

export const getAllResto = async () => {
  const data = await fetcher(`https://restaurant-api.dicoding.dev/list`)
  return data
}

export const getDetailResto = async (id) => {
  const data = await fetcher(`https://restaurant-api.dicoding.dev/detail/${id}`)
  return data
}

export const getFavoriteResto = async () => {
  const data = await Database.getAllRestoo()
  return data
}

export const getPicture = (pictureId) =>
  `https://restaurant-api.dicoding.dev/images/medium/${pictureId}`
