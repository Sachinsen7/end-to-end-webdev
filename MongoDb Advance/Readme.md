# MongoDB Aggregation Pipeline

This document contains practice questions and their solutions using MongoDB Aggregation Framework.
Each solution is provided in **JSON** format and **JavaScript (Mongo Shell)** format.

---

## Question 1: How many users are active?

### Pipeline (JSON)

```json
[{ "$match": { "isActive": true } }, { "$count": "activeUsers" }]
```

### Pipeline (JS)

```js
db.users.aggregate([{ $match: { isActive: true } }, { $count: "activeUsers" }]);
```

---

## Question 2: What is the average age of all students?

### Pipeline (JSON)

```json
[{ "$group": { "_id": null, "averageAge": { "$avg": "$age" } } }]
```

### Pipeline (JS)

```js
db.users.aggregate([{ $group: { _id: null, averageAge: { $avg: "$age" } } }]);
```

---

## Question 3: List the top 5 most common favorite fruits among users.

### Pipeline (JSON)

```json
[
  { "$group": { "_id": "$favoriteFruit", "count": { "$sum": 1 } } },
  { "$sort": { "count": -1 } },
  { "$limit": 5 }
]
```

### Pipeline (JS)

```js
db.users.aggregate([
  { $group: { _id: "$favoriteFruit", count: { $sum: 1 } } },
  { $sort: { count: -1 } },
  { $limit: 5 },
]);
```

---

## Question 4: Find the numbers of males and females.

### Pipeline (JSON)

```json
[{ "$group": { "_id": "$gender", "count": { "$sum": 1 } } }]
```

### Pipeline (JS)

```js
db.users.aggregate([{ $group: { _id: "$gender", count: { $sum: 1 } } }]);
```

---

## Question 5: Which country has the highest number of registered users?

### Pipeline (JSON)

```json
[
  { "$group": { "_id": "$company.location.country", "count": { "$sum": 1 } } },
  { "$sort": { "count": -1 } },
  { "$limit": 1 }
]
```

### Pipeline (JS)

```js
db.users.aggregate([
  { $group: { _id: "$company.location.country", count: { $sum: 1 } } },
  { $sort: { count: -1 } },
  { $limit: 1 },
]);
```

---

## Question 6: List all unique eye colors present in the collection.

### Pipeline (JSON)

```json
[{ "$group": { "_id": "$eyeColor" } }]
```

### Pipeline (JS)

```js
db.users.aggregate([{ $group: { _id: "$eyeColor" } }]);
```

---

## Question 7: What is the average number of tags per user?

### Pipeline (JSON)

```json
[
  { "$project": { "tagCount": { "$size": "$tags" } } },
  { "$group": { "_id": null, "averageTags": { "$avg": "$tagCount" } } }
]
```

### Pipeline (JS)

```js
db.users.aggregate([
  { $project: { tagCount: { $size: "$tags" } } },
  { $group: { _id: null, averageTags: { $avg: "$tagCount" } } },
]);
```

---

## Question 8: How many users have _enim_ as one of their tags?

### Pipeline (JSON)

```json
[{ "$match": { "tags": "enim" } }, { "$count": "usersWithEnim" }]
```

### Pipeline (JS)

```js
db.users.aggregate([{ $match: { tags: "enim" } }, { $count: "usersWithEnim" }]);
```

---

## Question 9: What are the names and ages of users who are inactive and have _velit_ as a tag?

### Pipeline (JSON)

```json
[
  { "$match": { "isActive": false, "tags": "velit" } },
  { "$project": { "name": 1, "age": 1, "_id": 0 } }
]
```

### Pipeline (JS)

```js
db.users.aggregate([
  { $match: { isActive: false, tags: "velit" } },
  { $project: { name: 1, age: 1, _id: 0 } },
]);
```

---

## Question 10: How many users have a phone number starting with `+1 (940)`?

### Pipeline (JSON)

```json
[
  { "$match": { "phone": { "$regex": "^\\+1 \\(940\\)" } } },
  { "$count": "usersWithPhone" }
]
```

### Pipeline (JS)

```js
db.users.aggregate([
  { $match: { phone: { $regex: /^\+1 \(940\)/ } } },
  { $count: "usersWithPhone" },
]);
```

---

## Question 11: Who has registered most recently?

### Pipeline (JSON)

```json
[{ "$sort": { "registered": -1 } }, { "$limit": 1 }]
```

### Pipeline (JS)

```js
db.users.aggregate([{ $sort: { registered: -1 } }, { $limit: 1 }]);
```

---

## Question 12: Categorize users by their favorite fruit.

### Pipeline (JSON)

```json
[{ "$group": { "_id": "$favoriteFruit", "users": { "$push": "$name" } } }]
```

### Pipeline (JS)

```js
db.users.aggregate([
  { $group: { _id: "$favoriteFruit", users: { $push: "$name" } } },
]);
```

---

## Question 13: How many users have `ad` as the second tag?

### Pipeline (JSON)

```json
[{ "$match": { "tags.1": "ad" } }, { "$count": "usersWithSecondTagAd" }]
```

### Pipeline (JS)

```js
db.users.aggregate([
  { $match: { "tags.1": "ad" } },
  { $count: "usersWithSecondTagAd" },
]);
```

---

## Question 14: Find users who have both `enim` and `id` as their tags.

### Pipeline (JSON)

```json
[{ "$match": { "tags": { "$all": ["enim", "id"] } } }]
```

### Pipeline (JS)

```js
db.users.aggregate([{ $match: { tags: { $all: ["enim", "id"] } } }]);
```

---

## Question 15: List all companies located in the USA with their corresponding user count.

### Pipeline (JSON)

```json
[
  { "$match": { "company.location.country": "USA" } },
  { "$group": { "_id": "$company.title", "userCount": { "$sum": 1 } } }
]
```

### Pipeline (JS)

```js
db.users.aggregate([
  { $match: { "company.location.country": "USA" } },
  { $group: { _id: "$company.title", userCount: { $sum: 1 } } },
]);
```

---

## Question 16: Using `$lookup` operator (Join collections)

Example: Join `users` with `orders` collection.

### Pipeline (JSON)

```json
[
  {
    "$lookup": {
      "from": "orders",
      "localField": "_id",
      "foreignField": "userId",
      "as": "userOrders"
    }
  }
]
```

### Pipeline (JS)

```js
db.users.aggregate([
  {
    $lookup: {
      from: "orders",
      localField: "_id",
      foreignField: "userId",
      as: "userOrders",
    },
  },
]);
```

---
