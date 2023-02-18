migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("l1x7yc2z7b9xwrr")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "89qosnqw",
    "name": "hour",
    "type": "date",
    "required": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("l1x7yc2z7b9xwrr")

  // remove
  collection.schema.removeField("89qosnqw")

  return dao.saveCollection(collection)
})
