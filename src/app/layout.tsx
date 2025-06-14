
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { Orbitron } from 'next/font/google';

const orbitron = Orbitron({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-orbitron', 
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html 
      lang="en" 
      className={`${GeistSans.variable} ${GeistMono.variable} ${orbitron.variable}`}
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
