import { CardWithModules } from "./components/card-with-modules/card-with-modules";
import { CardWithScss } from "./components/card-with-scss/card-with-scss";

export const App = () => {
  return (
    <main className="container">
      <CardWithModules />
      <CardWithScss />
      <CardWithModules />
    </main>
  );
};
