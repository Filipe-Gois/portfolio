import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import Cookies from "js-cookie";

const LanguageToggle = () => {
  const [currentLanguage, setCurrentLanguage] = useState<string>(() => {
    const savedLanguage = Cookies.get("language");
    return savedLanguage || "PT";
  });

  const toggleLanguage = () => {
    setCurrentLanguage((language) => (language === "PT" ? "EN" : "PT"));
  };

  return (
    <Select>
      <SelectTrigger className="w-full mr-4 bg-transparent gap-2">
        <SelectValue placeholder={currentLanguage} defaultValue={"SLA"} />
      </SelectTrigger>
      <SelectContent
        onChange={toggleLanguage}
        className="dark:bg-darkScheme-primary mr-4"
      >
        <SelectItem value="PT">PT</SelectItem>
        <SelectItem value="EN">EN</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default LanguageToggle;
