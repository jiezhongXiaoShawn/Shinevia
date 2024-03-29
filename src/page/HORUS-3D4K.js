import BriefInfo from "../component/productDetail/briefInfo";
import DetailLeft from "../component/productDetail/detailLeft";
import DetailRight from "../component/productDetail/detailRight";
import QA from "../component/QA";
import { Box } from "@mui/system";

const part1 = [
  { key: "3D视野精确手术路径", value: "" },
  { key: "4K屏显，精细辨别，精准决策", value: "" },
  { key: "明亮无闪烁的3D影像", value: "" },
  { key: "轻型、防雾3D眼镜，视觉清晰", value: "" },
];

const part2 = [
  "4K色彩宽动态",
  "4K荧光、AI拓展、SWIG、自体荧光",
  "2T 大容量内存储功能",
  // 更多项目...
];

const part3 = [
  { key: "高通量光亮设计，稳定高亮输出", value: "" },
  { key: "独特的光路设计，真实色彩还原", value: "" },
  { key: "光源联动，智能出光", value: "" },
  { key: "开机记忆，低噪运行，界面简洁", value: "" },
];
const part4 = [
  "大流量充气，节约手术时间",
  "触摸屏显示线性流量调节技术，充气稳定",
  "全自动化高压报警，自动泄压",
  "动态实时显示气流和腹压",
  "高压低压双重模式",
  "自动加热，同步排烟",
  // 更多项目...
];
const Horus3D4K = () => {
  return (
    <Box>
      <BriefInfo
        title={"HORUS-3D 4K"}
        subTitle={"立体内窥镜摄像系统"}
        description={
          "HORUS 3D 4K 荧光一体化摄像平台为首的微创外科产品，采用先进的4K超高清技术，结合3D立体视觉，为外科医生提供了沉浸式的手术视野。荧光技术的加入，给临床专家提供更全方位的智能导航，进一步提高了手术的精准度和安全性。"
        }
        image={"/HORUS-3D4K/0.png"}
      />
      <DetailRight title="4K显示器" image="/HORUS-3D4K/1.png" data={part1} />
      <DetailLeft
        title="内窥镜摄像系统"
        image="/HORUS-3D4K/2.png"
        items={part2}
      />
      <DetailRight title="光源发生器" image="/HORUS-3D4K/3.png" data={part3} />
      <DetailLeft title="气腹机" image="/HORUS-3D4K/4.png" items={part4} />
      <QA />
    </Box>
  );
};

export default Horus3D4K;
