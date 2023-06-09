import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { Navbar, Footer, Sidebar, ThemeSettings, ThemeSetting } from "./components";
import {
  Ecommerce,
  Orders,
  Calendar,
  Employees,
  Stacked,
  Pyramid,
  Customers,
  Kanban,
  Area,
  Bar,
  Pie,
  Financial,
  ColorPicker,
  Mapping,
  Editor,
  Line
} from "./pages";

import { useStateContext } from "./contexts/ContextProvider";

import "./App.css";

const App = () => {
  const {activeMenu, setActiveMenu,currentMode, themeSettings, setThemeSettings, currentColor} = useStateContext();
  return (
    <div className={currentMode === 'Dark' ? 'dark' : ''}>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
            <TooltipComponent content="settings" position="Top">
              <button
                type="button"
                className="text-3xl p-3 hover:drop-shadow-xl
           hover:bg-light-gray text-white"
                style={{ background: currentColor, borderRadius: "50%" }}
                 onClick={() => setThemeSettings(true)}>
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>
          {activeMenu ? (
            <div
              className="w-72 fixed sidebar
           dark:bg-secondary-dark-bg
            bg-white"
            >
              <Sidebar />
            </div>
          ) : (
            <div
              className="w-0 dark:bg-secondary-dark-bg
          "
            >
              <Sidebar />
            </div>
          )}

          <div
            className={`dark:bg-main-dark-bg bg-main-bg min-h-screen  w-full ${
              activeMenu ? "md:ml-72" : "flex-2"

            }`}
          >
            <div className="fixed md:static
             bg-main-bg 
             dark:bg-main-dark-bg 
             navbar w-full">
              <Navbar />
            </div>
            <div>
              {themeSettings && <ThemeSetting />}
              <Routes>
                {/* Dashboard */}
                <Route path="/" element={<Ecommerce />} />
                <Route path="/ecommerce" element={<Ecommerce />} />

                {/* Pages */}
                <Route path="/orders" element={<Orders />} />
                <Route path="/employees" element={<Employees />} />
                <Route path="/customers" element={<Customers />} />

                {/* Apps */}

                <Route path="/kanban" element={<Kanban />} />
                <Route path="/Editor" element={<Editor />} />
                <Route path="/Calendar" element={<Calendar />} />
                <Route path="/color" element={<ColorPicker /> } /> 

                {/* Charts */}
                <Route path="/line" element={<Line />} />
                <Route path="/area" element={<Area />} />
                <Route path="/bar" element={<Bar />} />
                <Route path="/pie" element={<Pie />} />
                <Route path="/financial" element={<Financial />} />
                <Route path="/mapping" element={<Mapping />} />
                <Route path="/pyramid" element={<Pyramid />} />
                <Route path="/Stacked" element={<Stacked />} />
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
