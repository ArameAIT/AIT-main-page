import React, { useContext } from 'react'
import LangContext from '../Context/LangContext'

function Header() {

    const { lang, setLang } = useContext(LangContext)

    function forSubmit(e) {
        e.preventDefault()
        const formData = new FormData(e.target)
        const language = formData.get("for-language")
        setLang(language)
    }
    return (
        <div className='flex  justify-between  items-center p-5'>
            <div className='flex justify-start'>
                <img src="/AIT.png" className='w-[300px] ml-6' />
            </div>
            <div>
                <ul className='text-[#0e243c] flex mr-[120px] font-serif font-normal cursor-pointer'>
                    {lang == "English" ? (
                        <>
                            <li>Main</li>
                            <li>Courses</li>
                            <li>Registration</li>
                            <li>About us</li>
                            <li>Blog</li>
                            <li>Contact</li>
                        </>
                    ) : ""}
                    {lang == "Հայերեն" ? (
                        <>
                            <li>Գլխավոր</li>
                            <li>Դասընթացներ</li>
                            <li>Գրանցում</li>
                            <li>Մեր մասին</li>
                            <li>Բլոգ</li>
                            <li>Կապ</li>
                        </>
                    ) : ""}
                    {lang == "Русский" ? (
                        <>
                            <li>Основной</li>
                            <li>Курсы</li>
                            <li>Регистрация</li>
                            <li>O нас</li>
                            <li>Блог</li>
                            <li>Контакт</li>
                        </>
                    ) : ""}

                </ul>
            </div>
            <form onSubmit={forSubmit} className='flex flex-col'>
                <select name="for-language" id="for-language">

                    <option value="English">English</option>
                    <option value="Հայերեն">Հայերեն</option>
                    <option value="Русский">Русский</option>
                </select>
                <button type='submit' className='language-button'>
                    {lang == "English" ? (
                        <>
                            Change Language
                        </>
                    ):""}
                    {lang == "Հայերեն" ? (
                        <>
                            Փոխել Լեզուն
                        </>
                    ):""}
                    {lang == "Русский" ? (
                        <>
                            Изменение языка
                        </>
                    ):""}

                </button>
            </form>
        </div>
    )
}

export default Header