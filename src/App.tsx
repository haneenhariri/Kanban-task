import BoardPage from '@/pages/BoardPage';
import ThemeProvider from '@/components/providers/ThemeProvider';

/**
 * App Component
 *
 * Root component of the Kanban Task Board application.
 * Follows Single Responsibility Principle by focusing solely on:
 * - Setting up the main application structure
 * - Wrapping the application with necessary providers
 *
 * The theme management logic has been extracted to a separate ThemeProvider component
 * to maintain clean separation of concerns.
 *
 * @returns JSX element representing the root application
 */
function App() {
  return (
    <ThemeProvider>
      <BoardPage />
    </ThemeProvider>
  );
}

export default App;