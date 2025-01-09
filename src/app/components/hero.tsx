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
    <div id="about" className="min-h-screen w-full flex justify-center items-center p-6">
      <div className="w-full max-w-4xl rounded-lg bg-indigo-600 text-white shadow-lg p-8 md:p-12 space-y-6">
        {/* Heading */}
        <h2 className="text-2xl md:text-4xl font-extrabold text-center bg-indigo-500 py-3 rounded-lg border-4 border-indigo-700">
          <SparklesText text="ABOUT ME" />
        </h2>

        {/* About Me Content */}
        <p className="text-base md:text-lg leading-relaxed">{aboutMeContent}</p>

        {/* Additional Information */}
        <ul className="list-disc pl-6 space-y-1 text-indigo-200">
          <li><strong>From:</strong> Pune, India</li>
          <li><strong>Age:</strong> 21</li>
          <li><strong>Gender:</strong> Male</li>
        </ul>

        {/* Resume Button Centered */}
        <div className="flex justify-center mt-6">
          <Button
            as="a"
            href="https://github.com/suyashambule/resume/blob/main/suyash-3.pdf"
            color="secondary"
            variant="shadow"
            className="bg-indigo-500 hover:bg-indigo-700 transition p-4 rounded-lg font-bold">
            MY RESUME
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
