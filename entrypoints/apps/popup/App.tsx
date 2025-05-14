import BuildIcon from "@mui/icons-material/Build";
import GrapeImage from "../../../public/icon.png";
import { QuizPage } from "./pages";

function App() {
  const handleOpenOptionsPage = () => {
    chrome.runtime.openOptionsPage();
  };

  return (
    <>
      <header>
        <div className="w-full h-16 bg-violet-800 flex items-center justify-center">
          <div className="flex items-center p-2">
            <img src={GrapeImage} alt="Grape Icon" className="w-12 h-12" />
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
        <QuizPage />
      </main>
    </>
  );
}

export default App;
