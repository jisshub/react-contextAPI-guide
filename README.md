# Context API

[Course Files](https://github.com/iamshaunjp/react-context-hooks)

- Clean and easy way to share between components.

1. Create an app first

   ```bash
   npx create-react-app context-app
   ```

2. Next, create a class component `Navbar`.

   **Navbar.js**

   ```js
   import React, { Component } from 'react';
   class Navbar extends Component {
     render() {
       return (
         <nav>
           <h1>Context App</h1>
           <ul>
             <li>Home</li>
             <li>About</li>
             <li>Contact</li>
           </ul>
         </nav>
       );
     }
   }
   ```

3. Nest this component in App.js component

   **App.js**

   ```js
   <div className='App'>
     <Navbar />
   </div>
   ```

4. Create new component `BookList`

   **BookList.js**

   ```js
   class BookList extends Component {
     render() {
       return (
         <div className='book-list'>
           <ul>
             <li>british empire in india</li>
             <li>attitude is everything</li>
             <li>the great indian education</li>
           </ul>
         </div>
       );
     }
   }
   ```

5. Embed the same in App.js

   **App.js**

   ```jsx
   <div className='App'>
     <Navbar />
     <BookList />
   </div>
   ```

# What is Context API

- Share state within a component tree.

- It gives a central place to store the states and share it b/w components
  without having to pass the same by `props`. Thus making data sharing ease.

![](./images/screen-1.jpg 'image')

- Here if those highlighted components needs access to state from `App` component.
  it is passed through `PageView` and `Navbar` component. Here both acts as carrier.
  Suppose if more components present, it becomes more messier.
- We use **context** to solve this, create a **context** to store the state, then using **context provider**, pass it to any component we want in the tree.

![](./images/screen-2.jpg 'image')

**Note:**

- Before creating a `context` check whether need to share the state globally or not.
- it's just for sharing the `state` globally b/w many components.
