interface IChildrenLeftMenu {
  id: number;
  parent_id: number;
  slug: string;
  title: string;
  sort: number | null;
}
export interface ILeftMenu {
  data: Array<{
    id: number;
    parent_id: number;
    slug: string;
    title: string;
    sort: number | null;
    children?: Array<IChildrenLeftMenu>;
  }>;
}
