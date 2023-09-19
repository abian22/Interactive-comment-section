import plus from "../../public/assets/images/avatars/icon-plus.svg"
import minus from "../../public/assets/images/avatars/icon-minus.svg"
import reply from "../../public/assets/images/avatars/icon-reply.svg"
import julius from "../../public/image-juliusomo.webp"
import { Card, CardContent, Avatar, Typography } from "@mui/material";
import { useState } from "react";
import MyCommentBoxReply from "../MyCommentBoxReply/MyCommentBoxReply";
import MyCommentPosted from "../MyCommentPosted/MyCommentPosted";

import "./Comment.css";

function Comment({ avatar, name, time, text, position }) {
  const [replyClicked, setReplyClicked] = useState(false);
  const [comments, setComments] = useState([]);
  const [currentPosition, setCurrentPosition] = useState(position);

  const handleUpvoteClick = () => {
    if (currentPosition < position + 1) {
      setCurrentPosition(currentPosition + 1);
    }
  };

  const handleDownvoteClick = () => {
    if (currentPosition > position - 1) {
      setCurrentPosition(currentPosition - 1);
    }
  };

  const handleReplyClick = () => {
    setReplyClicked(!replyClicked);
  };

  const addComment = (commentText) => {
    setComments([...comments, commentText]);
  };

  return (
    <>
      <Card
        className="comment-card"
        sx={{
          width: { xs: "430px", lg: "1050px", xl: "1120px" },
          borderRadius: "5px",
          marginTop: "20px",
          marginLeft: { lg: "10%" },
          borderTop: "10px solid",
          borderColor: "hsl(228, 33%, 97%)",
        }}
      >
        <CardContent
          sx={{
            display: "flex",
            alignItems: "center",
            marginLeft: { lg: "120px" },
          }}
        >
          <Avatar src={avatar} />
          <Typography sx={{ marginLeft: "15px", fontFamily: "bold" }}>
            {name}
            <Typography
              sx={{
                display: "inline",
                marginLeft: "20px",
                color: "grey",
                fontSize: "19px",
                fontFamily: "regular",
              }}
            >
              {time}
            </Typography>
          </Typography>
        </CardContent>
        <Typography
          sx={{
            textAlign: "left",
            marginLeft: { xs: "20px", lg: "130px" },
            color: "grey",
            fontFamily: "regular",
            padding: "10px",
          }}
        >
          {text}
        </Typography>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginLeft: "20px",
          }}
        >
          <Card
            className="upvoteContainer"
            sx={{
              width: { xs: "25%", lg: "20px" },
              height: { xs: "10%", lg: "130px" },
              padding: "10px",
              margin: "20px",
              backgroundColor: "hsl(228, 33%, 97%)",
              borderRadius: "10px",
              display: "flex",
              justifyContent: "center",
              marginTop: { lg: "-120px" },
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <Avatar
                src={plus}
                className="plusImg"
                sx={{
                  height: "15px",
                  width: "15px",
                  marginBottom: { lg: "100px" },
                  cursor: "pointer",
                }}
                onClick={handleUpvoteClick}
              />
              <Typography
                sx={{
                  marginLeft: { xs: "20px", lg: "-13px" },
                  textAlign: { lg: "center" },
                  color: "hsl(238, 40%, 52%)",
                  fontFamily: "medium",
                  fontSize: "22px",
                }}
              >
                {currentPosition}
              </Typography>
              <Avatar
                className="minusImg"
                src={minus}
                sx={{
                  borderRadius: "0",
                  height: "5px",
                  width: "20px",
                  marginLeft: { xs: "20px", lg: "-20px" },
                  marginTop: { lg: "100px" },
                  cursor: "pointer",
                }}
                onClick={handleDownvoteClick}
              />
            </div>
          </Card>
          <div
            style={{
              marginLeft: "25%",
              width: "30%",
              display: "inline",
            }}
          >
            <img className="replyImg" src={reply} style={{ height: "20px" }} />
            <Typography
              className="replyText"
              sx={{
                display: "inline",
                marginLeft: "10px",
                fontSize: "22px",
                color: "hsl(238, 40%, 52%)",
                fontFamily: "medium",
                cursor: "pointer",
              }}
              onClick={handleReplyClick}
            >
              Reply
            </Typography>
          </div>
        </div>
      </Card>
      {replyClicked && (
        <MyCommentBoxReply
          onReplySubmit={(commentText) => {
            addComment(commentText);
            setReplyClicked(false);
          }}
        />
      )}
      {comments.map((comment, index) => (
        <div key={index}>
          {console.log(comment)}
          <MyCommentPosted
            className="custom-card"
            avatar={julius}
            name="juliusomo"
            time="now"
            text={comment}
            position="0"
            id={index}
            replyingTo={name}
          />
        </div>
      ))}
    </>
  );
}

export default Comment;
