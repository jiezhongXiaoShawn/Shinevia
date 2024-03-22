import { Box, Divider, Typography } from "@mui/material";

const Ending = () => {
  return (
    <Box
      sx={{
        display: "flex", // 设置为flex布局
        flexDirection: "column", // 子元素垂直排列
        alignItems: "center", // 水平居中对齐子元素
        justifyContent: "center", // 垂直居中对齐子元素
        textAlign: "center",
        padding: "59px", // 文字居中
      }}
    >
      <Divider
        sx={{
          width: "5%",
          bgcolor: "black", // 设置分隔线颜色
          my: 2, // margin top & bottom
        }}
      />
      <Typography
        variant="body1"
        sx={{
          width: "40%",
          color: "black",
          fontWeight: "500",
          fontFamily: "Microsoft YaHei, Roboto",
          textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
          letterSpacing: "1.4px",
        }}
      >
        显微智能秉承“成为特殊光技术领导者，持续为医疗工作者提供创新的诊疗工具，护佑人类健康”的使命，坚持“专业、专注、创新、利他”的经营理念,力争成为中国医疗行业的优秀民族品牌。
      </Typography>
    </Box>
  );
};
export default Ending;
