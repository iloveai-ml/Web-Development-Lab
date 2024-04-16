&lt;!DOCTYPE html&gt;
&lt;html lang=&quot;en&quot;&gt;
&lt;head&gt;
  &lt;meta charset=&quot;UTF-8&quot;&gt;
  &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;
  &lt;title&gt;Shopping List&lt;/title&gt;
  &lt;style&gt;
    body {
      font-family: Arial, sans-serif;
    }
    #shopping-list {
      margin: 20px;
    }
    #items {
      list-style-type: none;
      padding: 0;
    }
    #items li {
      margin-bottom: 5px;
    }
  &lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;div id=&quot;shopping-list&quot;&gt;
  &lt;h1&gt;Shopping List&lt;/h1&gt;
  &lt;input type=&quot;text&quot; id=&quot;item&quot; placeholder=&quot;Enter item&quot;&gt;
  &lt;button id=&quot;addItemBtn&quot;&gt;Add Item&lt;/button&gt;
  &lt;ul id=&quot;items&quot;&gt;&lt;/ul&gt;
&lt;/div&gt;
&lt;script&gt;
  class Model {
    constructor() {
      this.items = JSON.parse(localStorage.getItem(&#39;shoppingList&#39;)) || [];
    }
    addItem(item) {
      this.items.push(item);
      this.save();
    }
    getItems() {
      return this.items;
    }
    save() {
      localStorage.setItem(&#39;shoppingList&#39;, JSON.stringify(this.items));

    }
  }
  class View {
    constructor() {
      this.itemsList = document.getElementById(&#39;items&#39;);
      this.itemInput = document.getElementById(&#39;item&#39;);
      this.addItemBtn = document.getElementById(&#39;addItemBtn&#39;);
    }
    getNewItem() {
      return this.itemInput.value.trim();
    }
    clearInput() {
      this.itemInput.value = &#39;&#39;;
    }
    renderItems(items) {
      this.itemsList.innerHTML = &#39;&#39;;
      items.forEach(item =&gt; {
        const li = document.createElement(&#39;li&#39;);
        li.textContent = item;
        this.itemsList.appendChild(li);
      });
    }
  }
  class Controller {
    constructor(model, view) {
      this.model = model;
      this.view = view;
      this.view.addItemBtn.addEventListener(&#39;click&#39;, () =&gt; this.addItem());
      this.initialRender();
    }
    initialRender() {
      this.view.renderItems(this.model.getItems());
    }
    addItem() {
      const newItem = this.view.getNewItem();
      if (newItem !== &#39;&#39;) {
        this.model.addItem(newItem);
        this.view.renderItems(this.model.getItems());
        this.view.clearInput();
      }

    }
  }
  const model = new Model();
  const view = new View();
  const controller = new Controller(model, view);
&lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;
