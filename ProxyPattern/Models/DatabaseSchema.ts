import DatabaseObj from './DatabaseObj';

interface DatabaseSchema  {
  createEntry(client: String, object: DatabaseObj)
  deleteEntry(client: String, id: String)
  getEntry(client: String, id: String)
}

export default DatabaseSchema;
