// Application constants for tips calculator
export const TIP_PERCENTAGES = {
  LOW: 0.1,
  MEDIUM: 0.2,
  HIGH: 0.5,
} as const;

export const TOAST_DURATION = 3000; // 3 seconds
export const LOCAL_STORAGE_KEYS = {
  SAVED_ORDERS: 'savedOrders',
} as const;

export const ANIMATION_DURATION = {
  TOAST: 300,
  BUTTON_SCALE: 95,
  BUTTON_HOVER: 105,
} as const;

export const DEVELOPER_CONFIG = {
  GITHUB_USERNAME: 'mrtripping',
  DEFAULT_TECHNOLOGIES: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Next.js', 'Node.js'],
} as const;