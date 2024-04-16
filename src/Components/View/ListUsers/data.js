import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import EditIcon from "@mui/icons-material/Edit";

export const dataHead = ["شناسه", "نام و نام خانوادگی", "ایمیل", "عملیات"];
export const dataBody = (data, onDelete, onEdit) =>
  data?.map((e) => ({
    id: e?.id,
    data: [
      e?.id,
      {
        type: "avatar",
        src: e?.avatar,
        text: e?.first_name + " " + e?.last_name,
      },
      e?.email,
      {
        type: "actions",
        buttons: [
          {
            icon: <VisibilityOutlinedIcon />,
            href: `/${e?.id}`,
          },
          {
            icon: <EditIcon />,
            onClick: () => onEdit(e),
          },
          {
            icon: <DeleteOutlineOutlinedIcon />,
            color: "error",
            onClick: () => onDelete(e?.id),
          },
        ],
      },
    ],
  }));
