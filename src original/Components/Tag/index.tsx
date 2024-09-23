type TagProps = {
  title: string;
};

const Tag = ({ title }: TagProps) => {
  return (
    <h1
      className="px-2 py-1 bg-complementary-gray/50 dark:bg-lightScheme-tertiary/50 rounded-full"
      id={title}
    >
      {title}
    </h1>
  );
};

export default Tag;
