import React, { useContext } from 'react'
import LangContext from '../Context/LangContext'

function AboutAIT() {
    const { lang } = useContext(LangContext)
    return (
        <div className='p-20'>
            <div className='text-[#0e243c] text-[30px] flex justify-center items-center mt-20'>
                {
                    lang == "English" ? (
                        <>
                            What will AIT give you
                        </>
                    ) : ""
                }
                {
                    lang == "Հայերեն" ? (
                        <>
                            Ինչ կտա ձեզ AIT-ն
                        </>
                    ) : ""
                }
                {
                    lang == "Русский" ? (
                        <>
                            Что вам даст AIT
                        </>
                    ) : ""
                }
            </div>
            <div className='w-[90vw] flex justify-between'>
                <div className='w-[49vw] flex justify-center items-center flex-col'>
                    <div className='p-[30px] flex justify-center items-center'>
                        <div>
                            <p className='p-[40px] text-[#0e243c] text-[100px] font-bold'>01</p>
                        </div>
                        <div className='flex flex-col justify-center '>

                            <p className='text-[30px] text-[#0e243c]'>
                                {
                                    lang == "English" ? (
                                        <>
                                            Education
                                        </>
                                    ) : ""
                                }
                                {
                                    lang == "Հայերեն" ? (
                                        <>
                                            Կրթություն
                                        </>
                                    ) : ""
                                }
                                {
                                    lang == "Русский" ? (
                                        <>
                                            Образование
                                        </>
                                    ) : ""
                                }


                            </p>
                            <p className='text-[#0e243c]'>
                                {
                                    lang == "English" ? (
                                        <>
                                            Take the 10-month course and gain basic programming knowledge. You can also study Graphic Design, UI/UX Design, SMM and English
                                        </>
                                    ) : ""
                                }
                                {
                                    lang == "Հայերեն" ? (
                                        <>
                                            Մասնակցի՛ր 10 ամսյա դասընթացին և ձեռք բեր ծրագրավորման հիմնարար գիտելիքներ: Ինչպես նաև կարող եք ուսանել Graphic Design, UI/UX Design, SMM և Անգլերեն

                                        </>
                                    ) : ""
                                }
                                {
                                    lang == "Русский" ? (
                                        <>
                                            Пройдите 10-месячный курс и получите базовые знания в области программирования. Вы также можете изучать графический дизайн, дизайн UI / UX, SMM и английский язык.

                                        </>
                                    ) : ""
                                }
                            </p>
                        </div>
                    </div>
                    <div className='p-[30px] ml-[60px] flex justify-center items-center'>
                        <div>

                            <p className='p-[40px] text-[#0e243c] text-[100px] font-bold'>02</p>
                        </div>
                        <div className='flex flex-col justify-center'>

                            <p className='text-[30px] text-[#0e243c] '>
                                {
                                    lang == "English" ? (
                                        <>
                                            Practice
                                        </>
                                    ) : ""
                                }
                                {
                                    lang == "Հայերեն" ? (
                                        <>
                                            Պրակտիկա
                                        </>
                                    ) : ""
                                }
                                {
                                    lang == "Русский" ? (
                                        <>
                                            Упражняться
                                        </>
                                    ) : ""
                                }

                            </p>
                            <p className='text-[#0e243c]'>
                                {
                                    lang == "English" ? (
                                        <>
                                            After completing the course, take a trial period at a programming company operating under the school. Apply your knowledge by working on real projects.
                                        </>
                                    ) : ""
                                }
                                {
                                    lang == "Հայերեն" ? (
                                        <>
                                            Դասընթացի ավարտից հետո անցեք փորձաշրջան դպրոցին կից գործող ծրագրավորման ընկերությունում։ Կիրառի՛ր գիտելիքներդ՝ աշխատելով իրական նախագծերի վրա:

                                        </>
                                    ) : ""
                                }
                                {
                                    lang == "Русский" ? (
                                        <>
                                            После прохождения курса пройдите испытательный срок в компании-разработчике, работающей при школе. Применяйте свои знания, работая над реальными проектами.

                                        </>
                                    ) : ""
                                }
                            </p>
                        </div>
                    </div>
                    <div className='p-[30px] flex justify-center '>
                        <div>

                            <p className=' p-[40px] text-[100px] text-[#0e243c] font-bold'>03</p>
                        </div>
                        <div className='flex flex-col justify-center '>

                            <p className='text-[30px] text-[#0e243c]'>
                                {
                                    lang == "English" ? (
                                        <>
                                            Work
                                        </>
                                    ) : ""
                                }
                                {
                                    lang == "Հայերեն" ? (
                                        <>
                                            Աշխատանք
                                        </>
                                    ) : ""
                                }
                                {
                                    lang == "Русский" ? (
                                        <>
                                            Работа

                                        </>
                                    ) : ""
                                }

                            </p>
                            <p className='text-[#0e243c]'>
                                {
                                    lang == "English" ? (
                                        <>
                                            Get a chance to join our team. Our students make up 80% of our team.
                                        </>
                                    ) : ""
                                }
                                {
                                    lang == "Հայերեն" ? (
                                        <>
                                            Ստացի՛ր մեր թիմին միանալու հնարավորություն։ Մեր ուսանողները կազմում են մեր թիմի 80%ը։

                                        </>
                                    ) : ""
                                }
                                {
                                    lang == "Русский" ? (
                                        <>
                                            Получите шанс присоединиться к нашей команде. Наши студенты составляют 80% нашей команды.

                                        </>
                                    ) : ""
                                }
                            </p>
                        </div>
                    </div>
                </div>
                <div className='w-[49vw]'>
                    <img src="https://aitschool.am/images/globus.png" className='w-[500px]' />
                </div>
            </div>
        </div>
    )
}

export default AboutAIT