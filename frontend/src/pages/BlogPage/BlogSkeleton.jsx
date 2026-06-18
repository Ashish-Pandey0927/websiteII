import React from 'react';
import './BlogSkeleton.css';

const BlogSkeleton = () => {
  return (
    <section className="blog-skeleton-section">
      <div className="blog-skeleton-container">
        
        {/* Featured Blog Skeleton */}
        <div className="skeleton-latest-section">
          <div className="skeleton-latest-header">
            <div className="skeleton-subtitle-bar skeleton-shimmer"></div>
            <div className="skeleton-title-bar skeleton-shimmer"></div>
          </div>

          <div className="skeleton-featured-layout">
            {/* Left Image Placeholder */}
            <div className="skeleton-featured-image skeleton-shimmer"></div>
            
            {/* Right Content Placeholder */}
            <div className="skeleton-featured-content">
              <div className="skeleton-meta-row">
                <div className="skeleton-meta-item skeleton-shimmer"></div>
                <span className="skeleton-meta-divider"></span>
                <div className="skeleton-meta-item skeleton-shimmer"></div>
              </div>
              
              <div className="skeleton-featured-title skeleton-shimmer"></div>
              <div className="skeleton-featured-title short skeleton-shimmer"></div>
              
              <div className="skeleton-description-block">
                <div className="skeleton-desc-line skeleton-shimmer"></div>
                <div className="skeleton-desc-line skeleton-shimmer"></div>
                <div className="skeleton-desc-line skeleton-shimmer"></div>
                <div className="skeleton-desc-line last skeleton-shimmer"></div>
              </div>
              
              <div className="skeleton-featured-footer">
                <div className="skeleton-author">
                  <div className="skeleton-avatar skeleton-shimmer"></div>
                  <div className="skeleton-author-text">
                    <div className="skeleton-author-name skeleton-shimmer"></div>
                    <div className="skeleton-author-role skeleton-shimmer"></div>
                  </div>
                </div>
                <div className="skeleton-button-circle skeleton-shimmer"></div>
              </div>
            </div>
          </div>
        </div>

        {/* More Blogs Grid Skeleton */}
        <div className="skeleton-grid-section">
          <div className="skeleton-grid-header">
            <div className="skeleton-grid-subtitle skeleton-shimmer"></div>
            <div className="skeleton-grid-title skeleton-shimmer"></div>
            <div className="skeleton-grid-subtext skeleton-shimmer"></div>
          </div>

          <div className="skeleton-cards-grid">
            {[1, 2, 3].map((item) => (
              <div key={item} className="skeleton-blog-card">
                <div className="skeleton-card-image skeleton-shimmer"></div>
                
                <div className="skeleton-card-content">
                  <div className="skeleton-meta-row">
                    <div className="skeleton-meta-item skeleton-shimmer"></div>
                    <span className="skeleton-meta-divider"></span>
                    <div className="skeleton-meta-item skeleton-shimmer"></div>
                  </div>
                  
                  <div className="skeleton-card-title-line skeleton-shimmer"></div>
                  <div className="skeleton-card-title-line short skeleton-shimmer"></div>
                  
                  <div className="skeleton-description-block">
                    <div className="skeleton-desc-line skeleton-shimmer"></div>
                    <div className="skeleton-desc-line skeleton-shimmer"></div>
                    <div className="skeleton-desc-line short skeleton-shimmer"></div>
                  </div>

                  <div className="skeleton-card-footer">
                    <div className="skeleton-author">
                      <div className="skeleton-avatar-small skeleton-shimmer"></div>
                      <div className="skeleton-author-small skeleton-shimmer"></div>
                    </div>
                    <div className="skeleton-button-link skeleton-shimmer"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default BlogSkeleton;
