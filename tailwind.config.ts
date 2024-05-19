import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        'orange' : 'hsl(25, 97%, 53%)',
        'light-grey' : 'hsl(217, 12%, 63%)',
        'dark-blue' : 'hsl(213, 19%, 18%)',
        'very-dark-blue' : 'hsl(216, 12%, 8%)'
      },
      fontFamily: {
        sans: ["Overpass", "var(--font-geist-sans)", ...fontFamily.sans],
        },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['hover'],
    }
  },
  plugins: [],
} satisfies Config;
