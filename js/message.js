const form = document.querySelector("#message-me");
const error = document.querySelector("#error-msg");

function validateFormData(data) {
  const name = data.get("name");
  const email = data.get("email");
  const message = data.get("message");

  if (!name) throw new Error("Name is required");
  if (!email) throw new Error("Email is required");
  if (!message) throw new Error("Message cannot be empty");
}

async function handleSubmit(e) {
  e.preventDefault();
  error.textContent = "";
  const data = new FormData(e.target);
  try {
    validateFormData(data);
    const response = await fetch(e.target.action, {
      method: form.method,
      body: data,
      headers: {
        Accept: "application/json",
      },
    });

    if (!response.ok) {
      error.textContent = error.message;
    }
    error.textContent = "Message submitted";
    form.reset();
  } catch (error) {
    error.textContent = error.message;
  }
}

form.addEventListener("submit", handleSubmit);
