import { useEffect, useRef } from "react";
// import CustomInput from "../components/CustomInput/CustomInput";

const UseRefExample = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    console.log(inputRef.current); // <input type="text" placeholder="Enter name" />
    inputRef.current?.focus();
  }, []);

  return (
    <div>
      <h2>useRef Example</h2>
      <input type="text" ref={inputRef} placeholder="Enter name" />
      <input type="email" placeholder="Enter email" />
      {/* forwardRef */}
      {/* <CustomInput ref={inputRef}></CustomInput> */}
    </div>
  );
};

export default UseRefExample;
