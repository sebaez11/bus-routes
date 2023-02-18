migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("l1x7yc2z7b9xwrr")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "4vjqxwgw",
    "name": "longitude",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "50ivjqri",
    "name": "namebus",
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

  // remove
  collection.schema.removeField("4vjqxwgw")

  // remove
  collection.schema.removeField("50ivjqri")

  return dao.saveCollection(collection)
})
