import './App.css';
import BlogData from "./BlogData";
import BlogList from './BlogList';
import Header from "./Header"
import Footer from "./Footer"

function App() {
  const blogPost = BlogData.map(blog => <BlogList key={blog.id} title={blog.title} subTitle={blog.subTitle} author={blog.author} date={blog.date} />)
  return (
    <div className="App">
      <Header />
      {blogPost}
      <button className = "button"><b>OLDER POSTS</b></button>
      <Footer />
    </div>
  );
}

export default App;
