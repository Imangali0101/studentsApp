import { useDispatch, useSelector } from 'react-redux'
import './Students.css'
import { useState } from 'react'
import StudentRow from './StudentRow'






const Students = () => {
    const students = useSelector((state) => state.students)
    const dispatch = useDispatch()
    const [search, setSearch] = useState('')
    const [category, setCategory] = useState('All')
    const [isOpen, setIsOpen] = useState(false)

    const studentsStatistic = [
        { id: 1, title: 'TOTAL ENROLLED', stat: students.length, fact: '', picture: '' },
        { id: 2, title: 'ACTIVE COHORTS', stat: students.length, fact: '', picture: '' },
        { id: 3, title: 'DIRECTORY STATUS', stat: students.length, fact: '', picture: '' }
    ]
    const groupButtons = [
        { id: 1, text: `All Cohorts(${students.length})`, filter: 'All' },
        { id: 2, text: 'CS-21', filter: 'CS-21' },
        { id: 3, text: 'CS-22', filter: 'CS-22' },
        { id: 4, text: 'CS-23', filter: 'CS-23' }
    ]
    const filterBySearch = students.filter((st) => {
        return (
            st.name.toLowerCase().includes(search.toLowerCase()) ||
            st.name.toLowerCase().includes(search.toLowerCase())
        )
    })

    const filterByCategory = filterBySearch.filter((st) => {
        if (category === 'CS-21') {
            return st.group === 'CS-21'
        }
        if (category === 'CS-22') {
            return st.group === 'CS-22'
        }
        if (category === 'CS-23') {
            return st.group === 'CS-23'
        }
        return st;
    })

    const renderStudents = filterByCategory.map((st) => {
        return <StudentRow key={st.id} {...st} />
    })
    return (
        <>
            <section className='students'>
                <div className='container'>
                    <div className='statistic_parent_render'>
                        {studentsStatistic.map((s) => {
                            return (
                                <div className='statistic_block' key={s.id}>
                                    <div>

                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <div className='students_filters'>
                        <div className='filters_content_parent'>
                            <div className='content_left'>
                                <h3>Students</h3>
                                <p>Manage registered university students, cohort groups, and directory records.</p>
                            </div>
                            <div className='content_right'>
                                <form className='search_form'>
                                    <img src="/loop.svg" alt="" />
                                    <input type="text" placeholder='Filter students or groups...' value={search}
                                        onChange={(e) => setSearch(e.target.value)} />
                                </form>
                                <div className='add_student_parent'>
                                    <button onClick={() => setIsOpen(!isOpen)}><img src="/Plus.svg" alt="" />Add Student</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='group_filter_parent'>
                        <div className='filterButtons_parent'>
                            {groupButtons.map((b) => {
                                return <button key={b.id} className={category === b.filter ? 'active' : ''} onClick={(e) => setCategory(b.filter)}>{b.text}</button>
                            })}
                        </div>
                    </div>
                    <div className='student_render'>
                        <div></div>
                        {renderStudents}
                        <div className='students_render_ending'>
                            <div className='total_students'>
                                <p>{students.length} students registered in database</p>
                            </div>
                            <div>
                                <p>Displaying page 1 of 1</p>
                                <button></button>
                                <button></button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Students;