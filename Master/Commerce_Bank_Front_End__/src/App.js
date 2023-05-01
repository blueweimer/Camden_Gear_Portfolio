import './App.css';
import { Container, createTheme, ThemeProvider } from "@material-ui/core";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { SnackbarProvider } from 'notistack';
import LoginView from './views/login';
import HomeView from './views/home/index.jsx';
import LoanCalculator from './views/loanCalculator/index.jsx';
import AccountView from './views/myAccount/index.jsx';
import CalendarView from './views/calendar/index.jsx';
import Nav from './components/Nav'

const theme = createTheme({});







function App() {

  return (
    <ThemeProvider theme={theme}>
      <SnackbarProvider maxSnack={3}>
        <BrowserRouter>
          <Container maxWidth={false} disableGutters>
            <Routes>
              <Route path="/" element={<LoginView />} />
              <Route path="/login" element={<LoginView />} />
              <Route path="*" element={<p>This page does not exist.</p>} />
              <Route path="/calendar" element={<HomeView />} />
              <Route path="/loanCalculator" element={<LoanCalculator />} />
              <Route path="/myAccount" element={<AccountView />} />
              <Route path="/login" element={<LoginView />} />
              <Route path="/home" element={<CalendarView />} />
            </Routes>
          </Container>
        </BrowserRouter>
      </SnackbarProvider>
    </ThemeProvider>
  );
}

export default App;