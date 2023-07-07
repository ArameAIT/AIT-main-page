import React from 'react'

function Branches() {
  return (
    <div className='flex flex-col justify-center items-center'>
        <div className='text-[30px] flex justify-center items-center mt-10'> 
            Մասնաճյուղեր
        </div>
        <div className='w-[1000px] flex justify-center items-center object-cover'>
            <div className='img'>
                <img src="https://aitschool.am/images/office_ararat.jpg" />
                <p className='text-[20px]'>Ք․ Արարատ</p>
            </div>
            <div className='img'>
                <img src="https://aitschool.am/images/office_yerevan.jpeg" />
                <p className='text-[20px]'> Ք․ Երևան</p>
            </div>
        </div>
    </div>
  )
}

export default Branches