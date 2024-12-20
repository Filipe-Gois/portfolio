declare module "next-themes" {
  export interface ThemeProviderProps {
    enableSystem?: boolean;
    attribute?: string;
    defaultTheme?: string;
    value?: string;
    forcedTheme?: string;
    storageKey?: string;
    themes?: string[];
    enableColorScheme?: boolean;
    disableTransitionOnChange?: boolean;
    children?: React.ReactNode;
  }

  export const ThemeProvider: React.FC<ThemeProviderProps>;
  export const useTheme: () => {
    theme: string;
    setTheme: (theme: string) => void;
    systemTheme?: string;
  };
}
