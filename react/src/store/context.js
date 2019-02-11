import React from 'react';

const AppContext = new React.createContext();

export const AppProvider = AppContext.Provider;
export const AppConsumer = AppContext.Consumer;