import React from 'react';
import BookmarkForm from '../components/BookmarkForm';
import BookmarkList from '../components/BookmarkList';
import Navbar from '../components/Navbar';

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <h1>Bookmarker Hub</h1>
      <BookmarkForm onBookmarkAdded={() => window.location.reload()} />
      <BookmarkList />
    </div>
  );
};

export default Home;