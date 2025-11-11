import { useCallback, useState } from "react";

export function useHistory(maxItems = 10) {
  const [items, setItems] = useState([]);

  const add = useCallback((a, b, success) => {
    setItems((prev) =>
      [
        { id: Date.now() + Math.random(), a, b, success },
        ...prev,
      ].slice(0, maxItems)
    );
  }, [maxItems]);

  const reset = useCallback(() => setItems([]), []);

  return { items, add, reset, setItems };
}
