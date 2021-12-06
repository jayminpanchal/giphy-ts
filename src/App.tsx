import { Provider } from "react-redux";
import { Layout } from "antd";

import store from "./store";
import Home from "./pages/Home";
import 'antd/dist/antd.css';

const { Content } = Layout;

function App() {
  return (
    <Provider store={store}>
      <Content>
        <Home />
      </Content>
    </Provider>
  );
}

export default App;
