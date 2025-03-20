// import { useState } from "react";

// function App() {

//   const data = [
//     { "person": "Albert Einstein", "advice": "Life is like riding a bicycle. To keep your balance, you must keep moving." },
//     { "person": "Steve Jobs", "advice": "Your time is limited, so don’t waste it living someone else’s life." },
//     { "person": "Warren Buffett", "advice": "The best investment you can make is in yourself." },
//     { "person": "Maya Angelou", "advice": "If you don't like something, change it. If you can't change it, change your attitude." },
//     { "person": "Confucius", "advice": "It does not matter how slowly you go as long as you do not stop." },
//     { "person": "Dalai Lama", "advice": "Happiness is not something ready-made. It comes from your own actions." },
//     { "person": "Bruce Lee", "advice": "Be water, my friend." },
//     { "person": "Socrates", "advice": "The only true wisdom is in knowing you know nothing." },
//     { "person": "Mark Twain", "advice": "The secret of getting ahead is getting started." },
//     { "person": "Oprah Winfrey", "advice": "Turn your wounds into wisdom." },
//     { "person": "Theodore Roosevelt", "advice": "Do what you can, with what you have, where you are." },
//     { "person": "J.K. Rowling", "advice": "It is our choices that show what we truly are, far more than our abilities." },
//     { "person": "Eleanor Roosevelt", "advice": "Do one thing every day that scares you." },
//     { "person": "Henry Ford", "advice": "Whether you think you can, or you think you can't—you're right." },
//     { "person": "Nelson Mandela", "advice": "It always seems impossible until it is done." },
//     { "person": "Leonardo da Vinci", "advice": "Learning never exhausts the mind." },
//     { "person": "Aristotle", "advice": "We are what we repeatedly do. Excellence, then, is not an act, but a habit." },
//     { "person": "Vincent Van Gogh", "advice": "What would life be if we had no courage to attempt anything?" },
//     { "person": "John Wooden", "advice": "Do not let what you cannot do interfere with what you can do." },
//     { "person": "Benjamin Franklin", "advice": "An investment in knowledge pays the best interest." },
//     { "person": "Stephen Hawking", "advice": "Intelligence is the ability to adapt to change." },
//     { "person": "Marcus Aurelius", "advice": "You have power over your mind—not outside events. Realize this, and you will find strength." },
//     { "person": "Gandhi", "advice": "Live as if you were to die tomorrow. Learn as if you were to live forever." },
//     { "person": "Jeff Bezos", "advice": "If you never want to be criticized, for goodness' sake don’t do anything new." }
//   ];

//   const [advice, setAdvice] = useState("");

//   function handlerFunc() {
//     setAdvice(data[Math.floor(Math.random() * data.length)]);
//   }

//   return (

//     <div className="flex h-screen items-center justify-center bg-[#1f2632]">
//       <div className="flex w-[85vw] flex-col items-center justify-center rounded-2xl bg-[#323a49] px-[40px] pt-[20px] text-center sm:w-[540px]">
//         <div className="my-[25px] text-base font-bold text-[#52ffa8]">ADVICE</div>

//         <div className="mb-[25px] h-[120px] overflow-hidden text-[28px] font-extrabold text-[#cee3e9]">
//           {advice?.advice || "Click the dice for advice"}
//         </div>


//         <svg className="my-[10px] w-full sm:w-[444px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 444 16" height="auto">
//           <g fill="none" fill-rule="evenodd">
//             <path fill="#CEE3E9" d="M0 8h196v1H0zM248 8h196v1H248z" />
//             <g transform="translate(212)" fill="#CEE3E9">
//               <rect width="6" height="16" rx="3" />
//               <rect x="14" width="6" height="16" rx="3" />
//             </g>
//           </g>
//         </svg>

//         <div onClick={handlerFunc} className="relative top-11 h-[90px] w-[90px] rounded-full bg-[#52ffa8] hover:shadow-[0px_0px_18px_10px_rgba(82,255,168,0.6)]">
//           <svg className="absolute top-8 left-8" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
//             <path d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z" fill="#202733" />
//           </svg>
//         </div>
//       </div>
//     </div>

//   );
// }

// export default App;

import { useState } from "react";
import quotes from "./assets/assets"; // Import the quotes

function App() {
  const [advice, setAdvice] = useState("");

  function handlerFunc() {
    setAdvice(quotes[Math.floor(Math.random() * quotes.length)]);
  }

  return (
    <div className="flex h-screen items-center justify-center bg-[#1f2632]">
      <div className="flex w-[85vw] flex-col items-center justify-center rounded-2xl bg-[#323a49] px-[40px] pt-[20px] text-center sm:w-[540px]">
        <div className="my-[25px] text-base font-bold text-[#52ffa8]">ADVICE</div>

        <div className="mb-[25px] h-[120px] overflow-hidden text-[28px] font-extrabold text-[#cee3e9]">
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
