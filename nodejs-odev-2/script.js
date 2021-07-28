let posts = [
    {heading: "Başlık 1",
    content: "İçerik: Lorem ipsum dolor sit amet consectetur adipiscing elit. Integer hendrerit risus lorem ut suscipit lacus semper in."},

    {heading: "Başlık 2",
    content: "İçerik: Lorem ipsum dolor sit amet consectetur adipiscing elit. Integer hendrerit risus lorem ut suscipit lacus semper in."}
]
let row = "=".repeat(80);

function list() {
    for (let i = 0; i<posts.length; i++){
        console.log(row + "\n" + posts[i].heading);
        console.log(row + "\n" + posts[i].content + "\n");
    }
}

function add(head, cont, callback) {
    posts.push(
        {
            heading : head,
            content : cont
        })
        callback();
}

list();
add("Başlık 3",
    "İçerik: Lorem ipsum dolor sit amet consectetur adipiscing elit. Integer hendrerit risus lorem ut suscipit lacus semper in.",
    list);