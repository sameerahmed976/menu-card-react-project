import { useState } from "react";
import menu from "./data";
import Menu from "./Menu";
import MenuButtons from "./MenuButtons";
import "./style/style.css";

function App() {
  const [menuItems, setMenuItems] = useState(menu);

  const menuButtons = [
    "all",
    ...new Set(
      menu.map((item) => {
        return item.category;
      })
    ),
  ];

  const menuFilter = (category) => {
    if (category === "all") {
      // console.log("click");
      setMenuItems(menu);
      return;
    }
    const nemMenuItems = menu.filter((item) => item.category === category);
    setMenuItems(nemMenuItems);
  };

  return (
    <main className="app">
      <section className="menu">
        <h1 className="menu__heading">Menu</h1>
      </section>
      <MenuButtons menuButtons={menuButtons} menuFilter={menuFilter} />
      <Menu menu={menuItems} />
    </main>
  );
}

export default App;
