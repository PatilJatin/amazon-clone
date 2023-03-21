import React from 'react'

function PaymentItems({ srNo, title, text, link }) {
  return (
    <div className="flex w-[70%] justify-between">
      <strong className='basis-1/12'>{srNo}</strong>
      <strong className='basis-3/12'>{title}</strong>
      <p className='basis-6/12 flex flex-col text-sm'>
        {text}
        <span className="text-blue-500 hover:text-red-500 hover:underline">
          {link}
        </span>
      </p>
      <p className="text-blue-500 hover:text-red-500 hover:underline basis-2/12 text-sm">Change</p>
    </div>
  );
}

export default PaymentItems
