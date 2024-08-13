import { useState } from "react";

function App() {
  const [color, setColor] = useState("#334155");

  return (
    <div className=" w-fll h-screen " style={{ backgroundColor: color }}>
      <div className="  text-red-400 flex fixed bottom-14 inset-x-0 flex-wrap px-2 justify-center">
        <div className="flex flex-wrap justify-center text-white bg-white gap-3 shadow-lg px-4 py-3 rounded-2xl">
          <button
            onClick={() => setColor("#ef4444")} //we can also use arrow function and pass change value direct aur create a new function and simply pass in onClick={}
            className="bg-red-500 outline-none rounded-lg px-4 py-2"
          >
            Red
          </button>
          <button
            onClick={() => setColor("#22c55e")}
            className="bg-green-500 outline-none rounded-lg px-4 py-2"
          >
            Green
          </button>
          <button
            onClick={() => setColor("#3b82f6")}
            className="bg-blue-500 outline-none rounded-lg px-4 py-2"
          >
            Blue
          </button>
          <button
            onClick={() => setColor("#111827")}
            className="bg-gray-900 outline-none rounded-lg px-4 py-2"
          >
            Gray
          </button>
          <button
            onClick={() => setColor("#eab308")}
            className="bg-yellow-500 outline-none rounded-lg px-4 py-2"
          >
            Yellow
          </button>
          <button
            onClick={() => setColor("#7dd3fc")}
            className="bg-blue-300 outline-none rounded-lg px-4 py-2"
          >
            Sky Blue
          </button>
          <button
            onClick={() => setColor("#fb923c")}
            className="bg-orange-400 outline-none rounded-lg px-4 py-2"
          >
            Orange
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
