import { useEffect, useState } from "react";
import { sanityClient } from "../lib/sanity";

export default function Assignments() {
  const [assignments, setAssignments] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(`*[_type == "assignment"] | order(_createdAt asc)`)
      .then((data) => setAssignments(data));
  }, []);

  return (
    <>
      {assignments.map((assignment) => (
        <article key={assignment._id} className="assignment-card">
          <h3>{assignment.title}</h3>
          <p>{assignment.description}</p>
        </article>
      ))}
    </>
  );
}
