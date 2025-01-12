"use client";

import { HoverEffect } from "./ui/card-hover-effect";
import { Button } from '@nextui-org/react';


export function CardDemo() {
  const projects = [
    {
      image: "/images/NS.jpeg", // Image path
      title: <span className="text-violet-600">Network security using mlops</span>,
      description:"This project implements machine learning techniques for network security, focusing on identifying and mitigating phishing threats using phishing datasets. It integrates data handling, model training, and security analytics for enhanced threat detection.",
      link: "https://github.com/suyashambule/Network-security-using-machine-learning",
    },
    {
      image: "/images/intent.png", // Image path
      title: <span className="text-violet-600">Intent Classification Using DeBERT Model</span>,
      description:"This project focuses on intent classification using the DeBERTa (Decoding-enhanced BERT with disentangled attention) model. The system classifies user intents in natural language text by leveraging DeBERTa's advanced transformer architecture. Built with TensorFlow, the model is fine-tuned on a tranformer"
    ,
      link: "https://github.com/suyashambule/Intent-classification-",
    },
    {
      image: "/images/Unknown.jpeg", // Image path
      title: <span className="text-violet-600">Sentiment Analysis Using BERT</span>,
      description: "A sentiment analysis tool powered by BERT (Bidirectional Encoder Representations from Transformers), which provides insights and management solutions for orphanages. The website is fully dynamic with user and admin panels, offering features like appointment scheduling related to adoption, fundraisers, donations, and payment integration.",
      link: "https://github.com/suyashambule/Sentiment-analysis-using-Bert",
    }
    
  ];

  return (
    <div id="projects">
      <div className="flex justify-center">
        <h2 className="text-lg md:text-4xl mb-4 pb-3 pl-3 text-white dark:text-white max-w-4xl rounded-lg border-8 border-indigo-500/100 text-center bg-indigo-500 font-bold">
          PROJECTS
        </h2>
      </div>
      <div className="max-w-5xl mx-auto px-4">
        <HoverEffect
          items={projects}
          className="grid grid-cols-1 md:grid-cols-3 gap-24"
        />
      </div>
      <div className="d-grid gap-2 d-md-flex flex justify-center text-white dark:text-white">
        <Button
          as="a"
          href="https://github.com/suyashambule?tab=repositories"
          color="secondary"
          variant="shadow"
          className="bg-indigo-500 p-4 rounded-lg font-bold pb-10"
        >
          View All Projects
        </Button>
      </div>

    </div>
  );
}
