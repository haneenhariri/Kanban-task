import BoardPage from '@/pages/BoardPage';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import type { AppDispatch } from './redux';
import { setTheme } from './redux/slice/themeSlice';

// مكون لتهيئة السمة (بديل ThemeProvider السابق)
function ThemeInitializer({ children }: { children: React.ReactNode }) {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    // التهيئة الأولية للسمة
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleSystemThemeChange = (e: MediaQueryListEvent) => {
      dispatch(setTheme(e.matches ? 'dark' : 'light'));
    };
    
    mediaQuery.addEventListener('change', handleSystemThemeChange);
    
    return () => {
      mediaQuery.removeEventListener('change', handleSystemThemeChange);
    };
  }, [dispatch]);

  return <>{children}</>;
}

function App() {
  return (
      <ThemeInitializer>
        <BoardPage/>
      </ThemeInitializer>
  );
}

export default App;