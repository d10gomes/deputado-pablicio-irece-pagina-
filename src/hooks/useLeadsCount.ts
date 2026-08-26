import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

export function useLeadsCount() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    let active = true;
    supabase.rpc("get_leads_count").then(({ data, error }) => {
      if (active && !error && typeof data === "number") {
        setCount(data);
      }
    });
    return () => {
      active = false;
    };
  }, []);

  return count;
}
