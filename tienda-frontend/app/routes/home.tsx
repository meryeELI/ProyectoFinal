import type { Route } from "./+types/home";
//import { Welcome } from "../welcome/welcome";
import { Welcome } from "./components";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Costura APP" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return <Welcome />;
}
