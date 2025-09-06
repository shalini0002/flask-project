

import { useState } from "react";

export default function Todo() {
  const [itemName, setItemName] = useState("");
  const [itemDescription, setItemDescription] = useState("");
  const [itemId, setItemId] = useState("");
  const [itemUuid, setItemUuid] = useState("");
  const [itemHash, setItemHash] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/submittodoitem", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ itemName, itemDescription }),
    });
    const data = await response.json();
    alert(data.message);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>To-Do Page</h2>
      <form onSubmit={handleSubmit}>
        <div>
        <label>Item ID: </label>
  <input
    type="text"
    value={itemId}
    onChange={(e) => setItemId(e.target.value)}
    required
  />

<label>Item UUID: </label>
  <input
    type="text"
    value={itemUuid}
    onChange={(e) => setItemUuid(e.target.value)}
    required
  />

<label>Item Hash: </label>
  <input
    type="text"
    value={itemHash}
    onChange={(e) => setItemHash(e.target.value)}
    required
  />
  
          <label>Item Name: </label>
          <input
            type="text"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Item Description: </label>
          <textarea
            value={itemDescription}
            onChange={(e) => setItemDescription(e.target.value)}
            required
          />
        </div>
        <button type="submit">Add Item</button>
      </form>
    </div>
  );
}
