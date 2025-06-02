// import { GeistSans } from 'geist/font/sans';
// import { GeistMono } from 'geist/font/mono';
// import './globals.css';
// import { ThemeProvider } from '@/components/theme-provider';

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`} suppressHydrationWarning>
//       <body className="bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
//         <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
//           {children}
//         </ThemeProvider>
//       </body>
//     </html>
//   );
// }

import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html 
      lang="en" 
      className={`${GeistSans.variable} ${GeistMono.variable}`}
      suppressHydrationWarning
      // Ensure the theme class is applied to html element
      style={{ colorScheme: 'light dark' }} // Helps with browser-native dark mode
    >
      <body className="min-h-screen bg-background text-foreground transition-colors duration-200">
        <ThemeProvider 
          attribute="class" 
          defaultTheme="system" 
          enableSystem
          disableTransitionOnChange={false} // Smoother transitions
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
