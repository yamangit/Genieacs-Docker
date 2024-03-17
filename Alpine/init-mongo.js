// init-mongo.js

db = db.getSiblingDB("genieacs");

db.createUser({
  user: "admin",
  pwd: "admin",
  roles: [
    { role: "readWrite", db: "genieacs" },
    { role: "userAdmin", db: "genieacs" },
    { role: "dbAdmin", db: "genieacs" },
  ],
});
