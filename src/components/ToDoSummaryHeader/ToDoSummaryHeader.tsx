const ToDoSummaryHeader: React.FC = () => {
  return (
    <div className='flex mb-2 h-11 bg-zinc-500 rounded rounded-md items-center font-bold text-lg text-white'>
      <div className='flex w-16'></div>
      <div className='flex w-80'>Note Category</div>
      <div className='flex w-60'>Active</div>
      <div className='flex w-64'>Archived</div>
    </div>
  );
};

export default ToDoSummaryHeader;
