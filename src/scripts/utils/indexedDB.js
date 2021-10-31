import { openDB } from 'idb'

const STORE_NAME = 'restoo-store'
const OBJECT_STORE_NAME = 'resto-fav'

const dbPromise = openDB(STORE_NAME, 1, {
  upgrade(database) {
    database.createObjectStore(OBJECT_STORE_NAME, { keyPath: 'id' })
  },
})

const Database = {
  async getAllRestoo() {
    return (await dbPromise).getAll(OBJECT_STORE_NAME)
  },
  async addRestoo(resto) {
    return (await dbPromise).add(OBJECT_STORE_NAME, resto)
  },
  async deleteRestoo(id) {
    return (await dbPromise).add(OBJECT_STORE_NAME, id)
  },
}

export default Database
