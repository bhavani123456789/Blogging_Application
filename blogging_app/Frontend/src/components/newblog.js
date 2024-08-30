import React from 'react';

function NewBlog() {
  return (
    <div className="container"> 
      <h1 style={{ textAlign: 'center',paddingTop:40 }}>Write a New Post</h1> 
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}> 
        <form action="#" method="post">
          <label htmlFor="title">Title:</label><br />
          <input type="text" id="title" name="title" placeholder="Enter your post title" /><br />
          <label htmlFor="content">Content:</label><br />
          <textarea id="content" name="content" rows="10" placeholder="Write your post content here"></textarea><br />
          <label htmlFor="image">Image (optional):</label><br />
          <input type="file" id="image" name="image" accept="image/*" /><br />
          <label htmlFor="category">Category:</label><br />
          <select id="category" name="category">
            <option value="">Select a Category</option>
            <option value="news">News</option>
            <option value="tutorials">Tutorials</option>
            <option value="entertainment">Entertainment</option>
          </select><br />
          <label htmlFor="tags">Tags (separate with commas):</label><br />
          <input type="text" id="tags" name="tags" placeholder="e.g., technology, coding" /><br />
          <button type="submit">Post</button>
        </form>
      </div>
    </div>
  );
}

export default NewBlog;
