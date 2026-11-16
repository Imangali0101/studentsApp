import './Header.css'

const Header = () => {
    return (
        <>
            <header className='header'>
                <div className='header_content'>
                    <img src="/HC.svg" alt="" />
                </div>
                <div className='header_profile'>
                    <img src="/profileIcon.svg" alt="" />
                </div>
            </header>
        </>
    )
}
export default Header;