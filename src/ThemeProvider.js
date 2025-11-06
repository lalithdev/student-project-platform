import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: { main: '#1976d2' },
    secondary: { main: '#dc004e' }
  }
});

function App() {
  // (the rest of your app stays the same, but wrap with ThemeProvider)
  return (
    <ThemeProvider theme={theme}>
      {/* existing routing/components */}
    </ThemeProvider>
  );
}

export default App;
