export default function capitalize(category: string): string {
  let categoryText = '';
  switch (category) {
    case 'idea':
      categoryText = 'Idea';
      break;
    case 'thought':
      categoryText = 'Random thought';
      break;
    case 'task':
      categoryText = 'Task';
      break;
  }
  return categoryText;
}
