import React from "react";

const NewsItem = (props) => {
  let { title, description, imageUrl, newsUrl, author, date, source } = props;
  return (
    <div>
      <div className="card">
        <span
          class="position-absolute top-0 translate-middle badge rounded-pill bg-danger"
          style={{ left: "90%", zIndex: "1" }}
        >
          {source}
        </span>
        <img
          src={
            imageUrl
              ? imageUrl
              : "https://imgs.search.brave.com/E9M7LXrE6jxB0nUlQCIcQak0x_EI0HrfT0tz26xKTY8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE1/MDQ3MTE0MzQ5Njkt/ZTMzODg2MTY4ZjVj/P2ZtPWpwZyZxPTYw/Jnc9MzAwMCZpeGxp/Yj1yYi00LjAuMyZp/eGlkPU0zd3hNakEz/ZkRCOE1IeHpaV0Z5/WTJoOE5IeDhibVYz/YzN4bGJud3dmSHd3/Zkh4OE1BPT0.jpeg"
          }
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{title ? title : ""}</h5>
          <p className="card-text">{description ? description : ""}</p>
          <p className="card-text">
            <small class="text-body-secondary">
              By {author} on {new Date(date).toGMTString()}
            </small>
          </p>
          <a
            href={
              newsUrl
                ? newsUrl
                : "https://ichef.bbci.co.uk/news/1024/branded_news/f740/live/1a780fe0-6162-11ef-b970-9f202720b57a.png"
            }
            className="btn btn-sm btn-dark"
          >
            Read more
          </a>
        </div>
      </div>
    </div>
  );
};
export default NewsItem;
