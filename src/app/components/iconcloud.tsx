import { IconCloud } from "./ui/floating-icons";

const slugs = [
  "tensorflow",
  "pytorch",
  "scikit-learn",
  "keras",
  "mlflow",
  "huggingface",
  "xgboost",
  "lightgbm",
  "fastai",
  "openai",
  "pandas",
  "numpy",
  "matplotlib",
  "seaborn",
  "amazonaws",
  "s3",
  "ec2",
  "lambda",
  "docker",
  "kubernetes",
  "git",
  "github",
  "gitlab",
  "postgresql",
  "firebase",
  "sonarqube",
  "jira",
  "nginx",
];

export function IconCloudDemo() {
  // Map the slugs to the image URLs using simpleicons.org
  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`
  );

  return (
    <div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden bg-background">
      <IconCloud images={images} />
    </div>
  );
}
