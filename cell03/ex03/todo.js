window.onload = function () {
  const listContainer = document.getElementById("ft_list");
  const newBtn = document.getElementById("new-btn");

  // โหลดจาก cookie เมื่อเปิดหน้า
  let todos = getTodosFromCookie();
  todos.forEach(todoText => {
    createTodoElement(todoText);
  });

  newBtn.addEventListener("click", () => {
    const text = prompt("Enter new TODO:");
    if (text && text.trim() !== "") {
      createTodoElement(text.trim());
      todos.push(text.trim());
      saveTodosToCookie(todos);
    }
  });

  function createTodoElement(text) {
    const todo = document.createElement("div");
    todo.className = "todo";
    todo.innerText = text;

    todo.addEventListener("click", () => {
      if (confirm("Do you want to delete this TODO?")) {
        todo.remove();
        todos = todos.filter(t => t !== text); // remove from array
        saveTodosToCookie(todos);
      }
    });

    listContainer.appendChild(todo); // ใส่ไว้ล่างสุด เพราะใช้ flex-column-reverse
  }

  function saveTodosToCookie(todoArray) {
    document.cookie = "todos=" + encodeURIComponent(JSON.stringify(todoArray)) + "; path=/";
  }

  function getTodosFromCookie() {
    const match = document.cookie.match(/(?:^|;) *todos=([^;]*)/);
    if (match) {
      try {
        return JSON.parse(decodeURIComponent(match[1]));
      } catch (e) {
        return [];
      }
    }
    return [];
  }
};