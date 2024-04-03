import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Autofun" },
    { name: "description", content: "Welcome to AutoFun!" },
  ];
};

export default function Index() {
  return <div></div>;
}
