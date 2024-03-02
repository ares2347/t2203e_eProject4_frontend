import React, { ReactNode, useContext, useState } from 'react';
import { createContext } from 'react'
const DataContext = createContext({
  data: {} as any,
  updateData: ({}: any) => {}
});
interface MyComponentProps {
  children: ReactNode;
  initData: any;
}
const DataProvider: React.FC<MyComponentProps> = ({ children, initData }) => {
  const [data, setData] = useState({initData});

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