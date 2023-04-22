import PageCard from "../components/screens/pageCard/PageCard";
import HomePage from "../components/screens/homePage/HomePage";
import PageAllCardHorizontal from "../components/screens/pageAllCardHorizontal/PageAiiCardHoriontal";
import PageAllCardVertical from "../components/screens/pageAllCardVertical/PageAllCardVertical";
import PageAllAreas from "../components/screens/pageAllAreas/PageAllAreas";

export const routes = [
  {
    path: "/",
    component: HomePage,
    auth: false,
  },
  {
    path: "/PageAllCardHorizontal",
    component: PageAllCardHorizontal,
    auth: false,
  },
  {
    path: "/PageAllCardVertical",
    component: PageAllCardVertical,
    auth: false,
  },
  {
    path: "/PageAllAreas",
    component: PageAllAreas,
    auth: false,
  },

  {
    path: "/user/:id",
    component: PageCard,
    auth: false,
  },
];
