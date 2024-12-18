import express from "express";

console.log(process.env.STRING_CONEXAO)
const posts = [
    { id: 1, description: "Uma foto teste", imgUrl: "https://placecats.com/millie/300/150" },
    { id: 2, description: "Gato fazendo yoga", imgUrl: "https://placecats.com/millie/300/150" },
    { id: 3, description: "Gato fazendo panqueca", imgUrl: "https://placecats.com/millie/300/150"},
    { id: 4, description: "Gato lendo um livro", imgUrl: "https://placecats.com/millie/300/150" },
    { id: 5, description: "Gato tocando piano", imgUrl: "https://placecats.com/millie/300/150" }
];

const app = express()
app.listen(3000, () => {console.log("Servidor escutando...")})

app.get("/posts", (req, res) => {
    res.status(200).json(posts);
});

function searchPostByID(id) {
    return posts.findIndex((post) => {
        return post.id === Number(id)
    })
}

app.get("/posts/:id", (req, res) => {
    const index = searchPostByID(req.params.id)
    res.status(200).json(posts[index]);
});