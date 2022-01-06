import { lazy, LazyExoticComponent } from "react";
// import { LazyPage01, LazyPage02, LazyPage03 } from "../01-lazyload/pages";
import { NoLazy } from "../01-lazyload/pages/NoLazy";

type JSXElement = () => JSX.Element

interface Route { 
    to: string,
    path: string
    Component:  LazyExoticComponent<JSXElement> | JSXElement,
    name: string

}

const LazyLayout = lazy( ()=> import(/* webpackChunkName: "LazyLayout" */ '../01-lazyload/layout/LazyLayout'));

export const routes: Route[] = [
    {
        to: '/lazylayout/',
        path: '/lazylayout/*',
        Component: LazyLayout,
        name: 'LazyLayout' 
    },
    {
        to: '/no-lazy',
        path: '/no-lazy',
        Component: NoLazy,
        name: 'No-lazy' 
    },
    
];