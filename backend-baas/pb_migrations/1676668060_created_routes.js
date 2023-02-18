migrate((db) => {
  const collection = new Collection({
    "id": "l1x7yc2z7b9xwrr",
    "created": "2023-02-17 21:07:40.809Z",
    "updated": "2023-02-17 21:07:40.809Z",
    "name": "routes",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "qi95vtdi",
        "name": "station",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("l1x7yc2z7b9xwrr");

  return dao.deleteCollection(collection);
})
