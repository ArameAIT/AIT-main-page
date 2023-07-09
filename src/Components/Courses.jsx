import React, { useContext } from 'react'
import LangContext from '../Context/LangContext'

function Courses() {
    const { lang } = useContext(LangContext)

    return (
        <div className='flex flex-col'>
            <div className='w-full flex items-center justify-between'>
                <div className='ml-[150px] flex flex-col  '>
                    <p className='p-teg'>
                        {
                            lang == "English" ? (
                                <>
                                    Ararat
                                </>
                            ) : ""
                        }
                        {
                            lang == "Հայերեն" ? (
                                <>
                                    Արարատ
                                </>
                            ) : ""
                        }
                        {
                            lang == "Русский" ? (
                                <>
                                    Арарат
                                </>
                            ) : ""
                        }

                    </p>

                    <p id="MyFont" className='text-[108px] text-[#0e243c] font-black'>
                        {
                            lang == "English" ? (
                                <>
                                    IT School
                                </>
                            ) : ""
                        }
                        {
                            lang == "Հայերեն" ? (
                                <>
                                    IT Դպրոց
                                </>
                            ) : ""
                        }
                        {
                            lang == "Русский" ? (
                                <>
                                    IT Школа

                                </>
                            ) : ""
                        }
                    </p>
                    <p className='font-sans text-[20px] text-[#0e243c]'>
                        {
                            lang == "English" ? (
                                <>
                                    Discover the limitless possibilities of IT
                                </>
                            ) : ""
                        }
                        {
                            lang == "Հայերեն" ? (
                                <>
                                    Բացահայտիր IT անսահման հնարավորությունները
                                </>
                            ) : ""
                        }
                        {
                            lang == "Русский" ? (
                                <>
                                    Откройте для себя безграничные возможности IT

                                </>
                            ) : ""
                        }

                    </p>
                    <button className='border'>
                        {
                            lang == "English" ? (
                                <>
                                    Courses
                                </>
                            ) : ""
                        }
                        {
                            lang == "Հայերեն" ? (
                                <>
                                    Դասընթացներ
                                </>
                            ) : ""
                        }
                        {
                            lang == "Русский" ? (
                                <>
                                    Курсы
                                </>
                            ) : ""
                        }
                    </button>
                </div>
                <div>
                    <img src="https://aitschool.am/images/main_image.png" className='w-[600px]' />
                </div>
            </div>

            <div className='w-[98vw] flex justify-center items-center flex-wrap flex-col p-10'>
                <div className='mt-10 text-[30px] text-[#0e243c] '>

                    {
                        lang == "English" ? (
                            <>
                                Courses
                            </>
                        ) : ""
                    }
                    {
                        lang == "Հայերեն" ? (
                            <>
                                Դասընթացներ
                            </>
                        ) : ""
                    }
                    {
                        lang == "Русский" ? (
                            <>
                                Курсы
                            </>
                        ) : ""
                    }
                </div>
                <div >
                    <div className='flex flex-wrap justify-center items-center w-full'>

                        <div className='flex flex-col justify-center items-center w-[250px] cursor-pointer'>
                            {/* <img src={el.url} className='w-[200xp]' />
                                    <p className='text-[20px]'>{el.name}</p>
                                    <p>{el.time}</p> */}
                            <img src="https://api.aitschool.am/web_course.png" className='w-[200px]'/>
                            <p>
                                {
                                    lang == "English" ? (
                                        <>
                                            Web Programming
                                        </>
                                    ) : ""
                                },
                                {
                                    lang == "Հայերեն" ? (
                                        <>
                                            Web ծրագրավորում
                                        </>
                                    ) : ""
                                },
                                {
                                    lang == "Русский" ? (
                                        <>
                                            Web-программирование
                                        </>
                                    ) : ""
                                }
                            </p>
                            <p>
                                {
                                    lang == "English" ? (
                                        <>
                                            6 Month
                                        </>
                                    ) : ""
                                }
                                {
                                    lang == "Հայերեն" ? (
                                        <>
                                            6 ամիս
                                        </>
                                    ) : ""
                                }
                                {
                                    lang == "Русский" ? (
                                        <>
                                            6 месяцев
                                        </>
                                    ) : ""
                                }

                            </p>
                        </div>
                        <div className='flex flex-col justify-center items-center w-[250px] cursor-pointer'>
                            <img src="https://api.aitschool.am/ui-ux.png" className='w-[200px]'/>
                            <p>
                                UI/UX
                            </p>
                            <p>
                                {
                                    lang == "English" ? (
                                        <>
                                            2 Month
                                        </>
                                    ) : ""
                                }
                                {
                                    lang == "Հայերեն" ? (
                                        <>
                                            2 ամիս
                                        </>
                                    ) : ""
                                }
                                {
                                    lang == "Русский" ? (
                                        <>
                                            2 месяцев
                                        </>
                                    ) : ""
                                }
                            </p>
                        </div>
                        <div className='flex flex-col justify-center items-center w-[250px] cursor-pointer'>
                            <img src="https://api.aitschool.am/smm.png" />
                            <p>
                                SMM
                            </p>
                            <p>
                                {
                                    lang == "English" ? (
                                        <>
                                            2 Month
                                        </>
                                    ) : ""
                                }
                                {
                                    lang == "Հայերեն" ? (
                                        <>
                                            2 ամիս
                                        </>
                                    ) : ""
                                }
                                {
                                    lang == "Русский" ? (
                                        <>
                                            2 месяцев
                                        </>
                                    ) : ""
                                }
                            </p>
                        </div>
                        <div className='flex flex-col justify-center items-center w-[250px] cursor-pointer'>
                            <img src="https://api.aitschool.am/ui-ux.png" className='w-[200px]'/>
                            <p>
                                {
                                    lang == "English" ? (
                                        <>
                                            Graphic Design
                                        </>
                                    ) : ""
                                }
                                {
                                    lang == "Հայերեն" ? (
                                        <>
                                            Գրաֆիկ Դիզայն
                                        </>
                                    ) : ""
                                }{
                                    lang == "Русский" ? (
                                        <>
                                            Графический дизайн
                                        </>
                                    ) : ""
                                }
                            </p>
                            <p>
                                {
                                    lang == "English" ? (
                                        <>
                                            2 Month
                                        </>
                                    ) : ""
                                }
                                {
                                    lang == "Հայերեն" ? (
                                        <>
                                            2 ամիս
                                        </>
                                    ) : ""
                                }
                                {
                                    lang == "Русский" ? (
                                        <>
                                            2 месяцев
                                        </>
                                    ) : ""
                                }
                            </p>
                        </div>
                        <div className='flex flex-col justify-center items-center w-[250px] cursor-pointer'>
                            <img src="https://api.aitschool.am/english.png" className='w-[200px]'/>
                            <p>
                                {
                                    lang == "English" ? (
                                        <>
                                            English
                                        </>
                                    ) : ""
                                }
                                {
                                    lang == "Հայերեն" ? (
                                        <>
                                            Անգլերեն
                                        </>
                                    ) : ""
                                }{
                                    lang == "Русский" ? (
                                        <>
                                            Английский
                                        </>
                                    ) : ""
                                }
                            </p>
                            <p>
                                {
                                    lang == "English" ? (
                                        <>
                                            4 Month
                                        </>
                                    ) : ""
                                }
                                {
                                    lang == "Հայերեն" ? (
                                        <>
                                            4 ամիս
                                        </>
                                    ) : ""
                                }
                                {
                                    lang == "Русский" ? (
                                        <>
                                            4 месяцев
                                        </>
                                    ) : ""
                                }
                            </p>
                        </div>
                        <div className='flex flex-col justify-center items-center w-[250px] cursor-pointer'>
                            <img src="https://api.aitschool.am/english.png" className='w-[200px]'/>
                            <p>
                                {
                                    lang == "English" ? (
                                        <>
                                            English
                                        </>
                                    ) : ""
                                }
                                {
                                    lang == "Հայերեն" ? (
                                        <>
                                            Անգլերեն
                                        </>
                                    ) : ""
                                }{
                                    lang == "Русский" ? (
                                        <>
                                            Английский
                                        </>
                                    ) : ""
                                }
                            </p>
                            <p>
                                {
                                    lang == "English" ? (
                                        <>
                                            4 Month
                                        </>
                                    ) : ""
                                }
                                {
                                    lang == "Հայերեն" ? (
                                        <>
                                            4 ամիս
                                        </>
                                    ) : ""
                                }
                                {
                                    lang == "Русский" ? (
                                        <>
                                            4 месяцев
                                        </>
                                    ) : ""
                                }
                            </p>
                        </div>
                        <div className='flex flex-col justify-center items-center w-[250px] cursor-pointer'>
                            <img src="https://api.aitschool.am/3d-illustration-computer-keyboard-and-mouse-object-png.png" className='w-[200px]'/>
                            <p>
                                {
                                    lang == "English" ? (
                                        <>
                                            Computer literacy
                                        </>
                                    ) : ""
                                }
                                {
                                    lang == "Հայերեն" ? (
                                        <>
                                            Համակարգչային գրագիտություն
                                        </>
                                    ) : ""
                                }{
                                    lang == "Русский" ? (
                                        <>
                                            Компьютерная грамотность
                                        </>
                                    ) : ""
                                }
                            </p>
                            <p>
                                {
                                    lang == "English" ? (
                                        <>
                                            2 Month
                                        </>
                                    ) : ""
                                }
                                {
                                    lang == "Հայերեն" ? (
                                        <>
                                            2 ամիս
                                        </>
                                    ) : ""
                                }
                                {
                                    lang == "Русский" ? (
                                        <>
                                            2 месяцев
                                        </>
                                    ) : ""
                                }
                            </p>
                        </div>
                        <div className='flex flex-col justify-center items-center w-[250px] cursor-pointer'>
                            <img src="https://api.aitschool.am/kids.blog.webp" className='w-[200px]'/>
                            <p>
                                {
                                    lang == "English" ? (
                                        <>
                                            AIT Kids
                                        </>
                                    ) : ""
                                }
                                {
                                    lang == "Հայերեն" ? (
                                        <>
                                            AIT Երեխաներ
                                        </>
                                    ) : ""
                                }{
                                    lang == "Русский" ? (
                                        <>
                                            AIT Дети
                                        </>
                                    ) : ""
                                }
                            </p>
                            <p>
                                {
                                    lang == "English" ? (
                                        <>
                                            8 Month
                                        </>
                                    ) : ""
                                }
                                {
                                    lang == "Հայերեն" ? (
                                        <>
                                            8 ամիս
                                        </>
                                    ) : ""
                                }
                                {
                                    lang == "Русский" ? (
                                        <>
                                            8 месяцев
                                        </>
                                    ) : ""
                                }
                            </p>
                        </div>
                        <div className='flex flex-col justify-center items-center w-[250px] cursor-pointer'>
                            <img src="https://api.aitschool.am/free-linkedin-2-5645838-4695696.webp" className='w-[200px]'/>
                            <p>
                                {
                                    lang == "English" ? (
                                        <>
                                            LinkedIn Mastery
                                        </>
                                    ) : ""
                                }
                                {
                                    lang == "Հայերեն" ? (
                                        <>
                                            LinkedIn-ի վարպետություն
                                        </>
                                    ) : ""
                                }{
                                    lang == "Русский" ? (
                                        <>
                                            Мастерство LinkedIn
                                        </>
                                    ) : ""
                                }
                            </p>
                            <p>
                                {
                                    lang == "English" ? (
                                        <>
                                            10 lessons
                                        </>
                                    ) : ""
                                }
                                {
                                    lang == "Հայերեն" ? (
                                        <>
                                            10 դաս
                                        </>
                                    ) : ""
                                }
                                {
                                    lang == "Русский" ? (
                                        <>
                                            10 уроков
                                        </>
                                    ) : ""
                                }
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Courses