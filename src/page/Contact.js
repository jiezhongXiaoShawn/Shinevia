import React from "react";
import {
  Dialog,
  DialogContent,
  Typography,
  IconButton,
  useTheme,
  useMediaQuery,
  Box,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

function Contact({ open, handleClose }) {
  const iconUrls = [
    { icon: "/contact/emial.png", text: "sales@shinevia.com" },
    { icon: "/contact/phone.png", text: "+86 400-1647-789" },
    {
      icon: "/contact/location.png",
      text: "浙江省杭州市经济技术开发区399号浙商创新大厦9楼",
    },
    // ...更多图标和文本
  ];
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <Dialog
      fullScreen={fullScreen}
      open={open}
      onClose={handleClose}
      sx={{
        "& .MuiDialog-paper": {
          borderRadius: "10px", // 设置圆角
          overflow: "hidden", // 防止子组件溢出
          border: "none",
          width: "80vw", // 移除边框
        },
      }}
    >
      {/* 全屏模式下的关闭按钮 */}
      {fullScreen && (
        <IconButton
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      )}

      {/* 背景和标题 */}
      <Typography
        variant="h4"
        sx={{
          fontWeight: "400",
          backgroundImage: "url(/contact/background.gif)",
          backgroundSize: "cover",
          color: "white",
          padding: theme.spacing(6), // 设置标题内的填充
          textAlign: "left",
        }}
      >
        联络方式
      </Typography>

      {/* 内容部分 */}
      <DialogContent
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center", // 内容垂直居中
          color: "black",
          padding: theme.spacing(10), // 内容的填充
          borderTop: "none", // 移除内容部分的上边框
          borderBottom: "none", // 移除内容部分的下边框
        }}
      >
        {iconUrls.map(({ icon, text }) => (
          <Box
            key={text}
            sx={{
              display: "flex",
              alignItems: "center",
              width: "100%",
              my: 2,
              "& img": {
                width: "auto",
                height: theme.spacing(5),
              },
              "& .MuiTypography-root": {
                fontSize: "clamp(1rem, 1.5vw, 1.25rem)",
              },
            }}
          >
            <Box component="img" src={icon} alt="" />
            <Typography
              variant="body1"
              sx={{ ml: 2, flexGrow: 1, textAlign: "left" }}
            >
              {text}
            </Typography>
          </Box>
        ))}
      </DialogContent>
    </Dialog>
  );
}

export default Contact;
