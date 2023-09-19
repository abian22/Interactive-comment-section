import plus from "../../public/assets/images/avatars/icon-plus.svg";
import minus from "../../public/assets/images/avatars/icon-minus.svg";
import deleted from "../../public/assets/images/avatars/icon-delete.svg"
import edit from "../../public/assets/images/avatars/icon-edit.svg"
import {
  Card,
  CardContent,
  Avatar,
  Typography,
  Button,
  TextField,
} from "@mui/material";
import { useState } from "react";
import AlertDelete from "../AlertDelete/AlertDelete";
import "./MyCommentPosted.css"

function MyCommentPosted({ avatar, name, time, text, position, replyingTo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(text);
  const [editedReplyingTo, setEditedReplyingTo] = useState(replyingTo);
  const [currentPosition, setCurrentPosition] = useState(position);
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

  /*divide el contenido del textfield en dos, la primera parte es el reply, y, después
  de encontrar un espacio en blanco es el text, de forma que la primera parte
  la guardamos en replying y la segunda en text*/
  const handleTextFieldChange = (e) => {
    const textfield = e.target.value.split(" ");
    if (textfield.length > 1) {
      setEditedReplyingTo(textfield[0].substring(1));
      setEditedText(textfield.slice(1).join(" "));
    } else {
      setEditedReplyingTo(textfield[0].substring(1));
      setEditedText("");
    }
  };

  const handleSaveClick = () => {
    setEditedText(editedText);
    setEditedReplyingTo(editedReplyingTo);
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
              display: "flex",
              height: "auto",
              color: "lightgrey",
              float: "left",
              marginTop: "10px",
            }}
          ></Typography>

          <Card
            className="comment-card custom-card"
            sx={{
              width: { xs: "410px", lg: "870px", xl: "900px" },
              borderRadius: "5px",
              marginTop: "20px",
              marginLeft: { xs: "20px", lg: "40px" },
              minWidth: { lg: "870px" },
              minHeight: { lg: "200px" },
            }}
          >
            <CardContent style={{ display: "flex", alignItems: "center" }}>
              <Avatar src={avatar} sx={{ marginLeft: { lg: "80px" } }} />
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
                      textAlign: "center",
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
                marginLeft: { xs: "20px", lg: "90px" },
                color: "grey",
                fontFamily: "regular",
                padding: "10px",
              }}
            >
              {isEditing ? (
                <div>
                  <TextField
                    value={`@${editedReplyingTo} ${editedText}`}
                    multiline
                    rows={3}
                    type="text"
                    sx={{
                      width: { xs: "90%", lg: "70%" },
                      padding: "20px",
                      marginBottom: "0",
                    }}
                    onChange={handleTextFieldChange}
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
                      marginLeft: { xs: "65%", lg: "600px" },
                      marginTop: { lg: "15px" },
                      cursor: "pointer",
                      ":hover": {
                        backgroundColor: "blue",
                      },
                    }}
                    onClick={handleSaveClick}
                  >
                    Update
                  </Button>
                </div>
              ) : (
                <>
                  <span
                    style={{ color: "hsl(238, 40%, 52%)", fontFamily: "bold" }}
                  >
                    @{editedReplyingTo}{" "}
                  </span>
                  {editedText}
                </>
              )}
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
              <Typography
                className="container"
                sx={{
                  marginLeft: { xs: "5%", lg: "28%", xl: "35%" },
                  width: "auto",
                  display: "inline",
                  textAlign: "end",
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
            </div>
          </Card>
          <br></br>
        </Typography>
        {showDeleteAlert && (
          <AlertDelete
            onDeleteConfirm={handleConfirmDelete}
            onCancel={handleCancelDelete}
            style={{ zIndex: 1000 }}
          />
        )}
      </>
    );
}

export default MyCommentPosted;
