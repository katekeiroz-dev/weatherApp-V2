# Weather APP

## ✨ The project :
This project is part of an assignment for the **Web Development 1** module. The goal is to create a fully functional, responsive, that provides weather data for cities , display the weather and forecast for the next 7 days for cities. 
This project showcases a responsive and minimalist layout with engaging UI elements.
The focus of this assignment is to apply fundamental web development concepts, including:  
- **HTML5** for structuring content  
- **Bulma** (CSS) framewokr for styling and layout 
- **JavaScript** for the app functionality logic  
-**Eleventy** HTML template

  ---

  
### 🎓 What I Learned :
Through this project, I gained hands-on experience with:  

- **Crafting well-structured web pages** using semantic HTML elements  
- **Utilizing Bulma** to create modern, responsive UI components  
- **Simulating API data locally** using a custom JSON-based data structure served on **localhost**  
- **Storing and accessing weather data** through a local data source to replicate real-world API integration
---
  
## ✨ Key Features  
- Fully responsive layout tailored for both mobile and desktop experiences  
- Stylish interface built with Bulma, offering a clean and modern look  
- Data-driven weather interface powered by a local JSON-based API  

### 🌍 Main Dashboard  
- Presents weather summaries for multiple global cities  
- Interactive cards: selecting a city navigates to a detailed view  
- Highlights a personalized list of favorite cities based on user preferences  

### 🌦️ City Weather View  
- Offers an in-depth look at the selected city's weather  
- Displays:
  - A 7-day forecast beginning from the next calendar day  
  - Key statistics: average temperature, high/low temperatures, wind details  

### ⚙️ Preferences Panel  
- Customize your app experience through a simple settings interface  
- Choose favorite cities using a dynamic list of checkboxes  
- Includes two main actions:  
- **Apply Changes** – saves selections to update the Dashboard view  
- **Reset Favorites** – clears all chosen favorites  
- Seamlessly integrates user input using JavaScript to update the interface  
  ---

## 🛠️ Technologies Used :
- HTML5 
- Bulma (CSS framework)
- 11ty
- JavaScripit
- Git for version control.
- Github
- Netlify ( deploy)
- daysjs

  ---

##  Images
 
- Fontwesome (https://fontawesome.com/)


 ---

### 🖥️Layout desktop
<img width="500" alt="Screenshot 2025-02-26 at 23 20 21" src="/Users/katekeiroz/Desktop/finalVersion/readme_Imgs/Screenshot 2025-05-18 at 01.29.07.png" />


### 💻Layout Responsive

<img width="500" alt="Screenshot 2025-02-26 at 23 21 21" src="/Users/katekeiroz/Desktop/finalVersion/readme_Imgs/Screenshot 2025-05-18 at 01.29.34.png" />

<img width="500" alt="Screenshot 2025-02-26 at 23 21 08" src="/Users/katekeiroz/Desktop/finalVersion/readme_Imgs/Screenshot 2025-05-18 at 01.28.42.png" />


## 📂 Project Structure

This project follows an organized structure to facilitate code maintenance and scalability.
 
## Directories and Files

### 📂 project/
-
<img width="500" alt="Screenshot 2025-02-26 at 23 21 08" src="/Users/katekeiroz/Desktop/finalVersion/readme_Imgs/Screenshot 2025-05-17 at 18.11.38.png" />

 ---

## 🚀 How to run the Project

### Clone the repository:
 ```sh
git clone https://github.com/katekeiroz-dev/weatherApp-V2
```

### install NPM

```sh
npm install
```

### Run the development server:

```sh
eleventy --serve
```

### Local Host

```sh
http://localhost:8080/.
```


---

## Project live demo ⤵️⤵️:

[CLICK HERE](https://weatherapp-katekeiroz.netlify.app/ )


---



## References
### 🔄 `Object.entries`  
Returns an array of a given object's own enumerable string-keyed property `[key, value]` pairs. Useful when you need both keys and values for iteration.  
📚 Reference: [MDN - Object.entries](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries)

---

### 📁 `dir` Data Directory in Eleventy  
Instead of permalinks, you can configure the input/output structure of your Eleventy project using the `dir` property in `.eleventy.js`.  
📚 Reference: [11ty - Directory Structure](https://www.11ty.dev/docs/config/#directory-structure)

---

### ⏱️ `setInterval()`  
Executes a function repeatedly at fixed time intervals. Great for refreshing weather data or updating clocks.  
📚 Reference: [MDN - setInterval](https://developer.mozilla.org/en-US/docs/Web/API/setInterval)

---

### 🧱 `document.createTextNode()`  
Used to create a new text node, which can then be appended to a DOM element. Handy when inserting plain text into a dynamically created element.  
📚 Reference: [MDN - createTextNode](https://developer.mozilla.org/en-US/docs/Web/API/Document/createTextNode)

---

### 🧹 `String.trim()`  
Removes whitespace from both ends of a string—helpful when cleaning user input before saving or displaying.  
📚 Reference: [MDN - String.trim](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim)

---

### 🧩 `event.target` vs `event.currentTarget`  
Understand the difference between the actual element clicked (`target`) and the one with the event listener (`currentTarget`).  
📚 Reference: [JavaScript.info - Event Delegation](https://javascript.info/event-delegation#event-target)

---

### ⚖️ `Switch Statements`  
An alternative to multiple `if...else` conditions. Useful when dealing with many possible options (e.g., different weather conditions or icons).  
📚 Reference: [MDN - switch](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch)

---

### 💾 `localStorage.length`  
Returns the number of items stored in `localStorage`. Useful for checking if preferences or saved data exist.  
📚 Reference: [MDN - Storage.length](https://developer.mozilla.org/en-US/docs/Web/API/Storage/length)

---

### 📥 Fetching Local JSON Data  
Use the `fetch()` API to retrieve weather data from local JSON files served on `localhost`. Ideal for prototyping apps without using external APIs.  
📚 Reference: [MDN - fetch()](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)

---

### 🧩 Bulma Cards  
A flexible Bulma component used for displaying grouped content like city weather cards. Includes header, content, and footer sections.  
📚 Reference: [Bulma - Card Component](https://bulma.io/documentation/components/card/)

---

### 🕒 `dayjs` – Lightweight Date Library  
A modern alternative to Moment.js, used for parsing, formatting, and manipulating dates in a cleaner way.  
📚 Reference: [day.js Documentation](https://day.js.org/docs/en/installation/installation)

---

### 📦 `JSON.stringify()` and `JSON.parse()`  
Convert JavaScript objects to JSON strings and vice versa. Crucial for storing structured data like arrays or objects in `localStorage`.  
📚 Reference: [MDN - JSON](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON)

---
Made by Kate Keiroz



