import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import Comment from "./components/Comment/Comment"
import CommentOfComment from "./components/CommentOfComment/CommentOfComment"
import MyCommentBox from "./components/MyCommentBox/MyCommentBox"
import jsonData from "../data.json"
import MyCommentPosted from "./components/MyCommentPosted/MyCommentPosted";

function App() {
  const { currentUser, comments } = jsonData;


  return (
    <div className="app-container">
      <Grid container spacing={1} sx={{ justifyContent: "center" }}>
        <Grid item xs={9} md={7} lg={12} xl={8} >
          {comments.map((comment) => (
            <div key={comment.id}>
              <Comment
                key={comment.id}
                avatar={comment.user.image.png}
                name={comment.user.username}
                time={comment.createdAt}
                text={comment.content}
                position={comment.score}
              />
              {comment.replies.map((reply) => {
                if (reply.id === 3) {
                  return (
                    <CommentOfComment
                      key={reply.id}
                      avatar={reply.user.image.png}
                      name={reply.user.username}
                      time={reply.createdAt}
                      text={reply.content}
                      position={reply.score}
                      replyingTo={reply.replyingTo}
                    />
                  );
                } else
                
                  return (
                    <MyCommentPosted
                      key={reply.id}
                      avatar={reply.user.image.png}
                      name={reply.user.username}
                      time={reply.createdAt}
                      text={reply.content}
                      position={reply.score}
                      id={reply.id}
                      replyingTo={reply.replyingTo}
                      />
                    );
                  })}
            </div>
          ))}
  
        </Grid>
        <Grid item xs={8} md={7} lg={12} xl={8}>
          <MyCommentBox />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
