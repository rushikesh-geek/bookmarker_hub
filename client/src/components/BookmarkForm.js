import React, { useState } from 'react';
import { createBookmark } from '../services/api';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BookmarkForm = ({ onBookmarkAdded }) => {
  const [bookmark, setBookmark] = useState({ title: '', url: '', category: 'Work' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Submitting bookmark:', bookmark);
    try {
      const response = await createBookmark(bookmark);
      console.log('Bookmark added successfully:', response.data);
      onBookmarkAdded();
      setBookmark({ title: '', url: '', category: 'Work' });
      toast.success('Bookmark added successfully!');
    } catch (error) {
      console.error('Error adding bookmark:', error.response ? error.response.data : error.message);
      toast.error('Failed to add bookmark: ' + (error.response ? error.response.data.message : error.message));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bookmark-form">
      <input
        type="text"
        placeholder="Title"
        value={bookmark.title}
        onChange={(e) => setBookmark({ ...bookmark, title: e.target.value })}
        required
      />
      <input
        type="url"
        placeholder="URL"
        value={bookmark.url}
        onChange={(e) => setBookmark({ ...bookmark, url: e.target.value })}
        required
      />
      <select
        value={bookmark.category}
        onChange={(e) => setBookmark({ ...bookmark, category: e.target.value })}
      >
        <option value="Work">Work</option>
        <option value="Study">Study</option>
        <option value="Entertainment">Entertainment</option>
      </select>
      <button type="submit">Add Bookmark</button>
    </form>
  );
};

export default BookmarkForm;