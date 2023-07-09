import React, { useContext } from 'react'
import LangContext from '../Context/LangContext'

function Branches() {
    const { lang } = useContext(LangContext)
    return (
        <div className='flex flex-col justify-center items-center'>
            <div className='text-[30px] text-[#0e243c] flex justify-center items-center mt-10'>
                {
                    lang == "English" ? (
                        <>
                            Branches
                        </>
                    ) : ""
                }
                {
                    lang == "Հայերեն" ? (
                        <>
                            Մասնաճյուղեր
                        </>
                    ) : ""
                }
                {
                    lang == "Русский" ? (
                        <>
                            Ветви
                        </>
                    ) : ""
                }

            </div>
            <div className='w-[1000px] flex justify-center items-center object-cover'>
                <div className='img'>
                    <img src="https://aitschool.am/images/office_ararat.jpg" />
                    <p className='text-[20px] text-[#0e243c]'>
                        {
                            lang == "English" ? (
                                <>
                                    City Ararat
                                </>
                            ) : ""
                        }
                        {
                            lang == "Հայերեն" ? (
                                <>
                                    Ք․ Արարատ
                                </>
                            ) : ""
                        }
                        {
                            lang == "Русский" ? (
                                <>
                                    Город Арарат
                                </>
                            ) : ""
                        }
                    </p>
                </div>
                <div className='img'>
                    <img src="https://aitschool.am/images/office_yerevan.jpeg" />
                    <p className='text-[20px] text-[#0e243c]'>
                        {
                            lang == "English" ? (
                                <>
                                    City Yerevan
                                </>
                            ) : ""
                        }
                        {
                            lang == "Հայերեն" ? (
                                <>
                                    Ք․ Երևան
                                </>
                            ) : ""
                        }
                        {
                            lang == "Русский" ? (
                                <>
                                    Город Ереван
                                </>
                            ) : ""
                        }
                        
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Branches