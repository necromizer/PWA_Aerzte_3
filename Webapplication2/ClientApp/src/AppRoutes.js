import { UI } from "./components/PWA_Bildkommunikation";
import { Counter } from "./components/Machbarkeitsprototyp"
import { UITabs } from "./components/Test";

const AppRoutes = [
  {
        index: true,
        element: <UI />
  },
  {
    path: '/counter',
    element: <Counter />
    },
  {
      path: '/Test',
      element: <UITabs/>
  }
];

export default AppRoutes;
