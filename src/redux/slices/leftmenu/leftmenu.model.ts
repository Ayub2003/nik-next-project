export interface IChildrenLeftMenu {
  id: number;
  parent_id: number;
  slug: string;
  title: string;
  sort: number | null;
}
export interface ILeftMenu {
  data: ItemNav[];
}

export interface ItemNav {
  id: number;
  parent_id: number;
  slug: string;
  title: string;
  sort: number | null;
  children?: Array<IChildrenLeftMenu>;
}
