import BookItem from '../components/BookItem'

function BooksPage() {
  return (
    <div className='w-full flex flex-col items-center justify-center h-screen border-2 '>
      <h1 className='text-7xl'>Books</h1>
      <ul className='flex gap-24 '>
        <li><BookItem /></li>
        <li><BookItem /></li>
        <li><BookItem /></li>
      </ul>
    </div>
  );
}
export default BooksPage

