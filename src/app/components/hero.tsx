import { SparklesText } from './SparklesText';
import { Button } from '@nextui-org/react';

const Hero: React.FC = () => {
  const aboutMeContent = 
  "Pursuing my Bachelor's in Computer Engineering from Vishwakarma University, I am an aspiring DevOps Engineer with a strong foundation in AI/ML, Deep Learning, and MLOps. " +
  "My expertise spans cloud computing, with hands-on experience in AWS, Docker, Kubernetes, and CI/CD pipelines. " +
  "I have completed multiple projects involving Machine Learning model deployment, automation, and end-to-end system monitoring using tools like Grafana, Prometheus, and GitHub Actions. " +
  "Additionally, I am proficient in Deep Learning and Generative AI, leveraging state-of-the-art models to build innovative solutions. " +
  "Passionate about continuous learning and technological advancement, I am dedicated to optimizing development workflows and contributing to scalable, impactful solutions. " +
  "Let's collaborate to drive the future of technology together!";

  return (
    <div id="about" className="min-h-screen w-full p-4 md:p-20 text-white dark:text-white">
      {/* About Me Section */}
      <div className="space-y-6">
        <h2 className="text-xl sm:text-2xl md:text-4xl mb-4 text-white dark:text-white max-w-4xl rounded-lg border-4 md:border-8 border-indigo-500/100 text-center bg-indigo-500 font-bold">
          <SparklesText text="ABOUT ME" />
        </h2>
        <p className="text-sm md:text-lg text-black dark:text-white">{aboutMeContent}</p>
        <ul className="list-disc text-left mb-4 ml-4 text-indigo-500 animate__animated animate__slideInRight text-sm md:text-base">
          <li>From: Pune, India</li>
          <li>Age: 21</li>
          <li>Gender: Male</li>
        </ul>
        <div className="flex justify-center mt-6">
          <Button
            as="a"
            href="https://github.com/suyashambule/resume/blob/main/suyash.pdf"
            color="secondary"
            variant="shadow"
            className="bg-indigo-500 p-4 rounded-lg font-bold flex justify-center items-center">
            MY RESUME
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
