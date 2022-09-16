import { IToDo, IToDoStat } from '../interfaces/interfaces';

export default function calculateTodoListStats(todoList: IToDo[]): IToDoStat[] {
  const res: IToDoStat[] = [];
  const categories = Array.from(new Set<string>(todoList.map((todoItem) => todoItem.category)));
  categories.map((category) => {
    res.push({
      category: category,
      active: todoList.filter((todoItem) => todoItem.category === category && !todoItem.isArchived)
        .length,
      archivedAmount: todoList.filter(
        (todoItem) => todoItem.category === category && todoItem.isArchived,
      ).length,
    });
  });
  return res;
}
