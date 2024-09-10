import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ArticleItem from "./components/ArticleItem";
import image1 from "./assets/blog-image-1.jpg";

const articles = [
  {
    id: 1,
    title: "The Future of AI in Web Development",
    author: "Jane Doe",
    publishedDate: "2024-09-01",
    content: "An overview of how AI is transforming web development...",
    tags: ["AI", "Web Development", "Technology"],
  },
  {
    id: 2,
    title: "Mastering CSS Grid Layout",
    author: "John Smith",
    publishedDate: "2024-08-15",
    content:
      "A guide to understanding and using CSS Grid for responsive design...",
    tags: ["CSS", "Frontend", "Design"],
  },
  {
    id: 3,
    title: "Introduction to TypeScript for Beginners",
    author: "Alice Johnson",
    publishedDate: "2024-07-28",
    content: "Learn the basics of TypeScript and how it enhances JavaScript...",
    tags: ["TypeScript", "JavaScript", "Programming"],
  },
  {
    id: 4,
    title: "Building Scalable Apps with Node.js",
    author: "Michael Lee",
    publishedDate: "2024-06-30",
    content:
      "Explore techniques to build scalable applications using Node.js...",
    tags: ["Node.js", "Backend", "Scalability"],
  },
  {
    id: 5,
    title: "SEO Best Practices for 2024",
    author: "Emily Davis",
    publishedDate: "2024-08-05",
    content: "Improve your website's visibility with these SEO strategies...",
    tags: ["SEO", "Marketing", "Optimization"],
  },
];

function App() {
  return (
    <main>
      <Header />
      <ArticleItem
        title={articles[0].title}
        author={articles[0].author}
        content={articles[0].content}
        imgURL={image1}
        style={{color: 'red'}}
        />

      <ArticleItem
        author={articles[1].author}
        title={articles[1].title}
        content={articles[1].content}
        imgURL={image1}
        />

      <ArticleItem
        title={articles[2].title}
        content={articles[2].content}
        author={articles[2].author}
        imgURL={image1}
      />

      <Footer />
    </main>
  );
}

export default App;
