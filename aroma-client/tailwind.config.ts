import type { Config } from 'tailwindcss'

import { COLOR } from './src/shared/constants/color.constant'

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    colors: {
      ...COLOR,
      transparent: 'transparent'
    },
    extend: {
      borderRadius: {
        default: '15px'
      },
      zIndex: {
        1: '1',
        2: '2',
        3: '3',
        4: '4',
        5: '5'
      }
    }
  },
  plugins: []
} satisfies Config
