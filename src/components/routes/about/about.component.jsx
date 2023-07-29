import './about.styles.scss';

const AboutPage = () => {
    return (
        <>
            <div className="about-page-container">
                <div className="about-page-summary-container">
                    <h2>TL;DR</h2>
                    <article>
                        <span>
                            The <i>Pathos Store</i> is a fullstack web application that I built for practice and fun. This is mainly a React/ Firebase project, for details see below:
                        </span>
                        <ul> Frontend technologies:
                           <li>React, React-router</li>
                           <li>Javascript</li>
                           <li>HTML, SCSS</li>
                        </ul>
                    </article>
                </div>
            </div>
        </>
    );
}


export default AboutPage;