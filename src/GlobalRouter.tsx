import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./layouts";

//pages
const Home = React.lazy(() => import("./pages/Home"));
const Intro = React.lazy(() => import("./pages/Intro"));
const Product = React.lazy(() => import("./pages/Product"));
const Contact = React.lazy(() => import("./pages/Contact"));
const Demo = React.lazy(() => import("./pages/Demo"));

export default function GlobalRouter(): JSX.Element {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route index element={<Home />} />
                    <Route path="/intro" element={<Intro />} />
                    <Route path="/product" element={<Product />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/demo" element={<Demo />} />
                    <Route path="/*" element={<Home />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    );
}
