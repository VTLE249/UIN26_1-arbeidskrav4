
// import { sanityClient } from "../lib/sanity"; // Midlertidig kommentert ut for å feilsøke
import "./Stephen.css";

import "./Stephen.css";

export default function Stephen() {
  return (
    <article className="stephen-card">
      <img
        src="https://api.dicebear.com/7.x/pixel-art/svg?seed=stephen"
        alt="avatar av Stephen"
        className="stephen-avatar"
      />

      <h3>Stephen</h3>

      <p className="stephen-email">
        <a href="mailto:stephens@hiof.no">stephens@hiof.no</a>
      </p>

      <p className="stephen-study">Informasjonssystemer</p>
    </article>
  );
}
