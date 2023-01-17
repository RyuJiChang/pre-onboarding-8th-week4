import React from "react";
import styled from "styled-components";
import { getPage } from "../apis";

function PageList({ aboutLists, setAboutLists }) {
  let pages = [];
  let maxPage = Math.ceil(Number(aboutLists.amount) / aboutLists.limit);
  const pageHandler = (e) => {
    if (e.target.textContent === "Prev" && e.target.textContent !== "1") {
      getPage(aboutLists.page - 1, aboutLists.limit).then((newPage) => {
        setAboutLists({
          ...aboutLists,
          lists: newPage,
          page: aboutLists.page - 1,
        });
      });
    } else if (
      e.target.textContent === "Next" &&
      e.target.textContent !== maxPage
    ) {
      getPage(aboutLists.page + 1, aboutLists.limit).then((newPage) => {
        setAboutLists({
          ...aboutLists,
          lists: newPage,
          page: aboutLists.page + 1,
        });
      });
    } else if (Number(e.target.textContent)) {
      getPage(Number(e.target.textContent), aboutLists.limit).then(
        (newPage) => {
          setAboutLists({
            ...aboutLists,
            lists: newPage,
            page: Number(e.target.textContent),
          });
        }
      );
    }
  };

  //now = aboutLists.page
  //dummyPagenation.pageInfo.totalPages = maxPage

  if (Number(aboutLists.page) === 1) {
    console.log(pages, "pre1");
    pages = [];
    console.log(pages, "next1");
    for (let i = 1; i <= Math.min(5, maxPage); i++) {
      pages.push(i);
    }
    if (maxPage > 5) {
      pages.push("...");
      pages.push(maxPage);
      pages.push("Next");
    } else if (maxPage > 1) {
      pages.push("Next");
    }
    console.log(pages, "last1");
  } else if (Number(aboutLists.page) <= 4) {
    pages = ["Prev"];
    for (let i = 1; i <= Math.min(5, maxPage); i++) {
      pages.push(i);
    }
    if (maxPage > 5) {
      pages.push("...");
      pages.push(maxPage);
      pages.push("Next");
    } else if (maxPage > Number(aboutLists.page)) {
      pages.push("Next");
    }
  } else if (Number(aboutLists.page) >= 5) {
    console.log(pages, "pre");
    pages = ["Prev", 1, "..."];
    console.log(pages, "next");
    for (
      let i = Number(aboutLists.page) - 2;
      i <= Math.min(Number(aboutLists.page) + 2, maxPage);
      i++
    ) {
      pages.push(i);
    }
    if (maxPage === Number(aboutLists.page)) {
    } else if (maxPage === Number(aboutLists.page) + 3) {
      let anotherPage = pages.filter(
        (el) => el !== Number(aboutLists.page) + -2
      );
      pages = [...anotherPage];
      pages.push(Number(aboutLists.page) + 3);
      pages.push("Next");
    } else if (maxPage > Number(aboutLists.page) + 3) {
      pages.push("...");
      pages.push(maxPage);
      pages.push("Next");
    } else if (maxPage > Number(aboutLists.page)) {
      pages.push("Next");
    }
  }

  // pageArray.push(<Page key="1">1</Page>);
  console.log(pages);
  return (
    <PageListStyle>
      {pages.map((el, index) => (
        <Page
          onClick={pageHandler}
          id={el}
          key={`${el}${index}`}
          active={el === aboutLists.page ? true : false}
          className={`${el === "..." ? "none" : ""}
          }`}
        >
          {el}
        </Page>
      ))}
    </PageListStyle>
  );
}

export default PageList;

const PageListStyle = styled.div`
  margin-bottom: 20px;
  text-align: center;
  .none {
    border: none;
    background-color: white;
  }
`;

const Page = styled.button`
  padding: 0.375rem 0.75rem;
  border-radius: 0.25rem;
  font-size: 1rem;
  line-height: 1.5;
  border: 1px solid lightgray;
  ${({ active }) =>
    active &&
    `
                  background: gray;
                  color: #fff;
            `}
  margin-right: 3px;
`;
