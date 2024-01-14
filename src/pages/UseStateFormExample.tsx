// import { useState } from "react";

// const UseStateFormExample = () => {
//   /*const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
// */
//   const [user, setUser] = useState({ name: "", email: "" });

//   const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     // console.log(name, email);
//     console.log(user);
//   };
//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     console.log(user);
//     const inputName = e.target.name;
//     const value = e.target.value;
//     setUser({ ...user, [inputName]: value });
//   };
//   return (
//     <div className="m-4">
//       <form onSubmit={handleSubmit}>
//         <input
//           // onChange={(e) => setName(e.target.value)}
//           // onChange={(e) => setUser({ ...user, name: e.target.value })}
//           onChange={handleChange}
//           type="text"
//           name="name"
//           id="name"
//         />
//         <input
//           // onChange={(e) => setEmail(e.target.value)}
//           // onChange={(e) => setUser({ ...user, email: e.target.value })}
//           onChange={handleChange}
//           type="email"
//           name="email"
//           id="email"
//         />
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default UseStateFormExample;

import { useState } from "react";

const MyForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
  });
  console.log(formData);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e); // show event object

    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    // You can handle the form submission logic here, using the formData state
    console.log("Form submitted:", formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        First Name:
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Last Name:
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Phone:
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Country:
        <input
          type="text"
          name="country"
          value={formData.country}
          onChange={handleChange}
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default MyForm;
