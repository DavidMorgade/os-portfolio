import React, { createContext, useContext, useEffect, useState } from "react";

// Define the context interface
interface LanguageContextProps {
  language: string;
  updateLanguage: (lang: string) => void;
}

// Create the context
const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

// Custom hook to use the language context
export const useLanguageContext = (): LanguageContextProps => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguageContext must be used within a LanguageProvider");
  }
  return context;
};

// Custom hook to manage language state
const useLanguage = (): [string, (lang: string) => void] => {
  const [language, setLanguage] = useState<string>(() => {
    const savedLanguage = localStorage.getItem("language");
    return savedLanguage ? savedLanguage : "en";
  });

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  const updateLanguage = (lang: string) => {
    if (lang === "en" || lang === "es") {
      setLanguage(lang);
    } else {
      console.warn("Unsupported language. Supported languages are 'en' and 'es'.");
    }
  };

  return [language, updateLanguage];
};

// Provider component
export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, updateLanguage] = useLanguage();

  return (
    <LanguageContext.Provider value={{ language, updateLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
