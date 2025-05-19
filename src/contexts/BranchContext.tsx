
import React, { createContext, useContext, useState, useEffect } from 'react';

// Define available branches
export type Branch = 'addis-ababa' | 'adama' | 'bahir-dar';

// Branch context type
type BranchContextType = {
  branch: Branch;
  setBranch: (branch: Branch) => void;
};

// Create context with default values
const BranchContext = createContext<BranchContextType>({
  branch: 'addis-ababa',
  setBranch: () => {},
});

// Branch provider props type
type BranchProviderProps = {
  children: React.ReactNode;
};

// Branch provider component
export const BranchProvider: React.FC<BranchProviderProps> = ({ children }) => {
  // Try to get branch from localStorage, default to 'addis-ababa'
  const [branch, setBranch] = useState<Branch>(() => {
    if (typeof window !== 'undefined') {
      const savedBranch = localStorage.getItem('hirtoli-branch') as Branch;
      if (savedBranch && ['addis-ababa', 'adama', 'bahir-dar'].includes(savedBranch)) {
        return savedBranch;
      }
    }
    return 'addis-ababa';
  });

  // Update localStorage when branch changes
  useEffect(() => {
    localStorage.setItem('hirtoli-branch', branch);
  }, [branch]);

  return (
    <BranchContext.Provider value={{ branch, setBranch }}>
      {children}
    </BranchContext.Provider>
  );
};

// Custom hook for using the branch context
export const useBranch = () => useContext(BranchContext);
