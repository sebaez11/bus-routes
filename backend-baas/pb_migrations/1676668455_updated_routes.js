migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("l1x7yc2z7b9xwrr")

  collection.listRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("l1x7yc2z7b9xwrr")

  collection.listRule = null

  return dao.saveCollection(collection)
})
