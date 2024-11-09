import { useState } from "react";
import "./App.css";

// 부모 컴포넌트
function App() {
  const [state, userState] = useState(0)
  const [newTask, userTask] = useState(0)
  const ToDo = (props) => {
    return (
      <>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
      <h1 className="mb-4 text-2xl font-bold text-center">To-Do 리스트</h1>
      <div className="flex mb-4">
      <input
      type="text"
      placeholder="할 일을 입력하세요"
      className="flex-grow p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button className="px-4 py-2 text-white bg-blue-500 rounded-r-md hover:bg-blue-600">
      추가
      </button>
      </div>
      <ul>
      {/* li는 따로 TodoItem이라는 자식 컴포넌트를 만들어서 관리해주세요. */}
      <li className="flex items-center justify-between px-4 py-2 mb-2 bg-white rounded-lg shadow-md cursor-pointer hover:bg-gray-100">
      <span>여기에 입력한 값을 넣어주세요</span>
      <button className="text-red-500 hover:text-red-700">삭제</button>
      </li>
      </ul>
      </div>
      </div>
      </>
    );
  }
}

// 자식 컴포넌트
function TodoItem() {}

export default App;
