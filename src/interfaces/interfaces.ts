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
  settings: ISettingsState;
}

export interface ISettingsState {
  showArchivedItems?: boolean;
  showModal?: boolean;
  toDoIdToEdit?: string | null;
}

export interface IToDo {
  id: string;
  name: string;
  category: string;
  content: string;
  created?: string;
  isArchived: boolean;
  dates?: string[];
}

export interface IToDoStat {
  category: string;
  active: number;
  archivedAmount: number;
}
