import { forwardRef } from "react";

type TCustomInputProps = {
  className: "string";
};
const CustomInput = forwardRef<HTMLInputElement, TCustomInputProps>(
  ({ className }, myRef) => {
    return (
      <div>
        <input
          type="text"
          className={className}
          ref={myRef}
          placeholder="Enter name from custom input"
        />
      </div>
    );
  }
);

export default CustomInput;
