migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("l1x7yc2z7b9xwrr")

  // remove
  collection.schema.removeField("89qosnqw")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "kjxxaopo",
    "name": "hour",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
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

  // remove
  collection.schema.removeField("kjxxaopo")

  return dao.saveCollection(collection)
})
