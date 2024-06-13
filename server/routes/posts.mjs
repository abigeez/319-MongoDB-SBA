
router.get("/latest", async (req,res) =>{
    let collection = await db.collection("posts");
    let results = await collection.aggregate([
        {"$project": {"author":1, "title":1, "tags":1, "date":1}},
    {"$sort": {"date: -1"}},
    ])
    .limit(20)
    .toArray();
    res.send(results).status(200);
});