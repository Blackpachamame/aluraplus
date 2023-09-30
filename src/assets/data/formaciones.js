import { v4 as uuid } from 'uuid';
export const formaciones = [
    {
        id: uuid(),
        name: "Frontend",
        color: "#6bd1ff",
        icon: "../src/assets/images/icono/iconFrontend.svg",
    },
    {
        id: uuid(),
        name: "Backend",
        color: "#00c86f",
        icon: "../src/assets/images/icono/iconProgramacion.svg",
    },
    {
        id: uuid(),
        name: "Devops",
        color: "#f16165",
        icon: "../src/assets/images/icono/iconDevops.svg",
    },
    {
        id: uuid(),
        name: "Data Science",
        color: "#9cd33b",
        icon: "../src/assets/images/icono/iconDataScience.svg",
    },
    {
        id: uuid(),
        name: "Innovación y Gestión",
        color: "#ff8c2a",
        icon: "../src/assets/images/icono/iconInnovacionGestion.svg",
    },
];