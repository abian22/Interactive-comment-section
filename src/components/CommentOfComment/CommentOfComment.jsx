import plus from "../../images/icon-plus.svg";
import minus from "../../images/icon-minus.svg"
import reply from "../../images/icon-reply.svg"
import julius from "../../images/avatars/image-juliusomo.webp"
import { useState } from "react";
import MyCommentBoxReply from "../MyCommentBoxReply/MyCommentBoxReply";
import { Card, CardContent, Avatar, Typography } from "@mui/material";
import MyCommentOfComment from "../MyCommentOfComment/MyCommentOfComment";
import "./CommentOfComment.css";

function CommentOfComment({ avatar, name, time, text, position, replyingTo }) {
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
      <br></br>
      <Typography
        sx={{
          borderLeft: "2px solid",
          height: "auto",
          color: "lightgrey",
          float: "left",
          marginLeft: { lg: "313px" },
        }}
      >
        <Typography
          sx={{
            borderLeft: "2px solid",
            display: "flex",
            height: "auto",
            color: "lightgrey",
            float: "left",
            marginTop: "10px",
          }}
        ></Typography>
        <Card
          className="comment-card"
          sx={{
            width: { xs: "410px", lg: "840px", xl: "885px" },
            borderRadius: "5px",
            marginLeft: { xs: "20px", lg: "40px" },
            marginTop: "20px",
          }}
        >
          <CardContent style={{ display: "flex", alignItems: "center" }}>
            <Avatar src={avatar} sx={{ marginLeft: { lg: "110px" } }} />
            <Typography sx={{ marginLeft: { xs: "15px" }, fontFamily: "bold" }}>
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
              marginLeft: { xs: "20px", lg: "120px" },
              color: "grey",
              fontFamily: "regular",
              padding: "10px",
            }}
          >
            <>
              <span style={{ color: "hsl(238, 40%, 52%)", fontFamily: "bold" }}>
                @{replyingTo}
              </span>{" "}
              {text}
            </>
          </Typography>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginLeft: "20px",
            }}
          >
            <Card
              sx={{
                width: { xs: "25%", lg: "20px" },
                height: { xs: "10%", lg: "130px" },
                padding: "10px",
                margin: "20px",
                backgroundColor: "hsl(228, 33%, 97%)",
                borderRadius: "10px",
                display: "flex",
                marginTop: { lg: "-130px" },
                position: "relative",
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
                    marginLeft: { xs: "20px", lg: "-16px" },
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
                textAlign: "end",
              }}
            >
              <img
                className="replyImg"
                src={reply}
                style={{ height: "20px" }}
              />
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
            onReplySubmit={(commentOfCommentText) => {
              addComment(commentOfCommentText);
              setReplyClicked(false);
            }}
          />
        )}
        {comments.map((comment, index) => (
          <MyCommentOfComment
            key={index}
            avatar={julius}
            name="juliusomo"
            time="now"
            text={comment}
            position="0"
            replyingTo={name}
            sx={{ maxWidth: "80%" }}
          />
        ))}
      </Typography>
    </>
  );
}

export default CommentOfComment;
