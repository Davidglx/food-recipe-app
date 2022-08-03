import Meal from "./components/Meal";
import './components/styles.css';
import { Route, Routes } from "react-router-dom";
import RecipeInfp from "./components/RecipeInfp";

const App = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<Meal />} />
      <Route path="/:MealId" element={<RecipeInfp/>}  />
    </Routes>
    </>
  );
};

export default App;
