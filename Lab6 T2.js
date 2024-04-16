// Controller Logic
// Initialize the shopping list model
var shoppingList = [];
// Function to add item to the shopping list
function addItem(itemName) {
if (itemName.trim() !== "") {
shoppingList.push({
name: itemName,
purchased: false
});
}
}
// Function to toggle item's purchased status
function togglePurchased(index) {
shoppingList[index].purchased = !shoppingList[index].purchased;
}
// Function to render the shopping list
function renderShoppingList() {
var shoppingListElement = document.getElementById("shopping-list");
shoppingListElement.innerHTML = "";
shoppingList.forEach(function(item, index) {
var listItem = document.createElement("li");
listItem.textContent = item.name;

if (item.purchased) {
listItem.classList.add("purchased");
}
listItem.onclick = function() {
togglePurchased(index);
renderShoppingList();
};
shoppingListElement.appendChild(listItem);
});
}
// Function to handle adding item event
function handleAddItem() {
var itemInput = document.getElementById("item");
var itemName = itemInput.value;
addItem(itemName);
renderShoppingList();
itemInput.value = "";
}
// Event listener for adding item button click
document.getElementById("addItemBtn").addEventListener("click",
handleAddItem);
// Initial rendering of the shopping list
renderShoppingList();
