import cl from './Report.module.css'

import Header from '../../components/Report/Header/Header'
import Main from '../../components/Report/Main/Main'

const Report = () => {
    return (
        <div className={cl.Wrapper}>
            <Header/>
            <Main/>
            <footer>

            </footer>
        </div>
    );
}
 
export default Report;