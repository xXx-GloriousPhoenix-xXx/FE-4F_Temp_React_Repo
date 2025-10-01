import { useState } from "react";

import cl from './Main.module.css';

import LabList from '../LabList/LabList';

const Main = () => {
    const [lab, setLab] = useState(1);

    return (
        <main className={cl.Wrapper}>
            <LabList
                currentLab={lab}
                onLabChange={setLab}
            />
            <div className={cl.LabWrapper}>
                <aside className={cl.Content}>
                    {/* Container for links (Headers etc) */}
                    {`Links for PR${lab}`}
                </aside>
                <section>
                    {/* Container for lab content */}
                    {`Content for PR${lab}`}
                </section>
            </div>
        </main>
    );
}
 
export default Main;