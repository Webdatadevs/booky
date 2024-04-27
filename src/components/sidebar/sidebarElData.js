import OzbekLiterature from "../pages/OzbekLiterature";
import QaraqalpaqFolklore from "../pages/QaraqalpaqFolklore";
import QaraqalpaqLiterature from "../pages/QaraqalpaqLiterature";
import ShortAudio from "../pages/ShortAudio";
import WorldLiterature from "../pages/WorldLiterature";

const sidebarElementsData = [
    {
        id: 1,
        title: "Jáhán ádebiyatı",
        pathName: "/jahanadebiyati",
        componentName: WorldLiterature
    },
    {
        id: 2,
        title: "Ózbek ádebiyatı",
        pathName: "/ozbekadebiyati",
        componentName: OzbekLiterature
    },
    {
        id: 3,
        title: "Qaraqalpaq ádebiyatı",
        pathName: "/qaraqalpaqadebiyati",
        componentName: QaraqalpaqLiterature
    },
    {
        id: 4,
        title: "Qaraqalpaq folklorı",
        pathName: "/qaraqalpaqfolk",
        componentName: QaraqalpaqFolklore
    },
    {
        id: 5,
        title: "Qısqa audiolar",
        pathName: "/qisqaaudiolar",
        componentName: ShortAudio
    },
];

export default sidebarElementsData;
