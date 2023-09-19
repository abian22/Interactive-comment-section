import julius from "../../../public/images/avatars/image-juliusomo.png"
import { Card, Avatar, TextField, Button } from "@mui/material";
import { useState } from "react";

function MyCommentBoxReply({ onReplySubmit }) {
  const [comment, setComment] = useState("");

  function sendReply() {
    if (comment !== "") {
      onReplySubmit(comment);
      setComment("");
    }
  }

  return (
    <Card
      sx={{
        marginTop: "20px",
        width: { xs: "430px", lg: "1000px", xl: "auto" },
        marginLeft: { lg: "10%" },
      }}
    >
      <div style={{ display: "flex", flexDirection: "column" }}>
        <TextField
          multiline
          rows={3}
          type="text"
          placeholder="Add a comment..."
          sx={{
            width: { xs: "90%", lg: "60%" },
            padding: "20px",
            marginBottom: "0",
            left: { lg: "100px" },
          }}
          onChange={(e) => setComment(e.target.value)}
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
              cursor: "pointer",
              ":hover": {
                backgroundColor: "blue",
              },
            }}
            onClick={sendReply}
          >
            Reply
          </Button>
        </div>
      </div>
    </Card>
  );
}

export default MyCommentBoxReply;
