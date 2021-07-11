import React, {
  createContext,
  ReactNode,
  useContext,
  useMemo,
  useState,
} from 'react';

interface DocProviderProps {
  children: ReactNode;
}

interface IDocInfo {
  cpf: string;
  typeDoc?: 'RG' | 'CNH';
  sideDoc: string;
  imagePath: string;
}

interface DocContextData {
  docInfo: IDocInfo;
  setCpf: (cpf: string) => void;
  setTypeDoc: (typeDoc: 'RG' | 'CNH') => void;
  setSideDoc: (sideDoc: string) => void;
  setImagePath: (imagePath: string) => void;
}

const docContext = createContext({} as DocContextData);

export function DocProvider({ children }: DocProviderProps) {
  const [cpf, setCpf] = useState('');
  const [typeDoc, setTypeDoc] = useState<'RG' | 'CNH'>();
  const [sideDoc, setSideDoc] = useState('');
  const [imagePath, setImagePath] = useState('');

  const docInfo = useMemo<IDocInfo>(
    () => ({ cpf, typeDoc, sideDoc, imagePath }),
    [cpf, typeDoc, sideDoc, imagePath]
  );

  return (
    <docContext.Provider
      value={{ docInfo, setCpf, setTypeDoc, setSideDoc, setImagePath }}
    >
      {children}
    </docContext.Provider>
  );
}

export function useDoc() {
  const context = useContext(docContext);

  return context;
}
