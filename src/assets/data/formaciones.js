import { v4 as uuid } from "uuid";
import { iconFront, iconBackend, iconDevops, iconDataScience, iconInnovacion } from "../images"

export const formaciones = [
  {
    id: uuid(),
    name: "Frontend",
    color: "#6bd1ff",
    icon: iconFront,
  },
  {
    id: uuid(),
    name: "Backend",
    color: "#00c86f",
    icon: iconBackend,
  },
  {
    id: uuid(),
    name: "Devops",
    color: "#f16165",
    icon: iconDevops,
  },
  {
    id: uuid(),
    name: "Data Science",
    color: "#9cd33b",
    icon: iconDataScience,
  },
  {
    id: uuid(),
    name: "Innovación y Gestión",
    color: "#ff8c2a",
    icon: iconInnovacion,
  },
];
