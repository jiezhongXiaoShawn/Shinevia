import BriefInfo from "../component/productDetail/briefInfo";
import DetailLeft from "../component/productDetail/detailLeft";
import DetailRight from "../component/productDetail/detailRight";
import QA from "../component/QA";
import { Box } from "@mui/system";
const part1 = [
  { key: "显示器尺寸", value: "≥31.5英寸" },
  { key: "解像度", value: ">3840x2160" },
  { key: "显示色", value: "3500-5000K" },
  { key: "色彩指数", value: "10.7 亿色" },
  { key: "对比度", value: "1300:1" },
];
const part2 = [
  "预设十种手术模式",
  "去摩尔纹，除雾，电子染色等智能高级算法",
  "内置暗场增强模式",
  "支持双镜联合手术",
  "光源联动功能",
  // 更多项目...
];
const part3 = [
  { key: "灯泡寿命", value: "≥60000小时" },
  { key: "白光显示色数", value: "≥90" },
  { key: "光通量", value: "≥2000Im" },
  { key: "色温区间", value: "3000K-7000K" },
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
const Argos4KMedical = () => {
  return (
    <Box>
      <BriefInfo
        title={"ARGOS 4K MEDICAL"}
        subTitle={"内窥镜摄像系统"}
        description={
          "术中结合ICG荧光显影剂,实时示踪淋巴系统、观察组织血流灌注和精确定位肿瘤边界。4K超高清荧光导航内窥镜系统,术中可随时切换白光模式、绿色荧光模式、黑白荧光模式和梯度荧光模式四种模式，方便医生操作。特殊光内窥镜为微创外科医生带来全新手术体验。"
        }
        image={"/ARGOS-4KMEDICAL/1.png"}
      />
      <DetailRight
        title="4K显示器"
        image="/ARGOS-4KMEDICAL/2.png"
        data={part1}
      />
      <DetailLeft
        title="内窥镜摄像系统"
        image="/ARGOS-4KMEDICAL/3.png"
        items={part2}
      />
      <DetailRight
        title="光源发生器"
        image="/ARGOS-4KMEDICAL/3.png"
        data={part3}
      />
      <DetailLeft title="气腹机" image="/ARGOS-4KMEDICAL/4.png" items={part4} />
      <QA />
    </Box>
  );
};

export default Argos4KMedical;
