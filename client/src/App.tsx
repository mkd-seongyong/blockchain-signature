import React from "react";
import SignButton from "./components/SignButton";

const App: React.FC = () => {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">블록체인 전자서명 클라이언트</h1>
      <SignButton />
    </div>
  );
};

export default App;
