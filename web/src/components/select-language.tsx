"use client"; // Certifique-se de que isso é usado em componentes client-side

import { LanguagesIcon } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function SelectLanguage() {
  const router = useRouter(); // Inicializa o hook do Next.js para navegação
  const [language, setLanguage] = useState<string>(""); // Estado para armazenar a linguagem selecionada

  useEffect(() => {
    // Verifica a rota atual e define o valor inicial
    const path = window.location.pathname;
    if (path.startsWith("/pt")) {
      setLanguage("portuguese");
    } else if (path.startsWith("/en")) {
      setLanguage("english");
    }
  }, [router.refresh]); // Atualiza sempre que a rota mudar

  const handleLanguageChange = (value: string) => {
    if (value === "portuguese") {
      router.push("/pt"); // Redireciona para a página /pt
    } else if (value === "english") {
      router.push("/en"); // Redireciona para a página /en
    }
  };

  return (
    <Select value={language} onValueChange={handleLanguageChange}>
      {" "}
      {/* Define o valor selecionado */}
      <SelectTrigger className="min-w-[131px] h-[32px] bg-transparent border-gray-400 rounded-[4px] text-white font-bold text-[16px] flex items-center justify-between gap-0 ">
        <SelectValue placeholder="Select a Language" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup className="flex items-start flex-col justify-start ">
          <SelectItem value="english" className="">
            <div className="flex items-center justify-center">
              <LanguagesIcon className="mr-2 h-4 w-4" />
              <span>English</span>
            </div>
          </SelectItem>
          <SelectItem value="portuguese" className=" ">
            <div className="flex items-center justify-center">
              <LanguagesIcon className="mr-2 h-4 w-4" />
              <span>Português</span>
            </div>
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
