import React from 'react'

function Courses() {
    const forCourses = [
        {
            id: 1,
            name: "Web ծրագրավորում",
            url: "https://api.aitschool.am/web_course.png",
            time: "6 ամիս"
        },
        {
            id: 2,
            name: "UI/UX",
            url: "https://api.aitschool.am/ui-ux.png",
            time: "2 ամիս"
        },
        {
            id: 3,
            name: "SMM",
            url: "https://api.aitschool.am/smm.png",
            time: "2 ամիս"
        },
        {
            id: 4,
            name: "Գրաֆիկ դիզայն",
            url: "https://api.aitschool.am/graphic-design.png",
            time: "2 ամիս"
        },
        {
            id: 5,
            name: "Անգլերեն",
            url: "https://api.aitschool.am/english.png",
            time: "4 ամիս"
        },
        {
            id: 6,
            name: "Համակարգչային գրագիտություն",
            url: "https://api.aitschool.am/3d-illustration-computer-keyboard-and-mouse-object-png.png",
            time: "2 ամիս"
        },
        {
            id: 7,
            name: "AIT Kids",
            url: "https://api.aitschool.am/kids.blog.webp",
            time: "8 ամիս"
        },
        {
            id: 8,
            name: "Linkedin Mastery",
            url: "https://api.aitschool.am/free-linkedin-2-5645838-4695696.webp",
            time: "10 ամիս"
        },
    ]
    return (
        <div className='flex flex-col'>
            <div className='w-full flex items-center justify-between'>
                <div className='ml-[150px] flex flex-col  '>
                    <p className='p-teg'>Ararat</p>
                    <p id="MyFont" className='text-[108px]'>IT School</p>
                    <p className='font-sans text-[20px]'>Բացահայտիր IT անսահման հնարավորությունները</p>
                    <button className='border'>
                        Դասընթացներ
                    </button>
                </div>
                <div>
                    <img src="https://aitschool.am/images/main_image.png" className='w-[600px]' />
                </div>
            </div>

            <div className='w-[98vw] flex justify-center items-center flex-wrap flex-col p-10'>
                <div className='mt-10 text-[30px]'>
                    Դասընթացներ
                </div>
                <div className='flex flex-wrap justify-center items-center w-full'>

                    {
                        forCourses.map((el) => {
                            return (
                                <div className='flex flex-col justify-center items-center w-[250px] cursor-pointer' key={el.id}>
                                    <img src={el.url} className='w-[200xp]' />
                                    <p className='text-[20px]'>{el.name}</p>
                                    <p>{el.time}</p>
                                </div>
                            )
                        })
                    }
                </div>

            </div>
        </div>
    )
}

export default Courses