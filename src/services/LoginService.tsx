export const loginUser = async (email: string, password: string) => {
  try {
    const response = await fetch("http://localhost:3000/api/auth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    if (response.ok) {
      const token = await response.text();
      // Save the token in local storage
      localStorage.setItem("token", token);
      window.location.href = "/";
    } else {
      const errorMessage = await response.text();
      alert(errorMessage);
    }
  } catch (error) {
    console.error("Error occurred during login:", error);
    alert("An error occurred during login. Please try again.");
  }
};
