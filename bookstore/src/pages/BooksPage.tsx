import BookItem from '../components/BookItem'

function BooksPage() {
  return (
    <div className='w-full flex flex-col items-center justify-center h-screen border-2 '>
      <h1>Books</h1>
      <ul className='flex'>
        <li><BookItem /></li>
        <li><BookItem /></li>
        <li><BookItem /></li>
      </ul>
    </div>
  );
}
export default BooksPage

