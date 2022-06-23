import { ReactNode } from "react";
import { paths } from "../../../paths";

interface Item {
  title: string;
  children?: Item[];
  chip?: ReactNode;
  icon?: ReactNode;
  path?: string;
}

interface Section {
  title: string;
  items: Item[];
}

export const sidebarSectionsData: Section[] = [
  {
    title: "관리자",
    items: [
      {
        title: "최고관리자",
        path: `/${paths.dashboard.root}/${paths.dashboard.admin.super}`,
      },
      {
        title: "센터관리자",
        path: `/${paths.dashboard.root}/${paths.dashboard.admin.center}`,
      },
    ],
  },
  {
    title: "운동",
    items: [
      {
        title: "개별 운동",
        path: `/${paths.dashboard.root}/${paths.dashboard.exercise.each}`,
      },
      {
        title: "운동 클래스",
        path: `/${paths.dashboard.root}/${paths.dashboard.exercise.class}`,
      },
    ],
  },
  {
    title: "전문가",
    items: [
      {
        title: "운동전문가",
        path: `/${paths.dashboard.root}/${paths.dashboard.expert.all}`,
      },
    ],
  },
  {
    title: "회원",
    items: [
      {
        title: "일반회원",
        path: `/${paths.dashboard.root}/${paths.dashboard.member.all}`,
      },
    ],
  },
  {
    title: "메뉴 1",
    items: [],
  },
  {
    title: "메뉴 2",
    items: [],
  },
  {
    title: "메뉴 3",
    items: [],
  },
  {
    title: "메뉴 4",
    items: [],
  },
  {
    title: "메뉴 5",
    items: [],
  },
  {
    title: "메뉴 6",
    items: [],
  },
  {
    title: "메뉴 7",
    items: [],
  },
  {
    title: "메뉴 8",
    items: [],
  },
  {
    title: "메뉴 9",
    items: [],
  },
  {
    title: "메뉴 10",
    items: [],
  },
  {
    title: "메뉴 11",
    items: [],
  },
  {
    title: "메뉴 12",
    items: [],
  },
  {
    title: "메뉴 13",
    items: [],
  },
  {
    title: "메뉴 14",
    items: [],
  },
  {
    title: "메뉴 15",
    items: [],
  },
  {
    title: "메뉴 16",
    items: [],
  },
  {
    title: "메뉴 17",
    items: [],
  },
  {
    title: "메뉴 18",
    items: [],
  },
  {
    title: "메뉴 19",
    items: [],
  },
  {
    title: "메뉴 20",
    items: [],
  },
  {
    title: "메뉴 21",
    items: [],
  },
  {
    title: "메뉴 22",
    items: [],
  },
  {
    title: "메뉴 23",
    items: [],
  },
  {
    title: "메뉴 24",
    items: [],
  },
  {
    title: "메뉴 25",
    items: [],
  },
  {
    title: "메뉴 26",
    items: [],
  },
  {
    title: "메뉴 27",
    items: [],
  },
  {
    title: "메뉴 28",
    items: [],
  },
  {
    title: "메뉴 29",
    items: [],
  },
  {
    title: "메뉴 30",
    items: [],
  },
];
