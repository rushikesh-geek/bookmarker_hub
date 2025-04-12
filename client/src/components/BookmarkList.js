import React, { useState, useEffect } from 'react';
import { getBookmarks, deleteBookmark } from '../services/api';
import { ClipLoader } from 'react-spinners';
import { FaExternalLinkAlt, FaCopy, FaTrash, FaSearch } from 'react-icons/fa';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';

const BookmarkList = () => {
  const [bookmarks, setBookmarks] = useState([]);
  const [filter, setFilter] = useState('All');
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchBookmarks();
  }, []);

  const fetchBookmarks = async () => {
    setLoading(true);
    try {
      const response = await getBookmarks();
      setBookmarks(response.data);
    } catch (error) {
      console.error('Error fetching bookmarks:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteBookmark = async (id) => {
    try {
      await deleteBookmark(id);
      fetchBookmarks();
    } catch (error) {
      console.error('Error deleting bookmark:', error);
    }
  };

  const filteredBookmarks = filter === 'All' 
    ? bookmarks 
    : bookmarks.filter(b => b.category === filter);

  const searchedBookmarks = filteredBookmarks.filter(bookmark => 
    bookmark.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    bookmark.url.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const NoBookmarksMessage = () => (
    <div className="empty-state">
      <img src="/images/empty-state.svg" alt="No bookmarks" />
      <h3>No bookmarks found</h3>
      <p>Start organizing your bookmarks today!</p>
    </div>
  );

  if (loading) {
    return <div className="loader"><ClipLoader color="#4A90E2" size={50} /></div>;
  }

  return (
    <div className="bookmark-container">
      <div className="search-bar">
        <FaSearch className="search-icon" />
        <input
          type="text"
          placeholder="Search bookmarks..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="filter">
        <button className={filter === 'All' ? 'active' : ''} onClick={() => setFilter('All')}>All</button>
        <button className={filter === 'Work' ? 'active' : ''} onClick={() => setFilter('Work')}>Work</button>
        <button className={filter === 'Study' ? 'active' : ''} onClick={() => setFilter('Study')}>Study</button>
        <button className={filter === 'Entertainment' ? 'active' : ''} onClick={() => setFilter('Entertainment')}>Entertainment</button>
      </div>

      <div className="bookmark-list">
        {searchedBookmarks.length === 0 ? (
          <NoBookmarksMessage />
        ) : (
          searchedBookmarks.map(bookmark => (
            <div key={bookmark._id} className="bookmark-item">
              <div className="bookmark-content">
                <img 
                  src={`https://www.google.com/s2/favicons?domain=${bookmark.url}`}
                  alt=""
                  className="favicon"
                />
                <h3>{bookmark.title}</h3>
                <p className="url">{bookmark.url}</p>
                <div 
                  className="category-tag"
                  onClick={() => setFilter(bookmark.category)}
                >
                  {bookmark.category}
                </div>
              </div>
              <div className="bookmark-actions">
                <button 
                  className="action-btn visit"
                  data-tooltip-content="Visit website"
                  onClick={() => window.open(bookmark.url, '_blank')}
                >
                  <FaExternalLinkAlt />
                  <Tooltip anchorSelect=".action-btn.visit" place="top" />
                </button>
                <button 
                  className="action-btn copy"
                  data-tooltip-content="Copy URL"
                  onClick={() => {
                    navigator.clipboard.writeText(bookmark.url);
                    toast.success('URL copied!');
                  }}
                >
                  <FaCopy />
                  <Tooltip anchorSelect=".action-btn.copy" place="top" />
                </button>
                <button 
                  className="action-btn delete"
                  data-tooltip-content="Delete bookmark"
                  onClick={() => handleDeleteBookmark(bookmark._id)}
                >
                  <FaTrash />
                  <Tooltip anchorSelect=".action-btn.delete" place="top" />
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default BookmarkList;