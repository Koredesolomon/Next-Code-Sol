import React from "react";

const FormButton = ({ loading, text }) => {
  return (
    <button
      className="block text-center text-sm lg:text-base font-medium text-white w-full py-4 rounded-xl mt-4 transition ease-in-out delay-150 bg-gradient-to-r from-[#2D8AE0] to-[#7D51D9] hover:from-[#7D51D9] hover:to-[#2D8AE0] hover:-translate-y-1 hover:scale-103 duration-300"
      disabled={loading}
      type="submit"
    >
      {text}
    </button>
  );
};

export default FormButton;
