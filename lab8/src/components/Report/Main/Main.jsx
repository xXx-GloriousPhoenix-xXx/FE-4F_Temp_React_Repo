import { useState, useEffect } from "react";

import cl from './Main.module.css';

import fetchContent from '../../../utils/fetchContent';

import LabList from '../LabList/LabList';
import SectionChoiceList from '../SectionChoiceLIst/SectionChoiceList';

const Main = () => {
    const [lab, setLab] = useState(1);
    const [section, setSection] = useState(1);
    const [sectionTitles, setSectionTitles] = useState(fetchContent(1));
    // const sectionTitles = [
    //     "Тема. Мета. Місце розташування сайту, звіту",
    //     "Опис предметного середовища. Опис бізнес логіки",
    //     "HTML-код Таблиці",
    //     "HTML-код Зображення",
    //     "HTML-код Форми",
    //     "HTML-код",
    //     "Головна сторінка WEB-застосунку",
    //     "Код головної сторінки Web-застосунку",
    //     "Висновки"
    // ]
    useEffect(() => {
        fetchContent(lab)
        .then(data => {
            setSectionTitles(data.sectionTitles);
            setSection(1);
        })
        .catch(err => {
            console.error(err);
            setSectionTitles([]);
            setSection(0);
        });
    })
    return (
        <main className={cl.Wrapper}>
            <LabList
                currentLab={lab}
                onLabChange={setLab}
            />
            <div className={cl.ViewWrapper}>
                <aside className={cl.Content}>
                    <SectionChoiceList
                        choiceList={sectionTitles}
                        currentChoice={section}
                        onChangeChoice={setSection}
                    />
                </aside>
                <section className={cl.Lab}> 
                    
                </section>
            </div>
        </main>
    );
}
 
export default Main;