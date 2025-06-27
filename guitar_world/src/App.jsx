import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css'; // You can delete this later if using only Tailwind


function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center text-center p-4">
      <div className="flex space-x-4 mb-4">
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="w-16 hover:scale-110 transition" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="w-16 hover:scale-110 transition" alt="React logo" />
        </a>
      </div>

      <h1 className="text-4xl font-bold text-blue-600 mb-4">🎉 Tailwind is working!</h1>

      <div className="bg-white p-6 rounded shadow">
        <button
          onClick={() => setCount((count) => count + 1)}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          count is {count}
        </button>
        <p className="mt-2 text-gray-700">
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>

      <p className="mt-6 text-sm text-gray-500 max-w-md">
        Click on the Vite and React logos to learn more.
      </p>
    </div>
  );
}

export default App;
