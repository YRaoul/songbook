const path = "/songs/:name"
const method = "get"

async function data (req, res) {
    const {db} = res.locals

    const songs = await db("songs")
    .whereRaw("text LIKE ?", ["%" + req.params.name + "%"])

    return songs
}

export default {
    method,
    path,
    data
}