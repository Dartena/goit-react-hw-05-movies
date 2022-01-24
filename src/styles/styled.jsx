import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
// import { CgSearch } from "react-icons/cg";

const AppDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 16px;
`;

const Header = styled.header`
  padding: 20px;
  border-bottom: 3px solid red;
`;

const Nav = styled.nav``;

const NavigLink = styled(NavLink)`
  margin-right: 10px;
  font-style: inherit;
  font-size: 24px;
  text-decoration: none;
  color: darkblue;
  :hover,
  :focus {
    text-decoration: underline;
  }
  &.active {
    color: red;
  }
`;

const SearchForm = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background-color: #fff;
  border-radius: 3px;
  overflow: hidden;
`;

const SearchInput = styled.input`
  display: inline-block;
  width: 100%;
  font-style: inherit;
  font-size: 20px;
  border: 1px solid #000;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;
  :placeholder {
    font-style: inherit;
    font-size: 18px;
  }
`;

const CastPhoto = styled.img`
  width: 160px;
`;

const CastList = styled.ul`
  display: flex;
  flex-flow: row wrap;
  margin-right: -20px;
`;

const CastListItem = styled.li`
  margin-right: 20px;
`;

const MovieDetailsContainer = styled.div`
  display: flex;
  padding: 20px;
  width: 90vw;
`;

const Poster = styled.img`
  width: 360px;
  margin-right: 20px;
`;

const MovieInfo = styled.div``;

const MovieTitle = styled.h2``;

const TextP = styled.p``;

const ReviewList = styled.ul`
  width: 90vw;
`;

const Btn = styled.button`
  padding: 8px 16px;
  border-radius: 2px;
  background-color: #3f51b5;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
  margin-left: 20px;
  display: inline-block;
  color: #fff;
  border: 0;
  text-decoration: none;
  cursor: pointer;
  font-family: inherit;
  font-size: 18px;
  line-height: 24px;
  font-style: normal;
  font-weight: 500;
  min-width: 180px;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  :hover,
  :focus {
    background-color: #303f9f;
  }
`;

const SLink = styled(Link)`
  margin-left: 10px;
  font-size: 24px;
  text-decoration: none;
  :hover,
  :focus {
    text-decoration: underline;
  }
`;

export {
  AppDiv,
  Nav,
  NavigLink,
  Header,
  SearchForm,
  SearchInput,
  CastPhoto,
  CastList,
  CastListItem,
  MovieDetailsContainer,
  Poster,
  MovieInfo,
  MovieTitle,
  TextP,
  ReviewList,
  Btn,
  SLink,
  // SearchBar,
  // SearchBtn,
  // SearchIcon,
  // SearchBtnLabel,
  // GalleryList,
  // GalleryItem,
  // GalleryImg,
  // Overlay,
  // ModalDiv,
  // Error,
};

// const SearchBar = styled.header`
//   top: 0;
//   left: 0;
//   position: sticky;
//   z-index: 1100;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   min-height: 64px;
//   padding-right: 24px;
//   padding-left: 24px;
//   padding-top: 12px;
//   padding-bottom: 12px;
//   color: #fff;
//   background-color: #3f51b5;
//   box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
//     0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
// `;

// const SearchBtn = styled.button`
//   display: inline-block;
//   width: 48px;
//   height: 48px;
//   padding: 17px;
//   border: 0;
//   opacity: 0.6;
//   transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
//   cursor: pointer;
//   outline: none;
//   :hover {
//     opacity: 1;
//   }
// `;

// const SearchIcon = styled(CgSearch)`
//   font-size: inherit;
//   text-align: center;
// `;

// const SearchBtnLabel = styled.span`
//   position: absolute;
//   width: 1px;
//   height: 1px;
//   padding: 0;
//   overflow: hidden;
//   clip: rect(0, 0, 0, 0);
//   white-space: nowrap;
//   clip-path: inset(50%);
//   border: 0;
// `;

// const GalleryList = styled.ul`
//   display: grid;
//   max-width: calc(100vw - 48px);
//   grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
//   grid-gap: 16px;
//   margin-top: 0;
//   margin-bottom: 0;
//   padding: 0;
//   list-style: none;
//   margin-left: auto;
//   margin-right: auto;
// `;

// const GalleryItem = styled.li`
//   border-radius: 2px;
//   box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
//     0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
//   position: relative;
// `;

// const GalleryImg = styled.img`
//   width: 100%;
//   height: 260px;
//   object-fit: cover;
//   transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
//   :hover {
//     transform: scale(1.03);
//     cursor: zoom-in;
//   }
// `;

// const Overlay = styled.div`
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100vw;
//   height: 100vh;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   background-color: rgba(0, 0, 0, 0.8);
//   z-index: 1200;
// `;

// const ModalDiv = styled.div`
//   max-width: calc(100vw - 48px);
//   max-height: calc(100vh - 24px);
// `;

// const Error = styled.p``;
