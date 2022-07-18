import "./App.css";

import View from "./components/View";
import Canvas from "./components/Canvas";
import SettingBar from "./components/SettingBar";
import ToolBar from "./components/ToolBar";

function App() {
  return (
    <View>
      <SettingBar></SettingBar>
      <ToolBar></ToolBar>
      <Canvas />
    </View>
  );
}

export default App;
