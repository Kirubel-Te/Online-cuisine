# Food Recipe Explorer

**Find a recipe for almost any food in the world.**

This is a React + Vite application that lets users explore recipes by category, country, keyword search, and detailed recipe pages. Users can also manage a list of favourite recipes.

**Live Demo:** [`online-cuisine.vercel.app`](https://online-cuisine.vercel.app)

## Features

- **Browse by category**: View recipes grouped by meal categories (e.g., Beef, Dessert, Vegetarian).
- **Browse by country/area**: Explore recipes by cuisine from different countries.
- **Recipe search**: Search for meals by name using a search bar.
- **Recipe detail view**: See full recipe details, including image, instructions, and other metadata.
- **Favourites**: Add/remove recipes from a favourites list (managed via React context).
- **Responsive UI**: Tailwind CSS-based layout that works on desktop and mobile.

## Tech Stack

- **Frontend**: React (via Vite)
- **Routing**: `react-router` / `react-router-dom`
- **HTTP Client**: `axios`
- **Styling**: Tailwind CSS + custom styles in `src/index.css`
- **Icons**: `lucide-react`, `react-icons`
- **State Management**: React Context for favourites (`FavouritesContext`)

## Project Structure

- **`src/main.jsx`**: Application entry point, sets up React and routing.
- **`src/App.jsx`**: Top-level app component and route configuration.
- **`src/Layout/RootLayout.jsx`**: Shared layout (navigation, footer, etc.).
- **`src/components/`**:
  - `NavBar.jsx`, `Footer.jsx`: Reusable layout components.
  - `RecipeCard.jsx`, `CategCard.jsx`, `DescCard.jsx`: UI components for displaying recipes and categories.
- **`src/contexts/FavouritesContext.jsx`**: Manages favourite recipes across the app.
- **`src/pages/`**:
  - `Home.jsx`: Landing page with featured content.
  - `Categories.jsx` / `CategoryDetail.jsx`: Browse and drill down into meal categories.
  - `CountryDetail.jsx`: Browse recipes by area/country.
  - `RecipeDetail.jsx`: Detailed view of a single recipe.
  - `SearchResults.jsx`: Shows search results.
  - `Favourite.jsx`: Lists all favourited recipes.
  - `NotFound.jsx`: 404 page for unknown routes.

## Getting Started

### Prerequisites

- **Node.js** (LTS recommended)
- **npm** (comes with Node)

### Installation

```bash
git clone <your-repo-url>
cd food-recipe
npm install
```

### Development

Start the development server:

```bash
npm run dev
```

Then open the printed local URL in your browser (usually `http://localhost:5173/` for Vite).

### Production Build

Create an optimized production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## API

This project uses the public **TheMealDB** API (`https://www.themealdb.com/api/json/v1/1/`) to fetch categories, areas, and recipes (for example, filtering meals by area in `CountryDetail.jsx`).

## Linting

Run ESLint to check for issues:

```bash
npm run lint
```

## License

You can add your preferred license information here (e.g., MIT).