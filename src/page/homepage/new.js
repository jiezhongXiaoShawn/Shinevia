import { Container, Typography, Box, Grid, CardMedia } from "@mui/material";
import { useState } from "react";
const GridItemComponent = ({ defaultImageUrl, hoverImageUrl, body, title }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Box
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      sx={{
        position: "relative",
        width: "100%",
        height: "35vh", // 设置一个固定的高度
        backgroundImage: isHovered
          ? `url(${hoverImageUrl})`
          : `url(${defaultImageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        marginBottom: 2,
        "&:hover .image-overlay": {
          backgroundColor: "rgba(0, 0, 0, 0.7)", // 鼠标悬停时背景变暗
          opacity: 1, // 这里是关键，需要设置为半透明
        },
        "&:hover .text-overlay": {
          opacity: 1, // 鼠标悬停时显示文字
        },
        transition: "background-color 0.5s ease", // 添加过渡效果使背景变暗更平滑
      }}
    >
      {/* 遮罩层，初始时不显示 */}
      <Box
        className="image-overlay"
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0)", // 初始不变暗
          opacity: 0, // 初始化时不显示遮罩层
          transition: "opacity 0.5s ease, background-color 0.5s ease",
        }}
      />
      {/* 文本层 */}
      <Box
        className="text-overlay"
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between", // 使body和title分布在顶部和底部
          padding: 2,
          color: "white",
          opacity: 0, // 初始化时不显示文本
          transition: "opacity 0.5s ease",
        }}
      >
        <Typography
          variant="body1"
          textAlign="left"
          width="80%"
          fontWeight={"400"}
          sx={{ fontSize: "clamp(0.75rem, 1.25vw + 0.5rem, 1rem)" }}
        >
          {body}
        </Typography>
        <Typography
          variant="h5"
          textAlign="left"
          sx={{
            fontWeight: "700",
            mt: "auto",
            fontSize: "clamp(1.2rem, 2.7vw + 0.5rem, 1.5rem)",
          }}
        >
          {title}
        </Typography>
      </Box>
    </Box>
  );
};

const New = () => {
  return (
    <Box
      sx={{
        backgroundImage: "url(/homepage/new.png)",
        backgroundSize: "cover",
        height: { xs: "240vh", md: "130vh" },
      }}
    >
      <Container
        sx={{ display: "flex", flexDirection: "column", color: "#FFF" }}
      >
        <Typography
          variant="h3"
          textAlign={"left"}
          fontWeight={"600"}
          marginTop={"69px"}
          fontSize={"clamp(2rem, 5vw, 3rem)"}
        >
          企业动态
        </Typography>
        <Typography
          variant="h6"
          textAlign={"left"}
          width={"50%"}
          marginTop={"15px"}
          fontSize={"clamp(0.8rem, 2.3vw, 1.1rem)"}
        >
          我们致力于为全人类的健康事业贡献力量，一国产品牌的担当，微医疗健康事业注入智慧与活力。
        </Typography>

        <Box marginTop={10}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <GridItemComponent
                title="显微智能荣获第七届五星奖"
                body="显微智能内窥镜荣获2022年度五星奖十佳产品提名奖, 显微智能4K内窥镜荧光摄像系统欧盟CE认证通过。"
                defaultImageUrl="/homepage/1.png"
                hoverImageUrl="/homepage/1-hover.png"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <GridItemComponent
                title="上海运营管理中心隆重开业"
                body="上海管理运营中心将满载着各位领导、各位股东、各位朋友的厚爱与期待，同时也满载着显微智能全体员工的理想和信念正式起航。"
                defaultImageUrl="/homepage/2.png"
                hoverImageUrl="/homepage/2-hover.png"
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <GridItemComponent
                title="显微智能总经理杨聪先生被评为“山东省泰山产业领军人才创业领军人才”"
                body="杨聪先生带领的团队始终把“技术创新”放在首位，原研首创的皮摩尔级超高灵敏度图像探测器全球领先，为现代精准外科的发展献上了重要实践和理论支持。"
                defaultImageUrl="/homepage/3.png"
                hoverImageUrl="/homepage/3-hover.png"
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <GridItemComponent
                title="显微智能荣获2023中国内镜十大品牌"
                body="内镜十大品牌”荣誉的获得，充分展现了显微智能多年来在自主创新方面的卓越成就。我们深知技术创新源自人才强盛，多年来显微智能汇聚了一批业界顶尖的人才团队，是公司发展的核心竞争力所在。"
                defaultImageUrl="/homepage/4.png"
                hoverImageUrl="/homepage/4-hover.png"
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <GridItemComponent
                title="合肥工业大学战略合作仪式"
                body="显微智能与合肥工业大学管理学院成立“微创机器人与智能感知”联合实验室，共同打造以科技为中心的智能微创外科创新解决方案。"
                defaultImageUrl="/homepage/5.png"
                hoverImageUrl="/homepage/5-hover.png"
              />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};
export default New;
