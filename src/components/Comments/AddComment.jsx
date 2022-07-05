import { Box, Container} from '@mui/material';
import React, { useContext, useState } from 'react';
import { commentsContext } from '../../contexts/commentsContext';

const AddComment = (item) => {
  // const { createComments } = useContext(commentsContext);
  const [comment, setComment] = useState("");
  const [user, setUser] = useState("");
  const [name, setName] = useState("");
  // const { addComments, checkComments } = useContext(commentsContext);
  // const [setCheckComments] = useState(checkComments(item));

  // function handleValues() {
  //   let newComments = {
  //     comment,
  //     user,
  //     name
  //   };
  //   if (!comment.trim() || !user.trim() || !name) {
  //     alert("заполните поля!");
  //     return;
  //   }
  //   createComments(newComments);
  // }
  
  return (
    <Container sx={{display:"flex", justifyContent:"center"}}>
      <Box sx={{backgroundColor:"#d3d3d3", width:"700px"}}>
        <Box sx={{dislay:"flex", justifyContent:"center"}}>
          <label style={{marginLeft:"60px", marginTop:"20px", fontWeight:"bold"}} for="validationDefaultUsername" class="form-label">Комментарий</label>
          <textarea
          value={comment}
          onChange={e => setComment(e.target.value)}
          style={{width:"500px", height:"200px", marginLeft:"60px"}} class="form-control" id="validationTextarea" placeholder="Ваш комментарий" required></textarea>
            <div style={{display:"flex", marginTop:"5px", marginLeft:"60px"}}>
              <div style={{display:"flex", flexDirection:"column"}}>
                <label for="validationDefaultUsername" class="form-label">Имя*</label>
                <input 
                value={name}
                onChange={e => setName(e.target.value)}
                type="text" class="form-control" id="validationDefault01" required />
              </div>

              <div style={{display:"flex", flexDirection:"column", marginLeft:"45px"}}>
                <label for="validationDefaultUsername" class="form-label">E-mail*</label>
                <div style={{display:"flex"}}>
                  <span class="input-group-text" id="inputGroupPrepend2">@</span>
                  <input
                  value={user}
                  onChange={e => setUser(e.target.value)}
                  type="text" class="form-control" id="validationDefaultUsername" aria-describedby="inputGroupPrepend2" required />
                </div>
              </div>
            </div>
            <button 
            // onClick={handleValues}
            style={{marginTop:"10px", fontSize:"13px", marginLeft:"60px", marginBottom:"20px"}} type="button" class="btn btn-primary">Добавить комментарий</button>
        </Box>
      </Box>

      {/* <Box>
        <div style={{display:"flex", flexDirection:"column"}}>
          <label for="validationDefaultUsername" class="form-label">Имя*</label>
          <input type="text" class="form-control" id="validationDefault01" required />
        </div>
      </Box> */}
    </Container>
  );
};

export default AddComment;