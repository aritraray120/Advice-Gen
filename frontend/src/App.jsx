import { useState } from "react";
import { quotes } from "./assets/assets"; // Import the quotes

function App() {
  const [advice, setAdvice] = useState("");

  function handlerFunc() {
    setAdvice(quotes[Math.floor(Math.random() * quotes.length)]);
  }

  return (
    <div className="flex h-screen items-center justify-center bg-[#1f2632]">
      <div className="flex w-[85vw] flex-col items-center justify-center rounded-2xl bg-[#323a49] px-[40px] pt-[20px] text-center sm:w-[540px]">
        <div className="my-[25px] text-base font-bold text-[#52ffa8]">ADVICE</div>

      
        <div className="mb-[25px] min-h-[132px] sm:h-auto text-[28px] font-extrabold text-[#cee3e9]">
          {advice?.advice || "Click the dice for advice"}
        </div>

        <svg className="my-[10px] w-full sm:w-[444px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 444 16" height="auto">
          <g fill="none" fillRule="evenodd">
            <path fill="#CEE3E9" d="M0 8h196v1H0zM248 8h196v1H248z" />
            <g transform="translate(212)" fill="#CEE3E9">
              <rect width="6" height="16" rx="3" />
              <rect x="14" width="6" height="16" rx="3" />
            </g>
          </g>
        </svg>

        <div onClick={handlerFunc} className="relative top-11 h-[90px] w-[90px] rounded-full bg-[#52ffa8] hover:shadow-[0px_0px_18px_10px_rgba(82,255,168,0.6)]">
          <svg className="absolute top-8 left-8" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z" fill="#202733" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default App;
