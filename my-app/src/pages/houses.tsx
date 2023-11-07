import Chart from '../components/chart';

export default function Houses() {
  return (
    <div
      className='bg-white container mx-auto mt-5 p-4 rounded'
      style={{ maxWidth: '600px', maxHeight: '700px' }}
    >
      <h1 className='text-center py-3'>Houses</h1>
      <Chart />
    </div>
  );
}
