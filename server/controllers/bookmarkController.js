const Bookmark = require('../models/Bookmark');

exports.getAllBookmarks = async (req, res) => {
  try {
    const bookmarks = await Bookmark.find();
    res.json(bookmarks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createBookmark = async (req, res) => {
  const bookmark = new Bookmark({
    title: req.body.title,
    url: req.body.url,
    category: req.body.category
  });

  try {
    const newBookmark = await bookmark.save();
    res.status(201).json(newBookmark);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.updateBookmark = async (req, res) => {
  try {
    const updatedBookmark = await Bookmark.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    res.json(updatedBookmark);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteBookmark = async (req, res) => {
  try {
    await Bookmark.findByIdAndDelete(req.params.id);
    res.json({ message: 'Bookmark deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};