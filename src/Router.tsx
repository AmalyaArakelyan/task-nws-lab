import React, {Suspense,lazy} from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

const CategoryPage = lazy(() => import('./pages/CategoryPage'))
const Home = lazy(() => import('./pages/Home'))
// function Index() {
//   return <h2>Home</h2>;
// }
//
//  function Product({ match }) {
//    return <h2>This is a page for product with ID: {match.params.id} </h2>;
// }

function AppRouter() {
    return (
        <Suspense fallback={<div>loading...</div>}>
            <Router>
               <div>
                    <Route path="/" exact component={Home} />
                    <Route path="/category/:id" component={CategoryPage} />
                </div>
            </Router>
        </Suspense>
  );
}

export default AppRouter;