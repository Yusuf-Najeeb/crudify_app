function todoID() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

const resetInput = () => {
  const addTodoInput = document.querySelector("#todo_input");
  addTodoInput.value = " ";
};

const showError = (title) => {
  const errowMessage = document.getElementById("form_message");
  errowMessage.innerHTML = title;
  errowMessage.classList.remove("hidden");
  errowMessage.classList.add("text-sm", "text-red-400");
  setTimeout(() => {
    errowMessage.classList.add("hidden");
  }, 3000);
};

const getDB = (DB_NAME) => {
  if (!DB_NAME) {
    throw new Error("Database missing...");
  }
  return JSON.parse(localStorage.getItem(DB_NAME)) || [];
};

const setDB = (DB_NAME, new_todo_db) => {
  return localStorage.setItem(DB_NAME, JSON.stringify(new_todo_db));
};

const sortDB = (todo_db) => {
  return todo_db.sort((a, b) =>
    a.created_at < b.created_at ? 1 : a.created_at > b.created_at ? -1 : 0
  );
};
