import { Card, Button } from "@mui/material";
import "./AlertDelete.css";

function AlertDelete({ onDeleteConfirm, onCancel }) {
  return (
    <div className="centered-container">
      <Card sx={{ width: "400px", height: "270px" }}>
        <h2
          style={{
            textAlign: "left",
            fontFamily: "bold",
            padding: "10px",
            marginLeft: "10px",
          }}
        >
          Delete comment
        </h2>
        <p
          style={{
            textAlign: "left",
            marginLeft: "20px",
            fontFamily: "regular",
            color: "grey",
            fontSize: "16px",
            lineHeight: "23px",
            marginBottom: "30px",
            marginRight: "10px",
          }}
        >
          Are you sure you want to delete this comment? This will remove the
          comment and can't be undone
        </p>
        <div
          className="buttonContainer"
          style={{ display: "flex", justifyContent: "space-evenly" }}
        >
          <Button
            sx={{
              border: "solid",
              borderRadius: "10px",
              backgroundColor: "grey",
              color: "white",
              width: "45%",
              fontFamily: "medium",
              height: "55px",
            }}
            onClick={onCancel}
          >
            NO, CANCEL
          </Button>
          <Button
            sx={{
              border: "solid",
              borderRadius: "10px",
              backgroundColor: "hsl(358, 79%, 66%)",
              color: "white",
              width: "45%",
              fontFamily: "medium",
            }}
            onClick={onDeleteConfirm}
          >
            YES. DELETE
          </Button>
        </div>
      </Card>
    </div>
  );
}

export default AlertDelete;
