type TagProps = {
  title: string;
};

const Tag = ({ title }: TagProps) => {
  return (
    <span className="px-2 py-1 bg-complementary-gray/50 dark:bg-lightScheme-tertiary/50 rounded-full ">
      <p className="opacity-100 text-complementary-black dark:text-lightScheme-primary">
        {title}
      </p>
    </span>
  );
};

export default Tag;
