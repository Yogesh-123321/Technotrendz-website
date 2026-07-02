import { Moon, Sun } from "lucide-react";
import { useState } from "react";

export default function ThemeToggle() {

  const [dark, setDark] = useState(true);

  return (

    <button

      onClick={() => setDark(!dark)}

      className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:bg-white/10"

    >

      {dark ? <Sun size={18} /> : <Moon size={18} />}

    </button>

  );

}