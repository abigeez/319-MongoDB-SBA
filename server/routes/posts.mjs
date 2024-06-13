
router.get("/latest", async (req,res) =>{
    let collection = await db.collection("posts");
    let results = await collection.aggregate([
        
    ])
    .limit(20)
    .toArray();
    res.send(results).status(200);
});