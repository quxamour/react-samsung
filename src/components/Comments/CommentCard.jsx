// import { Avatar, Button } from '@mui/material';
// import React, { useContext} from 'react';
// import { commentsContext } from '../../contexts/commentsContext';
// import DeleteIcon from "@mui/icons-material/Delete";
// import { authContext } from '../../contexts/authContext';


// const CommentCard = (item) => {
//     const { isAdmin } = useContext(authContext);
//     const { deleteComments } = useContext(commentsContext);

//     return (
//         <div>
//             <Avatar src="/broken-image.jpg" />
//                 <div>
//                     <label for="validationDefaultUsername" class="form-label">{item.user}</label>
//                     <input type="text" class="form-control" id="validationDefault01" required>{item.comment}</input>
//                 </div>
//                 {isAdmin ? (
//                 <>
//                 <Button size="small" onClick={() => deleteComments(item.id)}>
//                 <DeleteIcon />
//                 </Button>
//                 </>
//             ) : null}
//         </div>
//     );
// };

// export default CommentCard;