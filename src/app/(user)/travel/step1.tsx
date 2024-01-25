import * as React from 'react';
import { useDataContext } from './DataContext';
import './css.css';
import { Typography } from '@mui/joy';
import GppGoodIcon from '@mui/icons-material/GppGood';

const Step1 = () => {

  const calculateTotalPrice = () => {
    const pricePerSeat = 100;
    const totalPrice = selectedSeats.length * pricePerSeat;
    return totalPrice;
  };
  const { data, updateData } = useDataContext();
  const handle1Change = (e: { target: { value: any; }; }) => {
    updateData({ step1Data: e.target.value });
  };
  const [selectedSeats, setSelectedSeats] = React.useState<number[]>([]);
  const toggleSeat = (seatNumber: number) => {
    setSelectedSeats((prevSeats) =>
      prevSeats.includes(seatNumber)
        ? prevSeats.filter((seat) => seat !== seatNumber)
        : [...prevSeats, seatNumber]
    );
  };
  return (

    <div >

      <div value={data.step2Data || ''}
        onChange={handle1Change} 
        className="seat-selection">
        {Array.from({ length: 16 }, (_, index) => (
          <div
            key={index + 1}
            className={`seat ${selectedSeats.includes(index + 1) ? 'selected' : ''}`}
            onClick={() => toggleSeat(index + 1)}
          >
            {index + 1}
          </div>
        ))}
      </div>
      <p >
        Tổng giá: {calculateTotalPrice()}
      </p>
    </div>
  )

}
export default Step1;