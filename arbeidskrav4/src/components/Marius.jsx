import "./Marius.css";

export default function Marius() {
    return (
        <article className="marius-card">
            <img className="marius-avatar" src="https://api.dicebear.com/7.x/bottts/svg?seed=Marius&backgroundColor=b6e3f4,c0aede,d1d4f9&primaryColor=9b5de5" alt="avatar av Marius" />

            <h2 className="marius-navn">Trond Marius Karlsen</h2>

            <p className="marius-mail">
                <a href="mailto:trondmk@hiof.no">trondmk@hiof.no</a>
            </p>

            <p className="marius-studie">
                Informasjonssystemer
            </p>
        </article>
    );
}