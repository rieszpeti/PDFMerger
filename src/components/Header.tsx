import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="p-6 text-center">
      <div className="flex justify-center items-center space-x-4">
        <h1 className="text-3xl font-semibold">PDF Merger</h1>
      </div>
    </header>
  );
}

export default Header;
