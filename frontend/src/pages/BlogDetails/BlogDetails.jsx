import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './BlogDetails.css';
import Footer from '../../components/Footer';


const BlogDetails = () => {
    const { id } = useParams();
    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const fetchBlog = async () => {
            try {
                setLoading(true);
                const response = await fetch(`http://localhost/estonsoft-api/new.php/blogs/${id}`, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfaWQiOiJhZTdhMzBlMzJjODMyOTQ4IiwiZW1haWwiOiJhZG1pbkBlc3RvbnNvZnQuY29tIiwiaWF0IjoxNzU2ODk3NzgyLCJleHAiOjE3NTc1MDI1ODJ9.tcO1pVIwwTx6C75ekyQx2DylH7VMOMpe6Tw3BV1lwLw',
                    },
                });

                if (!response.ok) throw new Error('Blog not found');
                const data = await response.json();
                setBlog(data);
            } catch (error) {
                console.error('Error fetching blog:', error);
                setBlog(null);
            } finally {
                setLoading(false);
            }
        };

        if (id) {
            fetchBlog();
        }
    }, [id]);

    if (loading) return <p className="text-center py-10">Loading...</p>;
    if (!blog) return <p className="text-center text-red-500 py-10">Blog not found.</p>;

    return (
        <>
          <div className="blog-details-container">
            <Link to="/blogs" className="back-to-blogs">← Back to Blogs</Link>

            <img
                src={blog.image || blog.image || 'https://via.placeholder.com/1200x600'}
                alt={blog.title}
                className="blog-details-image"
            />

            <h1 className="blog-details-title animate-slide-up">{blog.title}</h1>
            <p className="blog-details-paragraph animate-fade-in">{blog.paragraph}</p>

            <div
                className="blog-details-content animate-fade-in"
                dangerouslySetInnerHTML={{ __html: blog.content }}
            />

            <div className="blog-details-meta sticky-meta">
                Author: {blog.authorName}
            </div>
        </div>
            <Footer />
        </>

    );
};

export default BlogDetails;
