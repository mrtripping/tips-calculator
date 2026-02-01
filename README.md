# Tips Calculator

A modern, responsive web application for calculating tips and managing restaurant orders with local storage persistence.

## Features

- 🧮 **Tip Calculator** - Calculate tips with predefined percentages (10%, 20%, 50%)
- 📱 **Mobile-First Design** - Fully responsive UI optimized for all devices
- 💾 **Order Management** - Save, edit, and load orders with localStorage persistence
- 🔔 **Toast Notifications** - Modern notification system for user feedback
- ⚡ **Real-time Updates** - Live quantity editing with instant price calculations
- 🎨 **Modern UI** - Clean design with Tailwind CSS and smooth animations

## Tech Stack

- **Frontend**: React 19 with TypeScript
- **Styling**: Tailwind CSS v4
- **Build Tool**: Vite
- **State Management**: React Hooks with localStorage persistence
- **Icons**: Lucide React & SVG Icons

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/mrtripping/tips-calculator.git

# Navigate to the project directory
cd tips-calculator

# Install dependencies
npm install

# Start the development server
npm run dev
```

The application will be available at `http://localhost:5173`

### Build for Production

```bash
# Build the application
npm run build

# Preview the production build
npm run preview
```

## Usage

1. **Add Items**: Click menu items to add them to your order
2. **Edit Quantities**: Use the + and - buttons to adjust item quantities
3. **Set Tip**: Select a tip percentage (10%, 20%, or 50%)
4. **Save Order**: Click "Guardar Orden" to save the current order
5. **Manage Orders**: Access saved orders via the "📋 Órdenes" button
6. **Edit Orders**: Load a saved order to edit and update it

## Project Structure

```
src/
├── components/          # React components
│   ├── Footer.tsx     # Application footer
│   ├── MenuItem.tsx    # Menu item component
│   ├── OrderContents.tsx # Order display and quantity controls
│   ├── OrderTotals.tsx # Order totals and checkout button
│   ├── SavedOrders.tsx # Saved orders management
│   ├── TipPercentageForm.tsx # Tip selection
│   └── Toast.tsx      # Toast notifications
├── constants/          # Application constants
├── hooks/            # Custom React hooks
├── types/            # TypeScript type definitions
├── utils/            # Utility functions
└── data/             # Mock data (menu items)
```

## Key Features Explained

### Order Persistence
- Orders are automatically saved to localStorage
- Each saved order includes items, tip amount, total, and timestamp
- Orders can be loaded for editing or permanently deleted

### Responsive Design
- Mobile-first approach with progressive enhancement
- Adaptive layouts for mobile, tablet, and desktop
- Touch-friendly interface with appropriate sizing

### Type Safety
- Full TypeScript implementation throughout the codebase
- Strong typing for all components and state management
- Type-safe localStorage operations

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.

## Author

**[mrtripping]** - *Full Stack Developer*

- GitHub: [@mrtripping](https://github.com/mrtripping)
- Portfolio: [Coming Soon]

---

Made with ❤️ by [mrtripping](https://github.com/mrtripping)