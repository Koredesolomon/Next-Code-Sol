import React from "react";
import { Icon } from "@iconify/react";

const FormControl = ({ label, inputType, id, ref, icon = undefined }) => {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="font-bold text-xs lg:text-sm">
        {label}
      </label>
      <div className="mb-4 flex items-center rounded-md gap-1 p-2 border-[2px] border-solid border-[#9CB1BA] focus-within:border-[#C9E2FA]">
        {icon && <Icon icon={icon} />}
        <input
          type={inputType}
          required
          id={id}
          className="text-[#162F43] grow text-xs lg:text-sm"
          ref={ref}
        />
      </div>
    </div>
  );
};

export default FormControl;
