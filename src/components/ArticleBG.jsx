import React from "react";
import Navbar from "./Navbar";
import ArticleContent from "./ArticleContent";

const ArticleBG = ({data})  => {
    return (
    <>
    <Navbar></Navbar>

    {/* Background */}
        <div className="container pb-5">
        <div className="row justify-content-center">

        <ArticleContent data={data}></ArticleContent>

        </div>
        </div>
    </>
    )

}

export default ArticleBG