import React from 'react'
import {locations} from "#constants/index.js";
import clsx from "clsx";
import {useGSAP} from "@gsap/react";
import {Draggable} from "gsap/Draggable";
import {useWindowStore} from "#store/window.js";
import useLocationStore from "#store/Location.js";

const projects = locations.work?.children ?? []
const Home = () => {
    const {openWindow} = useWindowStore();
    const {setActiveLocation} = useLocationStore();
    useGSAP(() => {
        Draggable.create(".folder")
    }, []);

    const handleOpenProjectFinder = (project) => {
        setActiveLocation(project);
        openWindow("finder", project);
    }
    return (
        <section id="home">
            <ul>
                {projects.map((project) => (
                    <li
                        key={project.id}
                        className={clsx("group folder", project.windowPosition )}
                        onDoubleClick={() => handleOpenProjectFinder(project)}
                    >
                        <img src="/images/folder.png" alt={project.name}/>
                        <p>{project.name}</p>
                    </li>
                ))}
            </ul>
        </section>
    )
}
export default Home
