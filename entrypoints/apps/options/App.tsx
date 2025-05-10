import Sidebar from "#/components/sidebar/Sidebar";
import AppContextProvider from "#/context/AppContextProvider";
import FeedbackIcon from "@mui/icons-material/Feedback";
import SettingsIcon from "@mui/icons-material/Settings";
import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { HashRouter, Route, Routes } from "react-router";
import { UserSettingsPage } from "./pages";
import FeedbackPage from "./pages/FeedbackPage";

const sidebarItems: {
  title: string;
  link: string;
  icon: OverridableComponent<SvgIconTypeMap>;
}[] = [
  { title: "Settings", link: "/settings", icon: SettingsIcon },
  { title: "Feedback", link: "/feedback", icon: FeedbackIcon },
];

function App() {
  return (
    <AppContextProvider
      child={
        <HashRouter>
          <div className="flex items-center">
            <header>
              <Sidebar items={sidebarItems} />
            </header>
            <main>
              <Routes>
                <Route path="/" element={<UserSettingsPage />} />
                <Route path="/settings" element={<UserSettingsPage />} />
                <Route path="/feedback" element={<FeedbackPage />} />
              </Routes>
            </main>
          </div>
        </HashRouter>
      }
    />
  );
}

export default App;
