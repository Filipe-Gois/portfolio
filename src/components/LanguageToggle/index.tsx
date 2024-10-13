import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRouter, usePathname } from "next/navigation";

const LanguageToggle = () => {
  const router = useRouter();

  const pathname = usePathname().replace("/", "") as "pt" | "en";

  const toggleLanguage = (language: "pt" | "en") => {
    router.replace(`/${language}`);
  };

  return (
    <Select value={pathname} onValueChange={toggleLanguage}>
      <SelectTrigger className="w-full mr-4 bg-transparent gap-2">
        <SelectValue placeholder={pathname} defaultValue={"pt"} />
      </SelectTrigger>
      <SelectContent className="dark:bg-darkScheme-primary mr-4">
        <SelectItem value="pt">PT</SelectItem>
        <SelectItem value="en">EN</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default LanguageToggle;
