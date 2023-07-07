import React from 'react'

function AboutAIT() {
    return (
        <div className='p-20'>
            <div className=' text-[30px] flex justify-center items-center mt-20'>
                Ինչ կտա ձեզ AIT-ն
            </div>
            <div className='w-[90vw] flex justify-between'>
                <div className='w-[49vw] flex justify-center items-center flex-col'>
                    <div className='p-[30px] flex justify-center items-center'>
                        <div>
                            <p className='p-[30px] text-[80px] font-bold'>01</p>
                        </div>
                        <div className='flex flex-col justify-center items-center'>

                            <p className='text-[30px]'>Կրթություն</p>
                            <p>Մասնակցի՛ր 10 ամսյա դասընթացին և ձեռք բեր ծրագրավորման հիմնարար գիտելիքներ: Ինչպես նաև կարող եք ուսանել Graphic Design, UI/UX Design, SMM և Անգլերեն</p>
                        </div>
                    </div>
                    <div className='p-[30px] ml-[60px] flex justify-center items-center'>
                        <div>

                            <p className='p-[30px] text-[80px] font-bold'>02</p>
                        </div>
                        <div className='flex flex-col justify-center items-center'>

                            <p className='text-[30px]'>Պրակտիկա</p>
                            <p>Դասընթացի ավարտից հետո անցեք փորձաշրջան դպրոցին կից գործող ծրագրավորման ընկերությունում։ Կիրառի՛ր գիտելիքներդ՝ աշխատելով իրական նախագծերի վրա։</p>
                        </div>
                    </div>
                    <div className='p-[30px] flex justify-center items-center'>
                        <div>

                            <p className=' p-[30px] text-[80px] font-bold'>03</p>
                        </div>
                        <div className='flex flex-col justify-center items-center'>

                            <p className='text-[30px]'>Աշխատանք</p>
                            <p>Ստացի՛ր մեր թիմին միանալու հնարավորություն։ Մեր ուսանողները կազմում են մեր թիմի 80%ը։</p>
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