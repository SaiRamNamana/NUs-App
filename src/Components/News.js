import React, { useState,useEffect } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props)=> {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [totalResults, settotalResults] = useState(0);
 
    const capitalizeFirstLetter = (word) => {
      return word.substr(0, 1).toUpperCase() + word.substr(1);
    }
  
    document.title = `${capitalizeFirstLetter(
      props.category
    )} - Nu's`;

  const updateFunction = async () => {
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=6db81141fdd2405f8c25e561908ab910&page=${page}&pagesize=${props.pageSize}`;

    setLoading(true);

    let data = await fetch(url);
    props.setProgress(50);
    let parsedata = await data.json();
    props.setProgress(70);
    setArticles(parsedata.articles)
    settotalResults(parsedata.totalResults)
    setLoading(false)
    props.setProgress(100);
  }

    useEffect(() => {
      updateFunction(); 
      //eslint-disable-next-line
    }, []);

  // const handleNext = async () => {
  //   setPage(page+1);
  //   updateFunction();
  // };

  // const handlePrev = async () => {
  //   setPage(page-1);
  //   updateFunction();
  // };

  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=6db81141fdd2405f8c25e561908ab910&page=${page+1}&pagesize=${props.pageSize}`;
    setPage(page+1);
    let data = await fetch(url);
    let parsedata = await data.json();
    setArticles(articles.concat(parsedata.articles))
    settotalResults(parsedata.totalResults)
  };
    return (
      <>
        <h2 className="text-center" style={{ margin: "30px 0px" ,marginTop:"90px"}}>
          Nu's - Top {capitalizeFirstLetter(props.category)} Headlines
        </h2>
        {loading && <Spinner />}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner />}
        >
          <div className="container">
            <div className="row">
              {articles.map((ele) => {
                return (
                  <div className="col-md-4 my-3" key={ele.url}>
                    <NewsItem
                      title={ele.author}
                      description={ele.title}
                      imageUrl={ele.urlToImage}
                      newsUrl={ele.url}
                      author={ele.author}
                      date={ele.publishedAt}
                      source={ele.source.name}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>
        {/* <div className="container d-flex justify-content-between">
          <button
            type="button"
            className="btn btn-dark"
            disabled={page <= 1}
            onClick={handlePrev}
          >
            {" "}
            &larr; Previous
          </button>
          <button
            type="button"
            className="btn btn-dark"
            disabled={
              page > totalResults / props.pageSize
            }
            onClick={handleNext}
          >
            Next &rarr;
          </button>
        </div> */}
      </>
    );
}
export default News
