import { useState } from "react";
import Logo from './Logo.js'
import Form from './Form.js'
import PackingList from "./packinglist.js";
import Stats from './Stats.js'

// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: true },
// ];

export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems(items => [...items, item])
  }

  function handleDeleteItem(id) {
    console.log(id);
    setItems(items => items.filter(item => item.id !== id))
  }

  function handleToggleItem(id) {
    setItems(items => items.map(item => item.id === id ? {...item, packed: !item.packed} : item))
  }

  function handleClear() {
    const confirmed = window.confirm('Are you sure you want to delete all items?')
    if(confirmed) setItems([]);
  }

  return(
    <div className="app">
      <Logo />
      <Form addItems={handleAddItems} />
      <PackingList items={items} onDeleteItem={handleDeleteItem} onToggleItem={handleToggleItem} onCLearList={handleClear} />
      <Stats items={items} />
    </div>
  )
}







