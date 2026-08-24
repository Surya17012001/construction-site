import { useState } from "react";

import PageHeader from "../components/PageHeader";
import Stats from "../components/Stats";

const faqs = [
  [
    "What services does Flomatexs Construction Limited offer?",
    "Building Construction, House Renovation, Interior Design, Architecture Design, Fixing & Support and Painting.",
  ],

  [
    "How can I request a quote for my construction project?",
    "Look for a Contact or Get a Quote page/link.",
  ],

  [
    "Does Flomatexs Construction Limited handle both small and large-scale projects?",
    "Yes. The company handles both small and large-scale projects.",
  ],

  [
    "What sets Flomatexs Construction Limited apart from other construction companies?",
    "Expertise and experience, quality craftsmanship, customer satisfaction, transparent communication and attention to detail.",
  ],

  [
    "Is Flomatexs Construction Limited licensed and insured?",
    "Yes, according to the supplied site content, the company is licensed and insured.",
  ],
];

export default function About() {
  const [open, setOpen] = useState(null);

  return (
    <>
      <PageHeader title="About Us" />

      <section className="section">

        <div className="container two-col">

          <img
            className="rounded-img"
            src="/img/proj3/IMG-20240313-WA0056.jpg"
            alt="Construction"
          />

          <div>

            <p className="eyebrow">
              Welcome to Flomatexs
            </p>

            <h2>
              15 Years Experience
            </h2>

            <p>
              Flomatexs Construction Limited is a
              leading construction company with a rich
              history of delivering high-quality projects
              across diverse sectors.
            </p>

            <p>
              We are committed to exceeding expectations
              and setting new standards of craftsmanship.
            </p>

            <p>
              From residential developments to commercial
              complexes, industrial facilities and
              infrastructure projects, we have successfully
              completed a wide range of projects.
            </p>

          </div>

        </div>

      </section>

      <Stats />

      <section
        id="faq"
        className="section faq"
      >

        <div className="container">

          <div className="section-heading">

            <p>
              Frequently Asked Question
            </p>

            <h2>
              You May Ask
            </h2>

          </div>

          {faqs.map(([question, answer], index) => (
            <div
              className="faq-item"
              key={question}
            >

              <button
                onClick={() =>
                  setOpen(
                    open === index
                      ? null
                      : index
                  )
                }
              >
                {question}

                <span>
                  {open === index
                    ? "−"
                    : "+"}
                </span>
              </button>

              {open === index && (
                <div className="faq-answer">
                  {answer}
                </div>
              )}

            </div>
          ))}

        </div>

      </section>
    </>
  );
}