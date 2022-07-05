// import React, { useReducer } from "react";

// export const commentsContext = React.createContext();

// const INIT_STATE = {
//   comments: null,
//   count: 0,
// };

// function reducer(state = INIT_STATE, action) {
//   switch (action.type) {
//     case "GET_COMMENTS":
//       return {
//         ...state,
//         cart: action.payload,
//         count: action.payload.products.length,
//       };
//     default:
//       return state;
//   }
// }

// const CommentsContextProvider = ({ children }) => {
//   const [state] = useReducer(reducer, INIT_STATE);

//   function addComments (comment) {
//     let comments = JSON.parse(localStorage.getItem("comments"));
//     if (!comments) {
//         comments = {
//             comment: [],
//             user: [],
//       };
//     }
//     let newComments = {
//       item: comment,
//       user: comment.user,
//     };
//     let isProductInCart = comments.comments.some(
//       item => item.item.id === comments.id
//     );
//     if (isProductInCart) {
//         comments.comments = comments.comments.filter(item => item.item.id !== comments.id);
//     } else {
//         comments.comments.push(newComments);
//     }
//     localStorage.setItem("cart", JSON.stringify(comments));
//     getComments();
//   }

//   async function createComments(newComments) {
//     await localStorage.setItem(JSON.stringify("newComments"));
//   }

//   function checkComments(comment) {
//     let comments = JSON.parse(localStorage.getItem("comments"));
//     if (!comments) {
//         comments = {
//             comment: [],
//             user: [],
//       };
//     }
//     let isProductInCart = comments.comments.some(
//       item => item.item.id === comments.id
//     );
//     return isProductInCart;
//   }
//   function getComments() {
//     let comments = JSON.parse(localStorage.getItem("comments"));
//     if (!comments) {
//       comments = {
//         comment: [],
//         user: [],
//       };
//     }}



  
//   function deleteComments(id) {
//     let comments = JSON.parse(localStorage.getItem("comments"));
//     comments.comments = comments.comments.filter(item => item.item.id !== id);
//     localStorage.setItem("comments", JSON.stringify(comments));
//     getComments();
//   }

//   return (
//     <CommentsContextProvider
//       value={{
//         comments: state.comments,
//         createComments,
//         addComments,
//         checkComments,
//         getComments,
//         deleteComments,
//       }}>
//       {children}
//     </CommentsContextProvider>
//   );
//     };
// export default CommentsContextProvider;
