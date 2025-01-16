import { IconCloud } from "./ui/floating-icons";
const slugs = [
  "tensorflow",
  "amazonaws",
  "docker",
  "kubernetes",
  "mlflow",
  "s3",
  "ec2",
  "lambda",
  "pytorch",
  "git",
  "github",
  "firebase",
  "postgresql",
  "gitlab",
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

