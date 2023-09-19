import plus from "../../public/assets/images/avatars/icon-plus.svg";
import minus from "../../public/assets/images/avatars/icon-minus.svg";
import deleted from "../../public/assets/images/avatars/icon-delete.svg";
import edit from "../../public/assets/images/avatars/icon-edit.svg";
import julius from "../../public/assets/images/avatars/image-juliusomo.webp"
import {
  Card,
  CardContent,
  Avatar,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import AlertDelete from "../AlertDelete/AlertDelete";
import { useEffect, useState } from "react";
import "./MyComment.css";

function MyComment({ name, time, text, position }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(text);
  const [currentPosition, setCurrentPosition] = useState(0);
  const [isDeleted, setIsDeleted] = useState(false);
  const [showDeleteAlert, setShowDeleteAlert] = useState(false);

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

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setEditedText(editedText);
    setIsEditing(false);
  };

  const handleConfirmDelete = () => {
    setIsDeleted(true);
    setShowDeleteAlert(false);
  };

  const handleCancelDelete = () => {
    setShowDeleteAlert(false);
  };

  const handleDeleteClick = () => {
    setShowDeleteAlert(true);
    if (isDeleted) {
      setIsDeleted(true);
    }
  };

  if (isDeleted === true) {
    return null;
  } else
    return (
      <>
        <Card
          className="comment-card custom-card"
          sx={{
            width: { xs: "430px", lg: "1125px" },
            borderRadius: "5px",
            marginTop: "20px",
            marginLeft: { lg: "10%" },
            borderTop: "10px solid",
            borderColor: "hsl(228, 33%, 97%)",
            overflowY: "auto",
            minHeight: "200px",
            minWidth: { lg: "800px" },
          }}
        >
          <CardContent style={{ display: "flex", alignItems: "center" }}>
            <Avatar src={julius} sx={{ marginLeft: { lg: "80px" } }} />
            <div
              style={{
                marginLeft: "15px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "bold",
                  display: "flex",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                {name}
                <Typography
                  style={{
                    border: "solid",
                    backgroundColor: "hsl(238, 40%, 52%)",
                    color: "white",
                    width: "50px",
                    marginLeft: "10px",
                    borderRadius: "5px",
                    fontFamily: "regular",
                  }}
                >
                  you
                </Typography>
              </Typography>
              <div style={{ marginLeft: "auto" }}>
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
              </div>
            </div>
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
            {isEditing ? (
              <div>
                <TextField
                  value={editedText}
                  multiline
                  rows={3}
                  type="text"
                  sx={{
                    width: { xs: "90%", lg: "70%" },
                    padding: "20px",
                    marginBottom: "0",
                  }}
                  onChange={(e) => setEditedText(e.target.value)}
                />
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
                    marginLeft: { xs: "65%", lg: "730px" },
                    marginTop: { lg: "15px" },
                    cursor: "pointer",
                  }}
                  onClick={handleSaveClick}
                >
                  Update
                </Button>
              </div>
            ) : (
              <div>{editedText}</div>
            )}
          </Typography>
          <Card
            sx={{
              width: { xs: "25%", lg: "20px" },
              height: { xs: "auto", lg: "auto" },
              padding: "10px",
              margin: "20px",
              backgroundColor: "hsl(228, 33%, 97%)",
              borderRadius: "10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: { lg: "absolute" },
              top: "50%",
              left: 0,
              transform: { lg: "translateY(-60%)" },
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
          <Typography sx={{ display: "flex" }}>
            <Typography
              className="container"
              sx={{
                marginLeft: { xs: "205px", lg: "28%", xl: "35%" },
                width: "auto",
                display: "relative",
                textAlign: "end",
                marginTop: { xs: "-60px", lg: "0px" },
              }}
            >
              <img
                src={deleted}
                style={{ height: "20px", marginRight: "20px" }}
              />
              <Typography
                sx={{
                  display: "inline",
                  fontSize: "20px",
                  color: "hsl(358, 79%, 66%)",
                  fontFamily: "medium",
                  cursor: "pointer",
                }}
                onClick={handleDeleteClick}
              >
                Delete
              </Typography>
              <img
                src={edit}
                style={{
                  height: "20px",
                  marginRight: "10px",
                  marginLeft: "20px",
                }}
              />
              <Typography
                sx={{
                  display: "inline",
                  fontSize: "20px",
                  color: "hsl(238, 40%, 52%)",
                  fontFamily: "medium",
                  cursor: "pointer",
                }}
                onClick={handleEditClick}
              >
                Edit
              </Typography>
            </Typography>
          </Typography>
        </Card>
        {showDeleteAlert && (
          <AlertDelete
            onDeleteConfirm={handleConfirmDelete}
            onCancel={handleCancelDelete}
          />
        )}
        <br></br>
      </>
    );
}

export default MyComment;
