import react from "react";
function useLocalStorage(itemName, initialValue) {
  const [loading, setLoading] = react.useState(true);
  const [error, setError] = react.useState(false);
  const [item, setItem] = react.useState(initialValue);

  react.useEffect(() => {
  setTimeout(() => {
    try {
      const localStorageItem = localStorage.getItem(itemName);
      let parsedItem;
      
      if (!localStorageItem) {
        localStorage.setItem(itemName, JSON.stringify(initialValue));
        parsedItem = initialValue;
      } else {
        parsedItem = JSON.parse(localStorageItem);
      }
      
      setItem(parsedItem);
      setLoading(false);
    } catch (error) {
      setError(true);
    }
    
  }, 1000)});
  

  const saveItem = (newItem) => {
    const stringifiedItem = JSON.stringify(newItem);
    localStorage.setItem(itemName, stringifiedItem);
    setItem(newItem);
  };

  return {
    item,
    saveItem,
    loading,
    error,
  }
}

export { useLocalStorage };