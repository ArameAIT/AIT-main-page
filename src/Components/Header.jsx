import React from 'react'

function Header() {

    function forSubmit(e){
        e.preventDefault()
        const formData = new FormData(e.target)
        const language = formData.get("for-language")
        console.log(language);
    }
    return (
        <div className='flex  justify-between  items-center p-5'>
            <div className='flex justify-start'>
                <img src="/AIT.png" className='w-[300px] ml-6' />
            </div>
            <div>
                <ul className='text-cyan-900 flex mr-[120px] font-serif font-normal cursor-pointer'>
                    <li>Գլխավոր</li>
                    <li>Դասընթացներ</li>
                    <li>Գրանցում</li>
                    <li>Մեր մասին</li>
                    <li>Բլոգ</li>
                    <li>Կապ</li>
                </ul>
            </div>
            <form onSubmit={forSubmit} className='flex flex-col'>
                <select name="for-language" id="for-language">

                    <option value="English">English</option>
                    <option value="Armenian">Armenian</option>
                    <option value="Russian">Russian</option>
                </select>
                <button type='submit' className='language-button'>Change Language</button>
            </form>
        </div>
    )
}

export default Header