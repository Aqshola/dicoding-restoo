import { deleteDB, openDB } from "idb";

const STORE_NAME = "restoo-store";
const OBJECT_STORE_NAME = "resto-fav";

let dbPromise = openDB(STORE_NAME, 1, {
  upgrade(database) {
    database.createObjectStore(OBJECT_STORE_NAME, { keyPath: "id" });
  },
});

const Database = {
  async getRestoo(id) {
    return (await dbPromise).get(OBJECT_STORE_NAME, id);
  },
  async getAllRestoo() {
    return (await dbPromise).getAll(OBJECT_STORE_NAME);
  },
  async addRestoo(resto) {
    return (await dbPromise).add(OBJECT_STORE_NAME, resto);
  },
  async deleteRestoo(id) {
    return (await dbPromise).delete(OBJECT_STORE_NAME, id);
  },
  deleteAllRestoo() {
    dbPromise = deleteDB(STORE_NAME);
  },
  openDB() {
    return dbPromise;
  },
};

export default Database;
