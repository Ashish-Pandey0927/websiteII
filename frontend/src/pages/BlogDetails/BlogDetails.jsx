import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './BlogDetails.css';
import Footer from '../../components/Footer';
// import blogData from '../../data/blogPosts.json';

// Import blog images
import Blog1 from '../../assets/Blog1.png';
import Blog2 from '../../assets/Blog2.png';
import Blog3 from '../../assets/Blog3.png';
import Blog4 from '../../assets/BlogPost4.png';
import Blog5 from '../../assets/blog5.png';
import Blog6 from '../../assets/blog6.png';

// Create an image map
const blogImages = {
  'Blog1.png': Blog1,
  'Blog2.png': Blog2,
  'Blog3.png': Blog3,
  'Blog4.png': Blog4,
  'Blog5.png': Blog5,
  'Blog6.png': Blog6
};

const BlogDetails = () => {
    const { id } = useParams();
    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);

    const blogdata = [
  {
    "title": "Unlock the Power of Cloud Services with EstonSoft",
    "image": "Blog1.png",
    "paragraph": "Looking to elevate your business with secure, scalable, and reliable cloud solution? \nEstonsoft has you covered!",
    "content": "In modern web development, UI components play a crucial role in building user-friendly and efficient interfaces. From buttons to modals, learn how to effectively use and customize UI components to elevate your website.\n\n**✅ Custom Cloud Solutions:** Tailored to your business needs, we help you achieve seamless integration and optimal performance.  \n**✅ Cloud Migration:** Transition smoothly to the cloud with zero downtime and expert support.  \n**✅ Scalable Infrastructure:** Grow your business effortlessly with our flexible, pay-as-you-go models.  \n**✅ Security First:** Protect your data with cutting-edge encryption, compliance, and robust security measures.  \n**✅ Managed Cloud Services:** Let our experts handle the heavy lifting so you can focus on innovation.  \n\nOur expertise spans across AWS, Azure, Google Cloud, and private cloud environments, ensuring the perfect fit for your goals. Whether it's application hosting, data storage, or disaster recovery, we have the tools and know-how to transform your operations.\n\n🌟 Join businesses that trust EstonSoft to lead their cloud journey. Let’s make your vision a reality!\n\n📞 Contact us today for a FREE consultation and discover how our cloud services can boost your business.  \n💻 Visit us at [www.estonsoft.com](http://www.estonsoft.com)  \n📧 Email: support@estonsoft.com\n\nThe future is in the cloud—partner with EstonSoft and soar to new heights! 🌐",
    "authorName": "Vijay",
    "authorImage": "example.png",
    "authorDesignation": "Graphic Designer",
    "tags": ["Tech"],
    "publishDate": "2025-01-12",
    "id": "684a7b3c30989323369f64a1"
  },
  {
    "title": "Elevate Your Software Quality with EstonSoft!",
    "image": "Blog2.png",
    "paragraph": "In today’s fast-paced digital landscape, businesses must adapt to thrive. Web app solutions are a game-changer, offering the tools needed to streamline operations, engage customers, and accelerate growth. Whether you’re a startup or an established enterprise, the right web app can transform your business.",
    "content": "**✅ Manual Testing:** Uncover every hidden bug with our meticulous manual testing approach.  \n**✅ Automation Testing:** Speed up your testing lifecycle with advanced automation frameworks.  \n**✅ Load & Performance Testing:** Ensure your application performs seamlessly under peak traffic.  \n**✅ Security Testing:** Safeguard your data and ensure compliance with industry standards.  \n\n**💡 Why Choose EstonSoft?**  \n- Certified testing professionals.  \n- Customized strategies tailored to your needs.  \n- Proven track record of driving results.  \n\n**🎯 Success Highlight:** Helped an e-commerce platform scale for flash sales, boosting traffic capacity 5x and increasing sales by 20%!  \n\nLet’s build software that your users will love and trust. 💼  \n\n📩 DM us today or visit [www.EstonSoft.com](http://www.EstonSoft.com) to learn more about how we can help your business succeed.",
    "authorName": "Vijay",
    "authorImage": "example.png",
    "authorDesignation": "Graphic Designer",
    "tags": ["Tech"],
    "publishDate": "2025-01-12",
    "id": "684a7c3492625ccd9dee6bc4"
  },
  {
    "title": "🔥 Unlocking Business Growth with Web App Solutions 🔥",
    "image": "Blog3.png",
    "paragraph": "In today’s fast-paced digital landscape, businesses must adapt to thrive. Web app solutions are a game-changer, offering the tools needed to streamline operations, engage customers, and accelerate growth. Whether you’re a startup or an established enterprise, the right web app can transform your business.",
    "content": "**🔎 Why Your Business Needs Web App Solutions**  \nAre you looking to:  \n✅ Expand your reach and connect with more customers?  \n✅ Automate processes to save time and reduce costs?  \n✅ Stay ahead of competitors with cutting-edge technology?\n\nIf so, web app solutions are the answer. Here’s why:  \n👉 **Cross-Platform Reach:** Web apps work seamlessly across devices, ensuring your customers can access your services anytime, anywhere.  \n👉 **Cost Efficiency:** Save on development and maintenance costs by choosing a single solution for all platforms.  \n👉 **Scalability:** Easily adapt as your business grows without significant additional investments.  \n👉 **Enhanced Customer Experience:** Deliver fast, responsive, and intuitive interfaces that keep customers coming back.\n\n**📊 Success Stories: How Businesses Transformed with Web Apps**  \n🔹 **E-commerce Expansion:** An online retailer doubled its sales by implementing a custom web app that improved user navigation and streamlined checkout.  \n🔹 **Improved Efficiency:** A logistics company reduced manual work by 40% with a web-based management system, leading to faster deliveries and happier clients.  \n🔹 **Stronger Engagement:** A fitness startup boosted customer retention by 30% with a Progressive Web App (PWA) offering personalized workout plans.\n\n**🔧 Key Features to Look For in a Web App Solution**  \nWhen selecting a web app solution, prioritize:  \n🌐 **User-Friendly Design:** Ensure it’s intuitive and visually appealing.  \n⚡ **Robust Security:** Protect user data with the latest encryption technologies.  \n📊 **Scalability:** Choose a solution that grows with your business.  \n🔗 **Integration Capabilities:** Ensure it connects seamlessly with your existing tools.\n\n**🏆 Why Partner with Us for Your Web App Needs?**  \nAt EstonSoft, we specialize in crafting tailor-made web app solutions designed to drive results. Here’s what sets us apart:  \n🔱 **Expert Team:** Our developers, designers, and strategists bring years of experience to every project.  \n🔱 **Cutting-Edge Technology:** We leverage the latest tools and frameworks to build scalable, high-performance apps.  \n🔱 **Customer-Centric Approach:** Your success is our priority. We collaborate closely with you to deliver solutions that meet your unique needs.  \n🔱 **Proven Results:** Our clients have seen measurable growth, from increased sales to improved operational efficiency.\n\n**📢 Contact us today for a free consultation and discover how we can help you achieve your goals. Let’s build the future of your business together!**",
    "authorName": "Vijay",
    "authorImage": "example.png",
    "authorDesignation": "Graphic Designer",
    "tags": ["Tech"],
    "publishDate": "2025-01-12",
    "id": "684a7cb430989323369f64a3"
  },
  {
    "title": "How to Deploy a React App to a Subdirectory (/admin) on Hostinger Shared Hosting",
    "image": "Blog4.png",
    "paragraph": "Deploying a React frontend as an admin dashboard under a subdirectory like /admin on Hostinger is a smart way to keep your main site and internal tools organized on a single domain. This setup is ideal if you're running a main site with something like Next.js or WordPress on your root domain, and want to host your React-based admin panel separately but under the same roof.\n\nIn this step-by-step guide, we’ll show you exactly how to deploy your React app to:\n\nhttps://yourdomain.com/admin\n\nusing Hostinger’s shared hosting.",
    "content": "Prerequisites\n\nMake sure you have the following ready:\n\nA Hostinger shared hosting plan\n\nA registered domain connected to Hostinger\n\nAccess to Hostinger’s hPanel\n\nA completed React project\n\nBasic knowledge of React Router (for SPA routing)\n\nStep 1: Set the Homepage and Build the App\n\nIn your React project’s package.json file, set the homepage field so React knows your app will live in a subdirectory:\n\n\"homepage\": \"https://yourdomain.com/admin\"\n\nThen build your app for production by running:\n\nnpm run build\n\nStep 2: Upload Files to Hostinger\n\nLog in to your Hostinger hPanel\nNavigate to Files > File Manager\nOpen the public_html directory\nCreate a new folder called admin\nUpload the contents of the build/ folder (not the folder itself) into public_html/admin/\n\nStep 3: Configure .htaccess for React Router\n\nIf your React app uses React Router for client-side routing, create a file named .htaccess and paste the necessary rewrite rules inside public_html/admin/\n\nTroubleshooting Tips\n\nClear cache, check folder paths, .htaccess, and make sure homepage is set.\n\nNo Node.js Needed\n\nReact builds are static, so Node.js isn't required.\n\nFinal Thoughts\n\nThis is a clean and effective way to organize multi-app frontends on a shared host.",
    "authorName": "Kanchana Pandagre ",
    "authorImage": "example.png",
    "authorDesignation": "Frontend Developer",
    "tags": ["Tech"],
    "publishDate": "2025-06-19",
    "id": "685419fb80ea7075d0bdd394"
  },
  {
    "title": "🚀 How to Deploy a Next.js Site to the Root Domain on Hostinger Shared Hosting",
    "image": "Blog5.png",
    "paragraph": "Deploying a Next.js website to shared hosting like Hostinger is easier than you might think—especially when you use Static HTML Exporting. This guide walks you through the full process of deploying your Next.js app to the root domain (e.g., https://yourdomain.com), bypassing the need for a Node.js server.",
    "content": "Steps include setting output: 'export' in next.config.js, running build/export, and uploading the out/ folder's contents to public_html. For SPA routing, you may add an .htaccess file to rewrite routes.\n\nBest suited for company sites, portfolios, blogs, and landing pages.",
        "authorName": "Kanchana Pandagre ",
    "authorImage": "example.png",
    "authorDesignation": "Frontend Developer",
    "tags": ["Tech"],
    "publishDate": "2025-06-19",
    "id": "68541f5880ea7075d0bdd395"
  },
  {
    "title": "🚀 Case Study: FastAPI Application Deployment on Ubuntu 24.04 VPS (Hostinger)",
    "image": "Blog6.png",
    "paragraph": "Deploying a FastAPI backend on a VPS offers complete control over performance, security, and scalability. In this case study, we walk through the complete process of deploying a FastAPI application on a Hostinger VPS running Ubuntu 24.04. We’ll cover system setup, MongoDB installation, application service management using systemd, and configuring a reverse proxy with NGINX.",
    "content": "Includes SSH setup, virtualenv creation, MongoDB 6.0 installation, Gunicorn service config, and NGINX reverse proxy setup.\n\nIdeal for developers looking to manage full-stack deployment with flexibility.",
        "authorName": "Kanchana Pandagre ",
    "authorImage": "example.png",
    "authorDesignation": "Frontend Developer",
    "tags": ["Tech"],
    "publishDate": "2025-06-19",
    "id": "68541f8b80ea7075d0bdd396"
  }
]


    useEffect(() => {
        // Using local JSON data instead of API
        const findBlog = () => {
            const foundBlog = blogdata.find(blog => blog.id === id);
            setBlog(foundBlog || null);
            setLoading(false);
        };

        findBlog();

        /* Commented out API integration for future reference
        const fetchBlog = async () => {
            try {
                const response = await fetch(`https://admin.estonsoft.com/blogs/${id}/`, {
                    headers: {
                        Accept: 'application/json',
                        Authorization:
                            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IndlYnNpdGVAZW1haWwuY29tIn0.0V7rd-KcWrX1_Ax1LetjLIXXXQ-ClNzN9Fgddzc9qGs',
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

        fetchBlog();
        */
    }, );

    if (loading) return <p className="text-center py-10">Loading...</p>;
    if (!blog) return <p className="text-center text-red-500 py-10">Blog not found.</p>;

    return (
        <>
          <div className="blog-details-container">
            <Link to="/blogs" className="back-to-blogs">← Back to Blogs</Link>

            <img
                src={blogImages[blog.image] || blog.image || 'https://via.placeholder.com/1200x600'}
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
