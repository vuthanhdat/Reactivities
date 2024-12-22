# Install MobX: Make sure you have MobX and MobX React installed in your project using npm:
Code
npm install mobx mobx-react

# Create a Store: A store is where you manage your state. You can create a simple MobX store like this:
JavaScript
import { makeAutoObservable } from 'mobx';

class Store {
  data = [];

  constructor() {
    makeAutoObservable(this);
  }

  addData(item) {
    this.data.push(item);
  }
}

const store = new Store();
export default store;
Using the Store in React Components: Inject the MobX store into your React components using observer to make the component reactive:
JavaScript
import React from 'react';
import { observer } from 'mobx-react';
import store from './store'; // path to your store

const DataComponent = observer(() => {
  const addItem = () => {
    store.addData('New Item');
  };

  return (
    <div>
      <button onClick={addItem}>Add Item</button>
      <ul>
        {store.data.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
});

export default DataComponent;

# Using Actions: When modifying observable state, it’s a good practice to use actions. You can define actions in your store:
JavaScript
import { action, makeAutoObservable } from 'mobx';

class Store {
  data = [];

  constructor() {
    makeAutoObservable(this);
  }

  addData = action((item) => {
    this.data.push(item);
  });
}

# Strict Mode: If you are encountering issues with strict mode (e.g., modifying observable values without using an action), MobX requires you to wrap your state updates in an action. You can use runInAction if you're working with async methods or outside of actions:
JavaScript
import { runInAction } from 'mobx';

// Example of using runInAction
async function fetchData() {
  const response = await fetch('your-api-url');
  const data = await response.json();

  runInAction(() => {
    store.data = data;
  });
}