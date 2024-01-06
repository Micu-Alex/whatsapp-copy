export const registerUser = async (
  email: string,
  name: string,
  password: string
) => {
  try {
    const response = await fetch("http://localhost:3000/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });
    if (response.ok) {
      const data = await response.json();
      console.log("Registration successful:", data);
      window.location.href = "/";
    } else {
      const errorData = await response.json();
      console.error("Registration failed:", errorData);
      alert("Registration failed. Please try again.");
    }
  } catch (error) {
    console.error(
      "Error occurred during registering:",
      error,
      JSON.stringify({ name, email, password })
    );
    alert("An error occurred during . Please try again.");
  }
};
