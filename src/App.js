import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Layout from "./Component/Layout";
import Create from "./pages/Create";
import DialogDemo from "./pages/DialogDemo";
import Notes from "./pages/Notes";

function App() {
  return (
    <>
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/">
              <Notes />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/dialog">
              <DialogDemo />
              {/* <PageItem/> */}
            </Route>
          </Switch>
        </Layout>
      </Router>
    </>
  );
}

export default App;
