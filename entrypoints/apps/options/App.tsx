import Sidebar from "#/components/sidebar/Sidebar";
import FeedbackIcon from "@mui/icons-material/Feedback";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { HashRouter, Route, Routes } from "react-router";
import { FeedbackPage, FilterSettingsPage } from "./pages";

function App() {
  const sidebarItems: {
    title: string;
    link: string;
    icon: OverridableComponent<SvgIconTypeMap>;
  }[] = [
    {
      title: "フィルター設定",
      link: "/filter",
      icon: FilterAltIcon,
    },
    //{ title: "Wait time Settings", link: "/wait-time", icon: SettingsIcon },
    {
      title: "お問い合わせ・ご要望",
      link: "/feedback",
      icon: FeedbackIcon,
    },
  ];

  return (
    <HashRouter>
      <div className="flex">
        <header>
          <Sidebar items={sidebarItems} />
        </header>
        <main>
          <div className="p-2">
            <Routes>
              <Route path="/" element={<FilterSettingsPage />} />
              <Route path="/filter" element={<FilterSettingsPage />} />
              {/* <Route
                  path="/wait-time"
                  element={<LoadingWatTimeSettingsPage />}
                /> */}
              <Route path="/feedback" element={<FeedbackPage />} />
            </Routes>
          </div>
        </main>
      </div>
    </HashRouter>
  );
}

export default App;
