migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("l1x7yc2z7b9xwrr")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "fupuhvtt",
    "name": "latitude",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("l1x7yc2z7b9xwrr")

  // remove
  collection.schema.removeField("fupuhvtt")

  return dao.saveCollection(collection)
})
