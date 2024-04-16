import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Checkbox from "@mui/material/Checkbox";
import {
  Avatar,
  AvatarGroup,
  Button,
  IconButton,
  TablePagination,
} from "@mui/material";
import Link from "next/link";
import Image from "next/image";

function EnhancedTableHead(props) {
  const { onSelectAllClick, numSelected, rowCount, dataHead, selected } = props;

  return (
    <TableHead sx={{ height: "50px" }}>
      <TableRow
        sx={{
          th: {
            pt: "27px",
            pb: 1,
            backgroundColor: "transparent",
            ".checkbox": {
              px: 0,
            },
          },
        }}
      >
        {selected && (
          <TableCell padding="checkbox" align="left" className="checkbox">
            <Checkbox
              color="primary"
              indeterminate={numSelected > 0 && numSelected < rowCount}
              checked={rowCount > 0 && numSelected === rowCount}
              onChange={onSelectAllClick}
              sx={{
                ".MuiSvgIcon-root": {
                  color: "#9E9E9E",
                },
              }}
            />
          </TableCell>
        )}
        {dataHead?.map((headCell, i) => (
          <TableCell
            key={i}
            align={"left"}
            padding={"normal"}
            sx={{
              color: "#262626",
              pb: 3,
              fontSize: "13px",
              fontWeight: "bold !important",
            }}
          >
            {headCell}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  rowCount: PropTypes.number.isRequired,
};

export default function MyTable({
  dataHead,
  dataBody,
  setSelected = false,
  selected = false,
}) {
  const handleSelectAllClick = (event) => {
    if (selected) {
      if (event.target.checked) {
        const newSelected = dataBody?.map((data) => data.id);
        setSelected(newSelected);
        return;
      }
      setSelected([]);
    }
  };

  const handleClick = (id) => {
    if (selected) {
      const index = selected.findIndex((x) => x === id);
      const copySelects = [...selected];

      if (index === -1) {
        copySelects.push(id);
        setSelected(copySelects);
      } else {
        const filterSelects = copySelects.filter((x) => x !== id);
        setSelected(filterSelects);
      }
    }
  };

  const isSelected = (id) => {
    if (selected) {
      let index = selected.findIndex((x) => x === id);
      if (index === -1) {
        return false;
      } else {
        return true;
      }
    }
  };

  return (
    <Box
      sx={{
        width: "100%",
        ".Mui-selected": {
          backgroundColor: "rgba(234, 234, 234, 1)",
          "&:hover": {
            backgroundColor: "rgba(234, 234, 234, 1)",
          },
        },
      }}
    >
      <TableContainer className="container-table light-scroll" sx={{ mb: 0.5 }}>
        <Table
          stickyHeader
          aria-label="sticky table"
          sx={{
            minWidth: 600,
            "td,tr": {
              fontSize: "12.67px",
              color: "#262626",
              fontWeight: 500,
            },
            th: {
              fontSize: "12.67px",
              color: "#262626",
              fontWeight: 500,
              py: 0,
            },
            ".checkbox": {
              px: 0,
            },
          }}
          size={"medium"}
        >
          <EnhancedTableHead
            numSelected={selected.length}
            onSelectAllClick={handleSelectAllClick}
            rowCount={dataBody?.length}
            dataHead={dataHead}
            selected={selected}
          />
          <TableBody
            sx={{
              td: {
                pt: 2,
                pb: 1,
              },
            }}
          >
            {dataBody?.length !== 0 &&
              dataBody?.map((row, index) => {
                const isItemSelected = isSelected(row?.id);
                const labelId = `enhanced-table-checkbox-${index}`;

                return (
                  <TableRow
                    hover
                    role={selected && "checkbox"}
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    key={row.id}
                    selected={isItemSelected}
                    sx={{
                      cursor: "pointer",
                      td: { borderBottom: "0.5px solid #d4d4d48c" },
                    }}
                  >
                    {selected && (
                      <TableCell
                        padding="checkbox"
                        sx={{ p: "0px" }}
                        align="left"
                        className="checkbox"
                      >
                        <Checkbox
                          color="primary"
                          checked={isItemSelected}
                          onClick={() => handleClick(row?.id)}
                          inputProps={{
                            "aria-labelledby": labelId,
                          }}
                          sx={{
                            ".MuiSvgIcon-root": {
                              color: "#9E9E9E",
                            },
                          }}
                        />
                      </TableCell>
                    )}
                    {row?.data?.map((e, i) => (
                      <TableCell
                        align="left"
                        key={i}
                        sx={{ maxWidth: "150px", overflow: "auto" }}
                        className="light-scroll"
                      >
                        {!e?.type && e}
                        {e?.type === "avatar" && (
                          <Box className="center">
                            <Avatar
                              src={e?.src}
                              sx={{ width: "24px", height: "24px" }}
                            />
                            <Typography
                              component={"h6"}
                              sx={{
                                fontSize: "12.67px",
                                color: "#212121",
                                fontWeight: "bold",
                                ml: 1,
                              }}
                            >
                              {e?.text}
                            </Typography>
                          </Box>
                        )}

                        {e?.type === "actions" && (
                          <Box>
                            {e?.buttons?.map((e, i) =>
                              e?.href ? (
                                <Link href={e?.href} key={i}>
                                  <IconButton {...e}>{e?.icon}</IconButton>
                                </Link>
                              ) : (
                                <IconButton key={i} {...e}>
                                  {e?.icon}
                                </IconButton>
                              )
                            )}
                          </Box>
                        )}
                        {e?.type === "jsx" && e.jsx}
                      </TableCell>
                    ))}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      {dataBody?.length === 0 && (
        <Box
          className="full-center column"
          sx={{
            img: {
              maxWidth: "364px !important",
            },
          }}
        >
          <Image
            src="/images/data-empty.svg"
            width={50}
            height={56}
            layout="responsive"
            alt="دیتایی وجوود ندارد"
          />

          <Typography
            component={"h6"}
            sx={{
              pb: 2,
              pt: 3,
              textAlign: "center",
            }}
          >
            موردی پیدا نشد!
          </Typography>
        </Box>
      )}
    </Box>
  );
}
