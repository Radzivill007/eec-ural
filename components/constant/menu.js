export const MENUITEMS = [
  {
    path: "/",
    title: "Главная",
    type: "link",
    children: "",
  },

  {
    path: "/#uslugi",
    title: "Услуги",
    type: "link",
    children: [
      {
        path: "/uslugi/puskonaladochnye-raboty-proizvodstvennogo-jelektrooborudovanija",
        title: "- Пусконаладочные работы производственного электрооборудования",
        type: "link",
      },
      {
        path: "/uslugi/diagnostika-neispravnostej-ehlektrotekhnicheskih-kompleksov",
        title: "- Диагностика и устранение неисправностей электротехнических комплексов",
        type: "link",
      },
      {
        path: "/uslugi/proektirovanie-montazh-i-naladka-ustrojstv-asu-tp",
        title: "- Проектирование, монтаж и наладка устройств АСУ ТП",
        type: "link",
      },
      {
        path: "/uslugi/naladka-linij-profilirovaniya-tonkolistovogo-metalla",
        title: "- Наладка линий профилирования тонколистового металла",
        type: "link",
      },
      {
        path: "/uslugi/naladka-i-modernizaciya-ehlektricheskih-privodov",
        title: "- Наладка и модернизация электрических приводов",
        type: "link",
      },
      {
        path: "/uslugi/drugie-vidy-rabot",
        title: "- Другие виды работ",
        type: "link",
      },
    ],
  },
  {
    path: "/o-kompanii",
    title: "О компании",
    type: "link",
  },
  {
    path: "/contact",
    title: "Контакты",
    type: "link",
  },
  {
    path: "/",
    title: "Заказать",
    type: "link",
    action: "show",
  },
];
