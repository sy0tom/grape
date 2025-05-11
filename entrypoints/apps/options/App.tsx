import Sidebar from "#/components/sidebar/Sidebar";
import AppContextProvider from "#/context/AppContextProvider";
import FeedbackIcon from "@mui/icons-material/Feedback";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { HashRouter, Route, Routes } from "react-router";
import { FeedbackPage, FilterSettingsPage } from "./pages";

const sidebarItems: {
  title: string;
  link: string;
  icon: OverridableComponent<SvgIconTypeMap>;
}[] = [
  { title: "Filter Settings", link: "/filter", icon: FilterAltIcon },
  //{ title: "Wait time Settings", link: "/wait-time", icon: SettingsIcon },
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
                <Route path="/" element={<FilterSettingsPage />} />
                <Route path="/filter" element={<FilterSettingsPage />} />
                {/* <Route
                  path="/wait-time"
                  element={<LoadingWatTimeSettingsPage />}
                /> */}
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
