export interface IProps {
  children: JSX.Element | JSX.Element[];
}

export interface ITableProps {
  header: JSX.Element;
}

export interface ITableItemProps {
  data: IToDo;
}

export interface ITableSummaryItemProps {
  data: IToDoStat;
}

export interface IRootState {
  toDoList: IToDo[];
}

export interface IManageState {
  showArchivedItems: boolean;
}

export interface IToDo {
  id: string;
  name: string;
  category: string;
  categoryText?: string;
  content: string;
  created?: string;
  isArchived: boolean;
  dates?: string[];
}

export interface IToDoStat {
  category: string;
  categoryText?: string;
  active: number;
  archivedAmount: number;
}
