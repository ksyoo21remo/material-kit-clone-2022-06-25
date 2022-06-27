import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

export default function ChangePassword() {
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const handleEdit = (): void => {
    setIsEditing(!isEditing);
  };

  return (
    <Card
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === "dark"
            ? "neutral.900"
            : "neutral.100",
      }}
    >
      <CardContent>
        <Grid container spacing={3}>
          <Grid item md={4} xs={12}>
            <Typography variant="h6">Change password</Typography>
          </Grid>
          <Grid item md={8} sm={12} xs={12}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <TextField
                disabled={!isEditing}
                label="Password"
                type="password"
                defaultValue="Thebestpasswordever123#"
                size="small"
                sx={{
                  flexGrow: 1,
                  mr: 3,
                  ...(!isEditing && {
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderStyle: "dotted",
                    },
                  }),
                }}
              />
              <Button onClick={handleEdit}>
                {isEditing ? "Save" : "Edit"}
              </Button>
            </Box>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
