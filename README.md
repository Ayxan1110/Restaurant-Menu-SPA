
# Restaurant Menu SPA

A Single-Page Application (SPA) for managing a restaurant menu, allowing users to browse items, add them to the cart, and customize their selections. Built with ReactJS, Redux, Redux Thunks, and Tailwind CSS, this app provides a seamless user experience for online food ordering.

## Features

- **Dynamic Menu**: Browse through various menu items, each with a detailed description and customizable options (such as toppings or ingredients).
- **Cart Management**: Add items to the cart and view the total.
- **Ingredient Customization**: Select and remove ingredients based on user preferences in both the menu and cart sections.
- **Responsive Design**: The app is fully responsive and works on desktop, tablet, and mobile devices.
- **State Management**: Uses Redux with Thunks for asynchronous state management to handle the cart, item selections, and fetching menu data.

## Technologies Used

- **ReactJS**: For building the user interface.
- **Redux & Redux Thunks**: For managing the state of the application, with Thunks used for asynchronous actions like fetching menu items or submitting orders.
- **Tailwind CSS**: For styling the app with utility-first CSS.
- **React Router**: For handling the page routing in the SPA.
- **React Modal**: For item customization with ingredient selection.

## Installation

To get started with the project locally, follow these steps:

### 1. Clone the repository
```bash
git clone https://github.com/your-username/restaurant-menu-spa.git
cd restaurant-menu-spa
```

### 2. Install dependencies
Make sure you have [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) (or [Yarn](https://yarnpkg.com/)) installed. Then run:

```bash
npm install
```
Or if you're using Yarn:
```bash
yarn install
```

### 3. Run the development server
Once all dependencies are installed, you can start the development server by running:

```bash
npm start
```

This will launch the app in your browser, usually at `http://localhost:3000`.

### 4. Build for production
To create a production build, run the following command:

```bash
npm run build
```

This will optimize and bundle the app for deployment.

## Usage

1. **Menu Page**: Users can browse the menu and click on any item to view its details, description.
2. **Cart Page**: Users can manage the items in their cart, view totals, and modify ingredients in the cart section.
3. **Add/Remove Items**: Items can be added to or removed from the cart. The cart total is updated accordingly.
4. **Select/Deselect Ingredients**: When an item is in cart, by clicking it a modal appears allowing users to select or deselect ingredients (e.g., toppings, sides).

## Project Structure

```
/src
  /assets
    /css
      global.css
      index.css
  /components
    /Cart
    /Menu
    /Modal
    /StarRating
  /redux
    /cartSlice.js
    /thunks.js
  /App.js
  /index.js
/public
  index.html
```

- **/components**: Contains all the React components and their css files, including Menu items, the Cart, and Modals.
- **/redux**: Includes the Redux store, cart slice logic, and Redux Thunks for async actions like fetching the menu.
- **/assets**: Contains Tailwind CSS configuration, custom and global styling.
- **App.js**: Main React component where routing and the structure of the app is set up.
- **index.js**: Entry point for React rendering.

## Redux State Structure

The state of the cart is managed via Redux and is structured as follows:

```js
{
  cart: {
    items: [
      {
        category: "simple"
        description: "A timeless favorite, featuring a juicy beef patty, melty cheese, crisp lettuce, fresh tomato, onions, and tangy pickles."
        id: "p1"
        img: "https://www.holycow.ch/wp-content/uploads/2020/12/HolyCoW_BurgerBoeuf_SmokinHolyCowboy_550x440.jpg"
        price: 20.9
        rating: 4.5
        title: "Classic Cheeseburger"
        toppings: [ "cheese", "lettuce", "tomato", … ]
      },
      // Other items
    ],
  }
}
```

## Customization

- **Ingredient Toppings**: You can customize each menu item by adding or removing ingredients (e.g., toppings for pizza) both in the menu and cart sections.
- **Responsive Layout**: Tailwind CSS is used to ensure the app looks great on all devices. The font sizes and layout adjust based on screen size.