import BuildIcon from "@mui/icons-material/Build";
import { useState } from "react";
import { TopPage } from "./pages";

function App() {
  const handleOpenOptionsPage = () => {
    chrome.runtime.openOptionsPage();
  };

  const [mainContent, setMainContent] = useState<React.ReactNode>(<TopPage />);

  const handleChangeContent = (content: React.ReactNode) => {
    setMainContent(content);
  };

  return (
    <>
      <header>
        <div className="w-full h-12 bg-blue-950 flex items-center justify-center">
          <div
            onClick={() => handleChangeContent(<TopPage />)}
            className="flex items-center"
          >
            <span className="p-2 text-2xl font-sans font-bold text-white">
              Grape
            </span>
          </div>
          <div className="p-2 flex justify-end flex-grow">
            <button onClick={() => handleOpenOptionsPage()}>
              <BuildIcon
                fontSize="medium"
                className="text-white hover:text-gray-300"
              />
            </button>
          </div>
        </div>
      </header>
      <main>
        <div className="p-2">{mainContent}</div>
      </main>
    </>
  );
}

export default App;
