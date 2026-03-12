# CRUD React Application

A simple and efficient **CRUD** (Create, Read, Update, Delete) application built with **React** and **Vite**. This project demonstrates how to manage data with a clean UI, real-time updates, and seamless API integration.

## Features

✨ **Create** - Add new posts using the form  
📖 **Read** - Display all posts fetched from API  
✏️ **Update** - Edit existing posts with auto-populated form  
🗑️ **Delete** - Remove posts with a single click  
🔄 **Real-time Updates** - UI updates instantly after operations  
🎨 **Responsive UI** - Beautiful Tailwind CSS styling  
⚡ **Fast & Efficient** - Built with Vite for optimal performance  

## Tech Stack

- **React** - UI library for building components
- **Vite** - Lightning-fast build tool
- **Axios** - HTTP client for API requests
- **Tailwind CSS** - Utility-first CSS framework
- **JSONPlaceholder** - Free fake REST API for testing

## Project Structure

```
Curd/
├── src/
│   ├── components/
│   │   ├── Form.jsx          # Form for add/edit posts
│   │   ├── GetPost.jsx       # Main component displaying posts
│   │   └── Delete.jsx        # (Optional) Delete confirmation
│   ├── API/
│   │   └── GetApi.jsx        # Axios API configuration & functions
│   ├── App.jsx               # Main App component
│   ├── main.jsx              # Entry point
│   ├── App.css               # Styles
│   └── index.css             # Global styles
├── public/                   # Static assets
├── index.html                # HTML template
├── package.json              # Dependencies & scripts
├── vite.config.js            # Vite configuration
└── README.md                 # This file
```

## Getting Started

### Prerequisites

- **Node.js** (v14 or higher)
- **npm** or **yarn** package manager

### Installation

1. **Clone or navigate to the project:**
```bash
cd Curd
```

2. **Install dependencies:**
```bash
npm install
```

3. **Start the development server:**
```bash
npm run dev
```

4. **Open in browser:**
```
http://localhost:5173
```

## Usage

### Adding a Post

1. Fill in the **Title** and **Body** fields in the form
2. Click **Submit**
3. A new card appears instantly in the posts list with a unique ID

### Editing a Post

1. Click the **Edit** button on any post card
2. Form auto-populates with post data
3. Button changes to **Update**
4. Modify the fields
5. Click **Update** to save changes
6. Form clears and returns to "Submit" mode

### Deleting a Post

1. Click the **Delete** button on any post card
2. Post is removed instantly from the list

## API Endpoints

The app uses **JSONPlaceholder** API (free fake REST API):

| Method | Endpoint | Function |
|--------|----------|----------|
| GET | `/posts` | Fetch all posts |
| POST | `/posts` | Create new post |
| PUT | `/posts/:id` | Update post |
| DELETE | `/posts/:id` | Delete post |

**Note:** JSONPlaceholder responses don't persist on the server, so deletes and updates are simulated locally in the UI.

## Component Details

### Form.jsx

- Handles both **add** and **edit** modes
- Auto-fills when editing a post
- Form validation (checks for empty fields)
- Shows "Submitting..." when loading
- Clear button when in edit mode
- Displays success alerts

### GetPost.jsx

- Fetches posts on component mount
- Displays posts in a responsive grid
- Shows post ID, title, and body
- Edit button triggers form population
- Delete button removes posts
- Shows post count
- Empty state message when no posts exist

### GetApi.jsx

- Axios instance configuration
- `getData()` - Fetch all posts
- `PostData(item)` - Create new post
- `EditPost(id, post)` - Update post
- `deletePost(id)` - Delete post

## Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

## Styling

The project uses **Tailwind CSS** for styling. Key classes used:

- `grid` - Responsive grid layout for posts
- `bg-white` - Card background
- `shadow-lg` - Card elevation
- `hover:` - Hover effects
- `active:scale-95` - Button click animation
- `disabled:` - Disabled state styling

## Features Explained

### Sequential IDs for New Posts

- API posts use IDs 1-100
- New posts automatically get IDs 101, 102, etc.
- Prevents duplicate key errors in React

### Loading States

- Disables form inputs while submitting
- Button shows "Processing..." during requests
- Prevents double submissions

### Real-time UI Updates

- No page refresh needed
- Instant visual feedback
- Posts update immediately in the grid

## Troubleshooting

### Posts not loading?

- Check browser console for errors
- Ensure internet connection (API calls need network)
- Verify JSONPlaceholder API is accessible

### Edit form not populating?

- Make sure `Updatepost` state is being passed correctly
- Check browser console for errors

### Duplicate ID error?

- Fixed! New posts use sequential IDs

## Future Enhancements

🎯 Possible improvements:
- Add search/filter functionality
- Add sorting by date/title
- Add pagination
- Add user authentication
- Add categories/tags
- Add comments on posts
- Add image uploads
- Save data to local database

## License

Free to use and modify for learning purposes.

## Author

- Farheen Laraib
- Created with ❤️ for learning React CRUD operations

---

**Happy Coding!** 🚀
