import { NavLink, Link } from 'react-router-dom';
import './Sidebar.css'


const sideBarNavLinks = [
    { id: 1, picture: '/studentsLogo.svg', text: 'Students', link: '/students' },
    { id: 2, picture: '/subjectsLogo.svg', text: 'Subjects', link: '/subjects' },
    { id: 3, picture: '/gradesLogo.svg', text: 'Grades', link: '/grades' }
]
const Sidebar = () => {
    return (
        <>
            <div className='sidebar'>
                <div className='sidebar_header'>
                    <div className='header_logo'>
                        <Link to='/student'>
                            <img src="/Logo.svg" alt="" />
                        </Link>
                    </div>
                    <div className='version'>
                        <img src="/version.svg" alt="" />
                    </div>
                </div>
                <div className='navlinks_parent'>
                    {
                        sideBarNavLinks.map((nav) => {
                            return <NavLink className={({ isActive }) => (isActive ? 'active' : '')} key={nav.id} to={nav.link}><img src={nav.picture} alt="" />{nav.text}</NavLink>
                        })
                    }
                </div>
            </div>
        </>
    )
}
export default Sidebar;