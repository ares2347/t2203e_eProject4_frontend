import React, { ReactNode, useContext, useState } from 'react';
import { createContext } from 'react'
const DataContext = createContext({});
interface MyComponentProps {
  children: ReactNode;
}
const DataProvider: React.FC<MyComponentProps> = ({ children }) => {
  const [data, setData] = useState({});

  const updateData = (newData: {}) => {
    setData((prevData) => ({ ...prevData, ...newData }));
  };

  return (
    <DataContext.Provider value={{ data, updateData }}>
      {children}
    </DataContext.Provider>
  );
};

const useDataContext = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useDataContext must be used within a DataProvider');
  }
  return context;
};

export { DataProvider, useDataContext };