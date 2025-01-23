# **The Wild Oasis**

The Wild Oasis is a modern, full-featured React application designed to provide a seamless user experience for managing bookings, user accounts, and cabin details. Built with best practices and a modular architecture, it ensures maintainability and scalability. 

## **Features**
- **User Authentication**: Login and secure access to app features.
- **Dashboard**: Overview of key metrics and data.
- **Bookings Management**: View, create, and update booking details.
- **Cabin Management**: Manage cabin information and availability.
- **User Management**: Administer user details and roles.
- **Settings**: Customize application configurations.
- **Account Management**: Update personal account information.
- **Dark Mode**: Toggle between light and dark themes.
- **Error Handling**: Provides graceful error recovery with clear messages.
- **Responsive Design**: Optimized for all devices.

## **Tech Stack**
- **Frontend**: React, React Router DOM, styled-components.
- **State Management**: React Context, React Query.
- **Form Handling**: react-hook-form.
- **Charts**: Recharts for data visualization.
- **Notifications**: react-hot-toast for elegant user notifications.
- **Utilities**: date-fns for date management.
- **Styling**: Global styles and theme support.

## **Key Libraries**
- `@supabase/supabase-js` for backend integration.
- `@tanstack/react-query` for data fetching and caching.
- `react-error-boundary` for improved error handling.

## **Development Setup**
### **Prerequisites**
- Node.js >= 16.x
- npm or yarn

### **Steps**
1. Clone the repository:
   ```bash
   git clone https://github.com/94edwin89/the-wild-oasis.git
   cd the-wild-oasis
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

### **Scripts**
- `npm run dev`: Start the development server.
- `npm run build`: Build the app for production.
- `npm run preview`: Preview the production build locally.
- `npm run lint`: Run ESLint to ensure code quality.

## **Folder Structure**
```
src/
├── pages/              # Page components (e.g., Dashboard, Bookings)
├── ui/                 # UI components (e.g., AppLayout, ProtectedRoute)
├── context/            # Context providers (e.g., DarkModeContext)
├── styles/             # Global styles
├── App.jsx             # Main app component
└── main.jsx            # Application entry point
```

## **Contributing**
Contributions are welcome! Please follow these steps:
1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Description of changes"
   ```
4. Push your branch and submit a pull request.

# .env file are uploaded in database directily