import { FocusCards } from "./ui/focus-cards";

export function FocusCardsDemo() {
  const cards = [
    {
      title: "LLM Engineering: Master AI, Large Language Models & Agents",
      src: "/images/UC-74d0c401-0ca5-4e03-b07d-fa294ce144b8.jpg", 
      link: "https://udemy-certificate.s3.amazonaws.com/image/UC-74d0c401-0ca5-4e03-b07d-fa294ce144b8.jpg?v=1734692956000",
    },
    {
      title: "Deep Learning Masterclass with TensorFlow 2 Over 20 Projects",
      src: "/images/UC-8855a497-f6da-4b78-b4a0-2ee5d273abb2.jpg", 
      link: "https://www.udemy.com/certificate/UC-8855a497-f6da-4b78-b4a0-2ee5d273abb2/",
    },
    {
      title: "MLOps with AWS - Bootcamp - Zero to Hero Series",
      src: "/images/UC-c0e76596-298c-42be-aa64-d9c1f76e34f4.jpg", 
      link: "https://www.coursera.org/account/accomplishments/verify/NT8CFY1VR65U",
    },
  ];

  return (
    <section id="certificates">
      <FocusCards cards={cards} />
    </section>
  );
}
