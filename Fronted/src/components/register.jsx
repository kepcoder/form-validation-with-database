import React, { useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  // const nameRef = useRef('')
  // const emailRef = useRef('')
  // const passwordRef = useRef('')
  // const confirmPasswordRef = useRef('')
  const [error, setError] = useState("");
  const [users, setUsers] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const password = formData.password;
    const confirmPassword = formData.confirmPassword;
    const specialCharacters = /[!@#$%^&*()<>,./]/;
    const capitalLetter = /[A-Z]/;
    const digits = /[0-9]/;

    if (password.length <= 8) {
      setError("Password Must contain more than 8 characters ");
      return;
    }
    if (password != confirmPassword) {
      setError("Password do not match");
      return;
    }
    if (!specialCharacters.test(password)) {
      setError("Please add some special characters also");
      return;
    }
    if (!capitalLetter.test(password)) {
      setError("Password Must Contain Capital Letter");
      return;
    }
    if (!digits.test(password)) {
      setError("Password Must Contain Some Digits");
      return;
    }

    setError("");
    setUsers((preUsers) => [
      ...preUsers,
      {
        name: formData.name,
        email: formData.email,
        password: formData.password,
      },
    ]);

    setFormData({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
    toast.success("Registration Done✅", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });

    // nameRef.current.value = ''
    // emailRef.current.value = ''
    // passwordRef.current.value = ''
    // confirmPasswordRef.current.value = ''
  };

  return (
    <>
      <div className="flex items-center justify-center min-h-screen">
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
          className="w-full max-w-md p-6 bg-white rounded-lg shadow-md"
        >
          <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">
            Signup Form
          </h2>
          <div className="mb-4">
            <label
              className="block text-sm font-medium text-gray-600 mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              // ref={nameRef}
              className="text-black w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-sm font-medium text-gray-600 mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              name="email"
              onChange={handleChange}
              // ref={emailRef}
              className="w-full text-black px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-sm font-medium text-gray-600 mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              // ref={passwordRef}
              className="w-full text-black px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              placeholder="Enter your password"
              required
            />
          </div>

          <div className="mb-6">
            <label
              className="block text-sm font-medium text-gray-600 mb-2"
              htmlFor="confirmPassword"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              // ref={confirmPasswordRef}
              className="w-full text-black px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              placeholder="Confirm your password"
              required
            />
          </div>
          {error ? <p className="text-red-500 text-center">{error}</p> : ""}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200"
          >
            Register
          </button>
          <p className="pt-2 text-gray-600">Password Must Contain:-</p>
          <p className="text-gray-600">1.Capital Letter</p>
          <p className="text-gray-600">2.Special Characters</p>
          <p className="text-gray-600">3.Some Digits</p>
        </form>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </div>

      <div className="flex flex-col gap-3 p-2">
        {users.map((elem, idx) => (
          <div key={idx} className="border-green-500 border-2 ">
            <h1>{elem.name}</h1>
            <h1>{elem.email}</h1>
            <h1>{elem.password}</h1>
          </div>
        ))}
      </div>
    </>
  );
};

export default Register;
