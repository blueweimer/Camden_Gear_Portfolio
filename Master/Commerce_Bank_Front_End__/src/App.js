import './App.css';
import { Container, createTheme, ThemeProvider } from "@material-ui/core";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { SnackbarProvider } from 'notistack';
import LoginView from './views/login';
import HomeView from './views/home/index.jsx';
import CalanderView from './views/calanderView/index.jsx';
import AccountView from './views/myAccount/index.jsx';
import Nav from './components/Nav'

const theme = createTheme({});







function App() {

  return (
    <ThemeProvider theme={theme}>
      <SnackbarProvider maxSnack={3}>
        <BrowserRouter>
          <Container maxWidth={false} disableGutters>
            <Routes>
              <Route path="/login" element={<LoginView />} />
              <Route path="*" element={<p>This page does not exist.</p>} />
              <Route path="/home" element={<HomeView />} />
              <Route path="/calanderView" element={<CalanderView />} />
              <Route path="/myAccount" element={<AccountView />} />
              <Route path="/login" element={<Navigate to="/login" />} />
            </Routes>
          </Container>
        </BrowserRouter>
      </SnackbarProvider>
    </ThemeProvider>
  );
}

export default App;