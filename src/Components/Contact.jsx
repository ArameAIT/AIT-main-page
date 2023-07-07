import React from 'react'

function Contact() {
    return (
        <div className='flex justify-center items-center flex-col p-20'>
            <div className='flex'>
                <div className='flex ml-10 mr-10'>
                    <img src="https://aitschool.am/images/Phone.svg" className='w-[30px] mr-[10px]' />
                    <p>+374(93)-67-69-66</p>
                </div>
                <div className='flex ml-10 mr-10'>
                    <img src="https://aitschool.am/images/Mail.svg" className='w[30px] mr-[10px]' />
                    <p>info@aitschool.am</p>
                </div>
                <div className='flex ml-10 mr-10'>
                    <img src="https://aitschool.am/images/Instagram.svg" className='w[30px] mr-[10px]' />
                    <p>ararat_itcenter</p>
                </div>
            </div>
            <div className='flex'>
                <div className='flex ml-10 mr-10'>
                    <img src="https://aitschool.am/images/FacebookIcon.svg" className='w[30px] mr-[10px]' />
                    <p>Ararat IT Center</p>
                </div>
                <div className='flex ml-10 mr-10'>
                    <img src="https://aitschool.am/images/LinkedinIcon.svg" className='w[30px] mr-[10px]' />
                    <p>Ararat IT Center</p>
                </div>
            </div>
        </div>
    )
}

export default Contact