import React from "react";
import { AttachmentItem } from "../types";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";

export default function AttachmentPreview({
  attachments,
  onRemove,
  onClear,
}: {
  attachments: AttachmentItem[];
  onRemove: (id: string) => void;
  onClear: () => void;
}) {
  if (!attachments || attachments.length === 0) return null;

  return (
    <Box className="attachments-row">
      {attachments.map((a) => (
        <Chip
          key={a.id}
          label={a.name}
          onDelete={() => onRemove(a.id)}
          variant="outlined"
          sx={{ background: "rgba(255,255,255,0.04)" }}
        />
      ))}

      <IconButton size="small" onClick={onClear}>
        <DeleteIcon sx={{ color: "rgba(255,255,255,0.6)" }} />
      </IconButton>
    </Box>
  );
}
