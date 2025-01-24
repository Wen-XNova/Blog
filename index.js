import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 4000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

let posts = [
    {
      id: 1,
      title: "Exploring the Dystopian Worlds of Cyberpunk",
      content: `Cyberpunk is a subgenre of science fiction that explores a future where advanced technology and cybernetics intersect with societal decay and dystopian environments. Often set in neon-lit megacities, cyberpunk narratives delve into themes of corporate control, artificial intelligence, and the blurring line between human and machine. 
        
        With its gritty, rebellious aesthetic, cyberpunk challenges our understanding of identity, freedom, and the impact of technology on society. From literature to films and video games, cyberpunk continues to captivate audiences with its dark, yet oddly prophetic vision of the future.`,
      author: "Jordan Rivera",
      date: "September 13, 2024 at 03:30 PM",
    },
    {
      id: 2,
      title: "The Curious Origins of Lorem Ipsum",
      content: `Lorem Ipsum is a placeholder text that has been widely used in the printing and typesetting industry for centuries. Derived from a scrambled section of Cicero's work, 'De Finibus Bonorum et Malorum,' written in 45 BC, this nonsensical text has become a standard in the design world for simulating content. 
      
      Despite its lack of meaning, Lorem Ipsum helps designers focus on layout and visual elements without the distraction of actual content. Over time, it has evolved into a universally recognized tool for creating prototypes, mockups, and templates, proving its enduring utility in the creative process.`,
      author: "Samuel Green",
      date: "August 12, 2023 at 11:20 AM",
    },
    {
      id: 3,
      title: "The Complex Relationship Between Gamora and Nebula",
      content:
       "Gamora and Nebula, the formidable daughters of Thanos, share a dynamic and intricate bond that has evolved throughout their journey in the Marvel Universe. Initially marked by rivalry and emotional scars, their relationship gradually transforms into one of mutual understanding and respect. Both characters grapple with their identities, seeking redemption and healing from the trauma inflicted by their father. Their contrasting personalities—Gamora’s calm, rational approach and Nebula’s fiery, impulsive nature—create an intriguing dynamic, offering a powerful exploration of sisterhood, personal growth, and the possibility of reconciliation.",
      author: "Mia Williams",
      date: "July 15, 2023 at 02:10 PM",
    },
  ];

  let lastId = 3;

//GET All posts
app.get("/posts", (req, res) => {
    res.json(posts);
  });

//GET a specific post by id. 
app.get("/posts/:id", (req, res) => {
    const postId = posts.find((p) => p.id === parseInt(req.params.id));
    if (!postId) return res.status(404).json({ message: "Post not found" });
    res.json(postId);
  });

//POST a new post
app.post("/posts", (req, res) => {
    const newId = lastId += 1;
    const post = {
      id: newId,
      title: req.body.title,
      image: req.body.image, 
      content: req.body.content,
      author: req.body.author,
      date: new Date().toLocaleString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric', 
        hour: '2-digit', 
        minute: '2-digit',
        hour12: true
      })
    };
    lastId = newId;
    posts.push(post);
    res.status(201).json(post);
  });

  //PATCH a post when you want to update one or more parameters. 
app.patch("/posts/:id", (req, res) => {
    const post = posts.find((p) => p.id === parseInt(req.params.id));
    if (!post) return res.status(404).json({ message: "Post not found" });
  
    if (req.body.title) post.title = req.body.title;
    if (req.body.content) post.content = req.body.content;
    if (req.body.author) post.author = req.body.author;
  
    res.json(post);
  });

//DELETE a specific post by providing the post id.
app.delete("/posts/:id", (req, res) => {
    const index = posts.findIndex((p) => p.id === parseInt(req.params.id));
    if (index === -1) return res.status(404).json({ message: "Post not found" });
  
    posts.splice(index, 1);
    res.json({ message: "Post deleted" });
  });
  
  app.listen(port, () => {
    console.log(`API is running at http://localhost:${port}`);
  });

