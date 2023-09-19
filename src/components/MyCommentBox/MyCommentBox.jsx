import julius from "../../../public/images/avatars/image-juliusomo.png"
import { Card, Avatar, TextField, Button } from "@mui/material";
import { useState } from "react";
import MyComment from "../MyComment/MyComment";

function MyCommentBox() {
  const [commentText, setCommentText] = useState("");
  const [comments, setComments] = useState([]);

  const addComment = (commentText) => {
    if (commentText) {
      setComments([...comments, { text: commentText }]);
      setCommentText("");
    }
  };

  return (
    <>
      {comments.map((comment, index) => (
        <MyComment
          key={index}
          avatar={julius}
          name="juliusomo"
          time={"now"}
          text={comment.text}
          position="0"
          customWidth="customWidth"
        />
      ))}
      <Card
        sx={{
          marginTop: "20px",
          width: { xs: "430px", lg: "1130px" },
          marginLeft: { lg: "10%" },
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <TextField
            multiline
            rows={3}
            type="text"
            placeholder="Add a comment..."
            value={commentText}
            sx={{
              width: { xs: "90%", lg: "60%" },
              padding: "20px",
              marginBottom: "0",
              left: { lg: "100px" },
            }}
            onChange={(e) => setCommentText(e.target.value)}
          />
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "10px",
              marginLeft: "10px",
            }}
          >
            <Avatar src={julius} sx={{ bottom: { lg: "140px" } }} />
            <Button
              sx={{
                border: "solid",
                width: "120px",
                height: "60px",
                borderRadius: "10px",
                color: "white",
                fontFamily: "medium",
                backgroundColor: "hsl(238, 40%, 52%)",
                fontSize: "17px",
                padding: "5px",
                bottom: { lg: "140px" },
                marginRight: { lg: "10%" },
                ":hover": {
                  backgroundColor: "blue",
                },
              }}
              onClick={() => {
                if (commentText) {
                  addComment(commentText);
                  setCommentText("");
                }
              }}
            >
              Send
            </Button>
          </div>
        </div>
      </Card>
    </>
  );
}

export default MyCommentBox;
